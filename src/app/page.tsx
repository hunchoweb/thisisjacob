// pages/index.js
import Head from 'next/head';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <div>
      <Head>
        <title>This is Jacob Men&apos;s Fellowship</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-900">
        <Carousel />
      </main>
    </div>
  );
}
