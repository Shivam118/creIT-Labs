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

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Hero />
      <Carousal />
      {/* <Award/> */}
      <Services />
      <Companies />
      <Industries />
      {/* <PartWrapper /> */}
      <Faq />
      <Footer />
    </main>
  );
}
