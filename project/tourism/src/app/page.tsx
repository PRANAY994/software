'use client';
import Header from "./components/header";
import Heading from "./components/mainheading";
import Slider from "./components/slider";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      <main className="flex-grow flex flex-col items-center text-center">
        <Heading />

        {/* Tourism Section */}
        <section className="py-10 px-6 w-full flex flex-col items-center">
          <h1 className="font-serif text-5xl font-extrabold text-gray-900 tracking-wide drop-shadow-lg mb-4">
            🌍 Tourism
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Tourism is something many of us love. Explore the best tourist spots around the 
            world, book your dream destination, and plan an unforgettable journey. Discover, 
            travel, and create memories that last a lifetime! ✈️🏝️
          </p>
        </section>

        <Slider />
      </main>

      <Footer />
    </div>
  );
}
