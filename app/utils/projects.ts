import { marked } from "marked";
import * as cheerio from "cheerio";

async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/acekyd/made-in-nigeria/main/README.MD",
    { next: { revalidate: 5000 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const markdownData = await res.text();
  const html = marked(markdownData);
  const $ = cheerio.load(html); // load the html string into cheerio

  // Select all <li> elements using jQuery-like syntax and extract their text
  const liTextArray = $("li")
    .map((index, element) => $(element).html())
    .get();

  // process the text to get the data you want
  const repositories = convertToJSON(liTextArray);

  return repositories;
}

function convertToJSON(repositories: string[]) {
  return repositories.map((repository) => {
    const $ = cheerio.load(repository);

    // Extract text content and href from <a> element
    const repoName = $("a").first().text();
    const repoLink = $("a").first().attr("href");

    // @ts-ignore
    let description = $("*").contents()[3].data; // I don't know why the fuck this works but if it's not broken, don't touch it.
    const repoDescription = description.replace(/^ - /, "");
    const repoAuthor = $("strong a").text();
    const repoAuthorLink = $("strong a").attr("href");

    // Create JSON object
    return {
      repoName,
      repoLink,
      repoDescription,
      repoAuthor,
      repoAuthorLink,
    };
  });
}

export const useProjects = async () => {
  const data = await getData();

  const filterProjects = () => {
    return {
      byName: (input: string) => {
        return data.filter(
          (projects) =>
            projects.repoName
              .toLocaleLowerCase()
              .includes(input.toLocaleLowerCase()) ||
            projects.repoName.toLocaleLowerCase() === input.toLocaleLowerCase()
        );
      },

      byAuthor: (input: string) => {
        return data.filter(
          (projects) =>
            projects.repoAuthor.toLocaleLowerCase() ===
              `@${input.toLocaleLowerCase()}` ||
            projects.repoAuthor
              .toLocaleLowerCase()
              .includes(`@${input.toLocaleLowerCase()}`)
        );
      },

      byLetter: (input: string) => {
        return data.filter((projects) =>
          projects.repoName
            .toLocaleLowerCase()
            .startsWith(input.toLocaleLowerCase())
        );
      },
    };
  };

  return {
    projects: data,
    filterProjects,
  };
};
