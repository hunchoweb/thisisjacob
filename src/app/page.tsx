'use client';

// import Carousel from './components/Carousel';
import Header from './components/Header';
// import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';

export default function Home() {
  return (
      <div>
        <main className="min-h-screen">
          <div className='relative'>
            <Header currentPage="home" />
            <Hero />
            {/* <Carousel /> */}
          </div>
        </main>
      </div>
  );
}
