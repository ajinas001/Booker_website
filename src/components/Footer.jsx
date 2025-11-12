"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  const [serviceOpen, setServiceOpen] = useState(false);

  const serviceLinks = [
    { name: "Audit & Assurance", href: "/audit-assurance" },
    { name: "Taxation", href: "/taxation" },
    { name: "Accounting & Bookkeeping", href: "/accounting-bookkeeping" },
    { name: "Tax Agent Services", href: "/tax-agent" },
    { name: "Business Advisory", href: "/business-advisory" },
    { name: "CFO Services", href: "/cfo-services" },
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];
    const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white border-t rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section - Logo and Description */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-md"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src="/images/LogoLight.png"
                alt="Booker Accounting Company Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-gray-50 leading-relaxed">
            Booker refers to the global organization of accounting and
            consultancy firms, providing trusted financial services with
            integrity and innovation.
          </p>
        </motion.div>

        {/* Right Section - Links */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-start md:items-center gap-8 text-sm font-medium"
        >
             <div
            className="relative group"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button className="hover:underline text-gray-50 hover:text-gray-200 transition-colors">
              Services ▾
            </button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={serviceOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className={`absolute  right-0 bg-white text-gray-700 shadow-lg rounded-lg py-4 px-6 min-w-[220px] z-50 ${
                serviceOpen ? "block" : "hidden"
              }`}
            >
              {serviceLinks.map((s, idx) => (
                <Link
                  key={idx}
                  href={s.href}
                  className="block py-2 hover:text-teal-600 transition"
                >
                  {s.name}
                </Link>
              ))}
            </motion.div>
          </div>
          {/* Page Links */}
          {pageLinks.map((link, index) => (
            <motion.div key={index}>
              <Link
                href={link.href}
                className="hover:underline text-gray-50 hover:text-gray-200 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Services Dropdown */}
       
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={2}
        className="max-w-7xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6"
      >
        <p className="text-sm text-gray-50 leading-relaxed max-w-2xl text-center md:text-left">
          Booker Global Limited, each of which is a separate legal entity.
        </p>

        {/* Social Icons */}
       <motion.div
              className="flex gap-3 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl w-12 h-12 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                >
                  <social.icon size={18} className="text-white" />
                </motion.a>
              ))}
            </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
