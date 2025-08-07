import Head from 'next/head';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import Team from '../components/Team';
import Contact from '../components/Contact'; // ← add this

export default function Home() {
  return (
    <>
      <Head>
        <title>DreamVator</title>
      </Head>

      <main>
        <Hero />
        <Mission />
        <Vision />
        <Team />
        <Contact /> {/* ← add this */}
      </main>
    </>
  );
}