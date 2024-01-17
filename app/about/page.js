import AboutPage from "../components/pages/AboutPage";
import data from "../assets/team.json"

export default function About() {
    return (
        <main>
            <title>About</title>
            <AboutPage teams={data} />
        </main>
    )
}
