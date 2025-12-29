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
    <section className="relative mt-10 overflow-hidden bg-pearl-aqua-950 text-white rounded-2xl">

      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={fishMeatImg}
          alt="Fish and Meat Processing Facility"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-pearl-aqua-800/60 text-pearl-aqua-100 border border-pearl-aqua-700/30">
            🐟 🥩 Industry Focus
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Fish & Meat Processing Solutions
          </h2>

          <p className="mt-5 text-pearl-aqua-100/80 max-w-xl">
            We deliver engineered solutions for fish and meat processing
            facilities, ensuring hygiene, temperature control, and operational
            efficiency throughout the production cycle.
          </p>

          {/* Feature List */}
          <div className="mt-10 space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-pearl-aqua-800/50 text-pearl-aqua-300 border border-pearl-aqua-700/30">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-pearl-aqua-200/70 mt-1">
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
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-hover transition shadow-lg shadow-pearl-aqua-900/50"
            >
              Explore Fish & Meat Processing →
            </Link>
          </div>
        </div>

        {/* Right Visual Card */}
        <div className="relative hidden lg:block">
          <div className="rounded-2xl border border-pearl-aqua-700/30 bg-pearl-aqua-900/30 p-6 backdrop-blur">
            <Image
              src={fishMeatImg}
              alt="Fish & Meat Processing Engineering"
              width={480}
              height={320}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}