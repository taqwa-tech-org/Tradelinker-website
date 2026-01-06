import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  ThermometerSnowflake,
  ShieldCheck
} from "lucide-react";
import type { ReactNode } from "react";
import fishMeatImg from "@/public/images/Industry/fishmeat.jpg";

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <ThermometerSnowflake size={22} />,
    title: "Cold Processing Environment",
    description:
      "Temperature-controlled processing lines to preserve freshness and quality.",
  },
  {
    icon: <Factory size={22} />,
    title: "Automated Processing Lines",
    description:
      "Efficient and hygienic systems for fish and meat handling operations.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Food Safety Compliance",
    description:
      "Designed to meet HACCP and international food safety standards.",
  },
];

export default function FishMeatProcessingSection() {
  return (
    <section className="relative mt-10 py-14 overflow-hidden bg-gradient-to-br from-pearl-aqua-950 via-pearl-aqua-900 to-pearl-aqua-950 text-white rounded-2xl">

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={fishMeatImg}
          alt="Fish and Meat Processing Facility"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full text-sm font-medium bg-pearl-aqua-100/20 text-pearl-aqua-100 border border-pearl-aqua-100/30 backdrop-blur-sm">
            <span className="text-lg">🐟 🥩</span>
            Industry Focus
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Fish & Meat Processing Solutions
          </h2>

          <p className="text-lg text-pearl-aqua-100 leading-relaxed max-w-xl">
            We deliver engineered solutions for fish and meat processing
            facilities, ensuring hygiene, temperature control, and operational
            efficiency throughout the production cycle.
          </p>

          {/* Feature List */}
          <div className="mt-10 space-y-5">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex gap-5 items-start p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-pearl-aqua-300/50"
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-pearl-aqua-500 text-white shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-pearl-aqua-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-pearl-aqua-500 px-8 py-4 font-bold text-white hover:bg-pearl-aqua-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Explore Fish & Meat Processing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Visual Card */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-gradient-to-r from-pearl-aqua-500/20 to-pearl-aqua-300/20 rounded-3xl blur-2xl"></div>
          <div className="relative rounded-2xl border-2 border-pearl-aqua-400/30 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
            <Image
              src={fishMeatImg}
              alt="Fish & Meat Processing Engineering"
              width={480}
              height={320}
              className="rounded-xl object-cover shadow-xl"
            />
            
            {/* Decorative Corner Badge */}
            <div className="absolute -top-4 -right-4 bg-pearl-aqua-500 text-white px-5 py-3 rounded-xl shadow-xl font-bold text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                <span>HACCP Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}