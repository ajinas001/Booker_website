"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Aboutus from "@/components/Aboutus";

const BookerAccountingWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary text-foreground">
      <Navbar />
      <HeroSection />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default BookerAccountingWebsite;
