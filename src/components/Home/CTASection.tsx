"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-300 via-blue-800 to-blue-200 text-white py-24 px-4 md:px-0 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Deep Blue Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-blue-600 rounded-full blur-3xl"
        />

        {/* Royal Blue Orb */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-blue-500 rounded-full blur-3xl"
        />

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Decorative Top Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto mb-8 rounded-full"
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Ready to Bring Your{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Project to Life?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed"
        >
          Our expert team is here to guide you every step of the way. Let's make it happen together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          
          {/* Primary Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-blue-900/40 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">
              Request a Consultation
            </span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          {/* Secondary Button */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 border-2 border-blue-300/50 text-blue-100 font-semibold px-10 py-5 rounded-2xl hover:bg-blue-500/10 hover:border-blue-300 hover:scale-105 transition-all duration-300"
          >
            <span className="text-lg">Explore Our Services</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-blue-200/80"
        >
          {["Free Consultation", "24/7 Support", "Expert Team"].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm md:text-base font-medium">
                  {item}
                </span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
