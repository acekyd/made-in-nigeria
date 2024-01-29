import AboutPage from "../components/pages/AboutPage";
import data from "../assets/team.json";

export default async function About() {
  return (
    <main>
      <title>About | Made In Nigeria</title>
      <AboutPage teams={data} />
    </main>
  );
}
