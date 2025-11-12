"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  // Changed useInView import from react-intersection-observer to match the usage in the component body
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="font-bold">
      {count}{suffix}
    </span>
  );
};

// --- FRAMER MOTION VARIANTS FOR HEADER TEXT ---

// Container variant to orchestrate the animation of its children
const headerContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Delay between each line of text
      when: "beforeChildren",
    },
  },
};

// Item variant for individual lines of text
const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- MAIN COMPONENT ---

const MainAchievements = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the header is visible
  });

  const achievements = [
    {
      id: 1,
      number: 20,
      suffix: "+",
      title: "Certified Specialist",
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-24 opacity-10">
          <motion.g
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="#1c5e6a" strokeWidth="2"/>
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M35,50 L45,60 L65,40"
              fill="none"
              stroke="#1c5e6a"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      )
    },
    {
      id: 2,
      number: 5,
      suffix: "+",
      title: "Years Of Experience",
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-24 opacity-10">
          <motion.g
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="#0d1a20" strokeWidth="2"/>
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <line x1="50" y1="50" x2="50" y2="25" stroke="#0d1a20" strokeWidth="3" strokeLinecap="round"/>
            </motion.g>
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <line x1="50" y1="50" x2="50" y2="15" stroke="#1c5e6a" strokeWidth="2" strokeLinecap="round"/>
            </motion.g>
          </motion.g>
        </svg>
      )
    },
    {
      id: 3,
      number: 100,
      suffix: "+",
      title: "Satisfied Customers",
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-24 opacity-10">
          <motion.g
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
              d="M30,50 Q50,30 70,50 Q50,70 30,50"
              fill="none"
              stroke="#1c5e6a"
              strokeWidth="2"
            />
            <motion.circle
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              cx="40" cy="45" r="4" fill="#1c5e6a"
            />
            <motion.circle
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              cx="60" cy="45" r="4" fill="#1c5e6a"
            />
            <motion.path
              animate={{ d: ["M40,55 Q50,60 60,55", "M40,55 Q50,65 60,55"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              fill="none"
              stroke="#1c5e6a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Background SVG Patterns - Already animated, so no change needed here */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1000 600" className="w-full h-full opacity-5">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="200" cy="150" r="80" fill="none" stroke="#1c5e6a" strokeWidth="1"/>
            <circle cx="200" cy="150" r="120" fill="none" stroke="#1c5e6a" strokeWidth="1" strokeDasharray="4 4"/>
          </motion.g>
          
          <motion.g
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <rect x="700" y="400" width="100" height="100" fill="none" stroke="#0d1a20" strokeWidth="1" rx="10"/>
          </motion.g>

          <motion.path
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            d="M800,100 Q900,50 950,150"
            fill="none"
            stroke="#1c5e6a"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Animations */}
        <div className="text-center mb-20" ref={headerRef}>
          <motion.div
            // Apply the container variants and visibility control
            variants={headerContainerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            
            className="relative z-10 text-start text-black px-6 mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-light leading-relaxed space-y-3 mb-8">
              {/* Each line is wrapped in motion.div with item variants */}
              <motion.div variants={headerItemVariants}>
                Booker, driven by{" "}
                <span className="text-[#4DC2D1] font-semibold">expertise.</span>
              </motion.div>
              <motion.div variants={headerItemVariants}>
                Focused on{" "}
                <span className="text-[#4DC2D1] font-semibold">strategy.</span>
              </motion.div>
              <motion.div variants={headerItemVariants}>
                Committed to your{" "}
                <span className="text-[#4DC2D1] font-semibold">growth.</span>
              </motion.div>
            </h1>

          </motion.div>
        </div>

        {/* Achievements Grid - Animations already in place */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Background SVG */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {achievement.svg}
              </div>

              {/* Number (AnimatedCounter handles its own visibility animation) */}
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-black mb-4">
                  <AnimatedCounter value={achievement.number} suffix={achievement.suffix} />
                </div>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h3 className="text-2xl md:text-3xl font-light text-primary-black uppercase tracking-wide">
                  {achievement.title}
                </h3>
              </motion.div>

              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
                style={{ originX: 0.5 }} // Ensure scaling is from the center
                className="h-1 bg-gradient-to-r from-transparent via-[#4DC2D1] to-transparent mt-6 mx-auto w-32"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative SVG - Already animated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <svg viewBox="0 0 400 20" className="w-64 h-5">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
              d="M0,10 Q100,0 200,10 Q300,20 400,10"
              fill="none"
              stroke="#1c5e6a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Floating Elements - Already animated */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-[#4DC2D1] rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-16 w-3 h-3 bg-primary-black rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-2 h-2 bg-[#4DC2D1] rounded-full opacity-25"
        />
      </div>
    </section>
  );
};

export default MainAchievements;