import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  console.log('🤫');
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}