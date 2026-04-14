import HomePage from './components/pages/HomePage';

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
