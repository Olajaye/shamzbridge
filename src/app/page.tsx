import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import { Fragment } from "react";


export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Footer />
    </Fragment>
    
  );
}
