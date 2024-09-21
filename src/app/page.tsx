"use client"
import "./globals.css";
import Nav from "../../components/Navbar";
import HeroSection from "../../components/Hero";
import FeaturedProducts from "../../components/Feature";
import Categories from "../../components/Categories";
import Promotions from "../../components/Promotion";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>

         <Nav/>
       <div className="bg-pink-300 h-screen wi-full">
         <HeroSection/>
         <FeaturedProducts/>
         <Categories/>
         <Promotions/>
         <Footer/>
       </div>

    </>
  );
}
