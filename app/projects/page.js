import { marked } from "marked";
import * as cheerio from "cheerio";
import ProjectsPage from "../components/pages/ProjectsPage";

async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/acekyd/made-in-nigeria/master/README.MD"
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

function convertToJSON(repositories) {
  return repositories.map((repository) => {
    const $ = cheerio.load(repository);

    // Extract text content and href from <a> element
    const repoName = $("a").first().text();
    const repoLink = $("a").first().attr("href");

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
export default async function Projects() {
  const data = await getData();
  return (
    <main>
      <title>Projects | Made In Nigeria</title>
      <ProjectsPage repositories={data} />
    </main>
  );
}
