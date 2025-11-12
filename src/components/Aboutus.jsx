"use client";
import React, { useRef } from "react";
import { Layers, TrendingUp, Compass, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Define the colors consistent with your service component
const SECONDARY_COLOR = "bg-cyan-800";
const ACCENT_COLOR_TEXT = "text-cyan-600";
const NEUTRAL_BG = "bg-[#f5f5f0]";
const DARK_BG = "bg-secondary"; // Assuming 'secondary' is defined in your Tailwind config

// Placeholder Image Paths (Update these to your working URLs)
const Image1Path = "/images/newimg2.png";
const Image2Path = "/images/business66.png";
const Image3Path = "/images/newimg3.png";

// --- Framer Motion Animation Variants ---

// Fade up animation for main content blocks (staggers children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between child animations
    },
  },
};

// Item animation for individual text lines
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

// Item animation for list elements (slightly faster)
const listItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, delay: 0.1 },
  },
};

// --- Animated Component Wrapper ---

// This wrapper is used for the main text blocks (CoreIdentity, MissionVision, SellingPoints)
const AnimatedContentBlock = ({ children, className }) => {
  const ref = useRef(null);
  // Trigger animation when 20% of the component is visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// --- Core Identity Content Block (Refactored to use motion.elements) ---
const CoreIdentity = () => (
  <AnimatedContentBlock className={`p-8 md:p-12 text-gray-900 min-h-[400px]`}>
    <motion.h2
      variants={itemVariants}
      className="text-4xl md:text-5xl font-light mb-4"
    >
      Who We Are
    </motion.h2>
    <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6">
      Our team is more than just a group of accountants; we are a strategic
      unit. We combine expert minds with the power of cutting-edge AI Tools to
      ensure accuracy and drive measurable results.
    </motion.p>
    <motion.div
      variants={itemVariants}
      className="flex items-center space-x-3 mt-8"
    >
      <Layers size={30} className={ACCENT_COLOR_TEXT} />
      <p className="font-semibold text-gray-700 text-sm">
        Client-first mindset, local insight, and lasting relationships based on
        trust.
      </p>
    </motion.div>
  </AnimatedContentBlock>
);

// --- Mission & Vision Content Block (Refactored to use motion.elements) ---
const MissionVision = () => (
  <AnimatedContentBlock className={`p-8 md:p-12 text-gray-900 min-h-[400px]`}>
    <motion.p
      variants={itemVariants}
      className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-600 mb-3"
    >
      Our Mission & Vision
    </motion.p>
    <motion.h3
      variants={itemVariants}
      className="text-4xl md:text-5xl  font-semibold mt-6 mb-2"
    >
      Our Mission
    </motion.h3>
    <motion.p variants={itemVariants} className="text-base text-gray-700">
      To deliver brilliance through expert financial insights, maintain perfect
      balance (compliance), and build strong foundations for confident,
      sustainable growth.
    </motion.p>

    <motion.h3
      variants={itemVariants}
      className="text-4xl md:text-5xl  font-semibold mt-6 mb-2"
    >
      Our Vision
    </motion.h3>
    <motion.p variants={itemVariants} className="text-base text-gray-700">
      To become the most trusted and forward-thinking financial partner,
      empowering businesses through expert accounting, strategic advisory, and
      AI-driven innovation.
    </motion.p>
  </AnimatedContentBlock>
);

// --- Selling Points Content Block (Refactored to use motion.elements) ---
const SellingPoints = () => (
  <AnimatedContentBlock className={`p-8 md:p-12 text-gray-900 min-h-[400px]`}>
    <motion.p
      variants={itemVariants}
      className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-600 mb-3"
    >
      Why Partner with Us
    </motion.p>
    <motion.ul variants={containerVariants} className="space-y-6">
      <motion.li
        variants={listItemVariants}
        className="flex items-start space-x-3"
      >
        <TrendingUp size={32} className={ACCENT_COLOR_TEXT} />
        <div>
          <strong className="text-2xl md:text-3xl ">Specialized UAE Focus:</strong>
          <p className="text-base text-gray-700">
            We are purpose-built to serve privately owned companies and
            entrepreneurs in the UAE, focusing on profitability and strategic
            tax planning.
          </p>
        </div>
      </motion.li>
      <motion.li
        variants={listItemVariants}
        className="flex items-start space-x-3"
      >
        <Globe size={32} className={ACCENT_COLOR_TEXT} />
        <div>
          <strong className="text-2xl md:text-3xl">Proven Local Expertise:</strong>
          <p className="text-base text-gray-700">
            Offering deep local knowledge and a comprehensive understanding of
            business regulations and compliance throughout Uae.
          </p>
        </div>
      </motion.li>
      <motion.li
        variants={listItemVariants}
        className="flex items-start space-x-3"
      >
        <Compass size={32} className={ACCENT_COLOR_TEXT} />
        <div>
          <strong className="text-2xl md:text-3xl ">Customized Solutions:</strong>
          <p className="text-base text-gray-700">
            We implement tailored accounting, bookkeeping, and tax strategies
            designed specifically for your business needs.
          </p>
        </div>
      </motion.li>
    </motion.ul>
  </AnimatedContentBlock>
);

// Image Component with custom styling (Kept Dynamic, no motion added for simplicity)
const ImageBlock = ({ src, alt, borderRadius }) => (
  <div className={`overflow-hidden relative ${borderRadius} group`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500"
      style={{ minHeight: "400px" }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/800x600/1e3a8a/ffffff?text=BAC+Visual+Placeholder";
      }}
    />
    <div
      className={`absolute inset-0 group-hover:opacity-100 transition-opacity duration-300`}
    ></div>
    <div className="absolute inset-4 pointer-events-none"></div>
  </div>
);

const Aboutus = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Header/Main Title variants (smoother animation for the big text)
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={`${NEUTRAL_BG} py-20 px-4 md:px-8`}>
      {/* Header with Motion */}
      <motion.header
        ref={headerRef}
        className="max-w-7xl mx-auto text-center mb-20"
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
      >
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4">
          The{" "}
          <span className="font-semibold">
            <span className="text-secondary">BAC</span> Difference
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
          A Strategic Force Behind Your Numbers: Driven by expertise. Focused on
          strategy. Committed to your growth.
        </p>
      </motion.header>

      <div className="max-w-7xl mx-auto space-y-20">
        {/* --- Section 1: Who We Are (Content Left, Image Right) --- */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-1/2">
            <CoreIdentity />
          </div>
          <div className="lg:w-1/2">
            <ImageBlock
              src={Image1Path}
              alt="Abstract image representing AI and strategic thinking"
              borderRadius=""
            />
          </div>
        </div>

        {/* --- Section 2: Mission & Vision (Image Left, Content Right) --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
          <div className="lg:w-1/2">
            <MissionVision />
          </div>
          <div className="lg:w-1/2">
            <ImageBlock
              src={Image2Path}
              alt="Professionals collaborating on a financial partnership"
              borderRadius=""
            />
          </div>
        </div>

        {/* --- Section 3: Why Partner With Us (Content Left, Image Right) --- */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-1/2">
            <SellingPoints />
          </div>
          <div className="lg:w-1/2">
            <ImageBlock
              src={Image3Path}
              alt="Chart representing business growth and success in a modern city (UAE)"
              borderRadius=""
            />
          </div>
        </div>
      </div>

      {/* Final CTA - Consistent Style, with a simple animation */}
      <motion.div
        className="text-center mt-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <button
          className={`w-fit px-12 py-4 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-white ${DARK_BG} text-white text-lg font-light hover:opacity-90 transition-opacity`}
        >
          Schedule Your Strategic Consultation
        </button>
      </motion.div>
    </section>
  );
};

export default Aboutus;
