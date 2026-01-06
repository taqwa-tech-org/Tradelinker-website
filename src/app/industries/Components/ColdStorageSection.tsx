import Image from "next/image";
import Link from "next/link";
import { ThermometerSnowflake } from "lucide-react";
import type { ReactNode } from "react";
import coldstroageImg from "@/public/images/Industry/Cold storage .jpg";

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <ThermometerSnowflake size={22} />,
    title: "Temperature Controlled Facilities",
    description:
      "Precision cooling systems ensuring consistent temperature across storage zones.",
  },
];

export default function ColdStorageSection() {
  return (
    <section className="relative py-15 overflow-hidden bg-gradient-to-br from-pearl-aqua-900 via-pearl-aqua-800 to-pearl-aqua-950 text-white rounded-2xl">
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={coldstroageImg}
          alt="Cold Storage Facilities"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative px-5 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full text-sm font-medium bg-pearl-aqua-100/20 text-pearl-aqua-100 border border-pearl-aqua-100/30 backdrop-blur-sm">
            <span className="text-lg">❄️</span>
            Industry Focus
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Cold Storage & Refrigeration Solutions
          </h2>

          <p className="text-lg text-pearl-aqua-100 leading-relaxed max-w-xl">
            We design and deliver advanced cold storage facilities for food,
            pharmaceuticals, and industrial applications—ensuring reliability,
            safety, and energy efficiency.
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
              Explore Cold Storage Services
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
              src={coldstroageImg}
              alt="Cold Storage Engineering"
              width={520}
              height={420}
              className="rounded-xl object-cover shadow-xl"
            />
            
            {/* Decorative Corner Badge */}
            <div className="absolute -top-4 -right-4 bg-pearl-aqua-500 text-white px-5 py-3 rounded-xl shadow-xl font-bold text-sm">
              <div className="text-2xl mb-1">40+</div>
              <div className="text-xs opacity-90">Years Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}