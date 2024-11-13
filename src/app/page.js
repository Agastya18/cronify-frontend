import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import LogoTicker from "@/components/landing/LogoTicker";
import Feature from "@/components/landing/Feature";
import FAQSection from "@/components/landing/Faq";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <Feature/>
    <FAQSection/>
    <Footer/>

   

    </>
  );
}
