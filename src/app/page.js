"use client";

import Cards from "../components/ui/Cards";
import Footer from "../components/layouts/Footer";
import Herosection from "../components/layouts/Herosection";
import Navbar from "../components/layouts/Navbar";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Herosection />
      <Cards />
      <Footer />
    </div>
  );
}
