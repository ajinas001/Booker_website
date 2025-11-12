"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- START: Static Data & Helpers ---

const SERVICES_DATA_RAW = [
  {
    title: "Audit & Assurance",
    link: "/audit-assurance",
    description:
      "• External Audit\n• Real Estate Audit\n• Internal Audit\n• Inventory Audit\n• Due Diligence Support\n• Forensic Audit",
  },
  {
    title: "Taxation",
    link: "/taxation",
    description: "• Corporate Tax\n• Value Added Tax (VAT)\n• Tax Agent Service",
  },
  {
    title: "Accounting & Bookkeeping",
    link: "/accounting-bookkeeping",
    description:
      "• Accounts Regulation\n• Cloud Accounting Services\n• Audit Preparation & Support\n• Accounting & Financial Reporting\n• Inventory & Asset Verification",
  },
  {
    title: "Business Advisory Services",
    link: "/business-advisory",
    description:
      "• CFO Service\n• Business Valuation\n• Business Consultation\n• Merger & Acquisition\n• Business Process Re-engineering\n• Financial Feasibilities\n• IFRS Advisory Service",
  },
  {
    title: "Business Support Services",
    link: "/business-support",
    description:
      "• Mainland Company Formation\n• Freezone Business Setup\n• Company Secretarial Service\n• Liquidation / De-registration\n• ICV Consultancy\n• PRO Service",
  },
  {
    title: "Anti–Money Laundering (AML)",
    link: "/aml",
    description:
      "• AML Risk Assessment\n• Compliance Program Design\n• Transaction Monitoring\n• KYC & Customer Due Diligence\n• AML Training & Awareness\n• Regulatory Reporting",
  },
];

const NAV_LINKS = ["Home", "About", "Services", "Blog", "Contact"];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  // Use a fixed max-height instead of 'auto' for potentially better mobile performance
  open: {
    opacity: 1,
    height: "auto", // Can be changed to '500px' if 'auto' is buggy on iOS
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const megaMenuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// --- END: Static Data & Helpers ---

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Helper function for cleaner class assignment based on 'scrolled' prop
  const getColor = (dark, light) => (scrolled ? dark : light);

  // Pre-process services data for cleaner rendering (Optimization/Cleanliness)
  const processedServices = useMemo(() => {
    return SERVICES_DATA_RAW.map(service => ({
      ...service,
      descriptionPoints: service.description
        .split('\n')
        .map(point => point.replace('•', '').trim())
        .filter(point => point.length > 0)
    }));
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
        setServicesOpen(false); // Close services menu on scroll down
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle mobile services dropdown click
  const toggleMobileServices = () => setServicesOpen((prev) => !prev);
  // Function to close both mobile menus (used on link click)
  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`font-sans py-4 fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center overflow-hidden">
                <Image
                  src={
                    scrolled ? "/images/LogoDark.png" : "/images/LogoLight.png"
                  }
                  alt="Booker Accounting Company Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link, i) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;

                if (link === "Services") {
                  return (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="relative" // Added relative for dropdown positioning
                    >
                      <button
                        className={`px-4 py-2 ${getColor(
                          "text-gray-800",
                          "text-white"
                        )} hover:text-teal-700 text-xl font-medium transition-colors relative group flex items-center gap-1`}
                      >
                        {link}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-700 origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: servicesOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </button>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={href}
                      className={`px-4 py-2 ${getColor(
                        "text-gray-800",
                        "text-white"
                      )} hover:text-teal-700 text-xl font-medium transition-colors relative group`}
                    >
                      {link}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-700 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Get Started Button */}
            <motion.button
              className={
                scrolled
                  ? "hidden lg:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-teal-800 transition-colors hover:text-white"
                  : "hidden lg:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-white text-white rounded-lg font-medium hover:bg-teal-800 transition-colors"
              }
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-teal-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className={`w-6 h-6 ${getColor("text-teal-700", "text-white")}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                // Add transformZ(0) to potentially fix iOS rendering issues (Bug Fix)
                className="lg:hidden overflow-hidden bg-white text-center rounded-lg shadow-lg [transform:translateZ(0)]"
              >
                <div className="py-4 space-y-2">
                  {NAV_LINKS.map((link, i) => {
                    const href =
                      link === "Home" ? "/" : `/${link.toLowerCase()}`;

                    if (link === "Services") {
                      return (
                        <motion.div
                          key={link}
                          custom={i}
                          variants={linkVariants}
                          className="flex flex-col items-center" // Ensure children stack
                        >
                          <button
                            onClick={toggleMobileServices}
                            className="w-full px-4 py-3 flex items-center justify-center text-gray-800 hover:bg-teal-100 hover:text-teal-700 rounded-lg font-medium transition-colors gap-1"
                          >
                            Services
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                servicesOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Services dropdown list */}
                          <AnimatePresence>
                            {servicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="w-full pl-6 pr-4 space-y-1 text-start"
                              >
                                {processedServices.map((service) => (
                                  <Link
                                    key={service.title}
                                    href={service.link}
                                    className="block py-2 text-gray-700 hover:text-teal-700 text-sm"
                                    onClick={closeAllMenus} // Closes both menus on click
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div key={link} custom={i} variants={linkVariants}>
                        <a
                          href={href}
                          className="block px-4 py-3 text-gray-800 hover:bg-teal-100 hover:text-teal-700 rounded-lg font-medium transition-colors"
                          onClick={closeAllMenus} // Closes mobile menu on link click
                        >
                          {link}
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mega Menu for Services */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            variants={megaMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            // Add transformZ(0) for potential iOS animation fix
            className={`fixed left-0 right-0 z-40 top-20 lg:top-16 p-4 ${
              scrolled
                ? "bg-white m-4 rounded-2xl shadow-xl"
                : "bg-gray-900 bg-opacity-95 m-4 rounded-2xl"
            } [transform:translateZ(0)]`}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-2 py-6">
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-5 ">
                {/* LEFT SIDE → Title + Intro */}
                <div className="lg:col-span-1 flex flex-col justify-center pr-6">
                  <h3
                    className={`text-3xl font-bold mb-4 ${getColor(
                      "text-gray-900",
                      "text-white"
                    )}`}
                  >
                    Our Services
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${getColor(
                      "text-gray-600",
                      "text-gray-300"
                    )}`}
                  >
                    No matter your role or goal{" "}
                    <span className="text-teal-700 font-bold">BAC</span> adapts
                    to your needs
                  </p>
                </div>

                {/* RIGHT SIDE → Simple List */}
                <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 pt-12 text-start">
                  {processedServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="space-y-2"
                    >
                      <Link
                        href={service.link}
                        className={`block text-lg font-semibold mb-2 ${getColor(
                          "text-gray-900",
                          "text-white"
                        )} hover:text-teal-700 transition-colors`}
                        onClick={closeAllMenus}
                      >
                        {service.title}
                      </Link>
                      
                      {/* Using pre-processed descriptionPoints */}
                      <ul
                        className={`text-start list-disc pl-5 space-y-1 ${getColor(
                          "text-gray-600",
                          "text-gray-300"
                        )}`}
                      >
                        {service.descriptionPoints.map((point, i) => (
                          <li key={i} className="text-sm leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}