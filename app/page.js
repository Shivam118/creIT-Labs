import Image from "next/image";
import Hero from "./(components)/Hero";
import Award from "./(components)/Award";
import Services from "./(components)/Services";
import Companies from "./(components)/Companies";
import Footer from "./(components)/Footer";
import Industries from "./(components)/Industries";
import PartWrapper from "./(components)/PartWrapper";
import Carousal from "./(components)/Carousal";
import Faq from "./(components)/Faq";
import Testimonials from "./(components)/Testimonials";
import Portfolio from "./(components)/Portfolio";

export default function Home() {
  return (
    <main
      className="w-full flex flex-col items-center justify-center"
      id="home"
    >
      <Hero />
      <Services />
      <Portfolio />
      <Companies />
      <Industries />
      <Testimonials />
      <Footer />
    </main>
  );
}
