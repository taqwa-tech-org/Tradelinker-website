"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export default function CoreServicesSection() {
  const services: Service[] = [
    {
      title: "HVAC Systems",
      description:
        "Design, supply, installation, and maintenance of efficient HVAC systems for industrial, commercial, and specialized facilities.",
      image: "/images/services/hvac repair.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
        </svg>
      ),
    },
    {
      title: "Refrigeration Systems",
      description:
        "Complete industrial refrigeration solutions including cold storage, process cooling, and temperature-controlled environments.",
      image: "/images/services/refrigarator.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      title: "Industrial Construction",
      description:
        "Execution of industrial civil works and steel structures with a focus on durability, safety, and operational efficiency.",
      image: "/images/services/construction.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l7-4 7 4v14" />
        </svg>
      ),
    },
    {
      title: "Turnkey Project Management",
      description:
        "End-to-end project management services covering design, procurement, construction, installation, and commissioning.",
      image: "/images/services/turnkey project.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Machinery & Equipment Supply",
      description:
        "Supply of reliable industrial machinery and equipment sourced from trusted global manufacturers.",
      image: "/images/services/mechinaryequip.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a4 4 0 015.66 5.66l-7.07 7.07a2 2 0 01-2.83 0l-3.53-3.53a2 2 0 010-2.83l7.77-7.77z" />
        </svg>
      ),
    },
  ];

  // duplicate for seamless marquee
  const loopServices = [...services, ...services];

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const speed = 0.03; // adjust speed here
    x.set(x.get() - speed * delta);

    const width = containerRef.current?.scrollWidth ?? 0;

    if (x.get() <= -width / 2) {
      x.set(0);
    }
  });

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-pearl-aqua-600 via-pearl-aqua-400 to-pearl-aqua-500 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core Services
          </h2>
          <div className="w-24 h-1 bg-pearl-aqua-400 mx-auto mb-6" />
          <p className="text-lg text-pearl-aqua-100 max-w-3xl mx-auto">
            Comprehensive engineering solutions from concept to completion
          </p>
        </div>

        {/* TRUE Infinite Scroll */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            style={{ x }}
          >
            {loopServices.map((service, idx) => (
              <div
                key={idx}
                className="w-[340px] md:w-[380px] flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-pearl-aqua-700 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
