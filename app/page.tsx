"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

import { Form } from "@/components/Form";
import FAQ from "@/components/Faq";
import Ceo from "@/components/Ceo";
import Banner from "@/components/Banner";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";


const Home = () => {
  return (
    <main
      className="bg-cover font-sf-pro flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 "
      style={{ backgroundImage: `url('/Mesh Gradient Figma.png')` }}
    >
      <Banner />
      <Hero />
      <div className="max-w-7xl bg-black w-screen">
        <Grid />
      </div>
      <RecentProjects />
      <div className="max-w-7xl min-h-screen w-screen">
        <Experience />
      </div>
      <Ceo />
      <div className="max-w-7xl w-screen bg-black">
        <Clients />
        <Form />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
