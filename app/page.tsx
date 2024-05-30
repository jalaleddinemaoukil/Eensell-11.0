"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

import Experience from "@/components/Experience";


import { Form } from "@/components/Form";
import FAQ from "@/components/Faq";
import Ceo from "@/components/Ceo";
import Banner from "@/components/Banner";
import { TabsDemo } from "@/components/RecentProjects";


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
      <div className="bg-white max-w-7xl min-h-screen text-black w-screen h-90">
          <h1 className="heading mt-20">Our Success Stories</h1>
          <p className="text-center text-xl text-black font-sf-pro p-20 mx-auto">
            At Eensell Agency, we transform businesses by converting visitors into
            loyal customers. Through innovative web development, captivating
            design, strategic branding, and effective social media campaigns, we
            drive sales and boost engagement. Our tailored solutions ensure your
            business not only stands out but thrives in a competitive market.
            Partner with us to elevate your success and achieve sustainable
            growth.
          </p>
          <TabsDemo />
      </div>
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
