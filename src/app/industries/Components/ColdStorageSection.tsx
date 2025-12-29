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
    <section className="relative py-24 overflow-hidden bg-slate-950 text-white rounded-2xl">
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={coldstroageImg}
          alt="Cold Storage Facilities"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-primary/15 text-primary">
            ❄️ Industry Focus
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Cold Storage & Refrigeration Solutions
          </h2>

          <p className="mt-5 text-slate-300 max-w-xl">
            We design and deliver advanced cold storage facilities for food,
            pharmaceuticals, and industrial applications—ensuring reliability,
            safety, and energy efficiency.
          </p>

          {/* Feature List */}
          <div className="mt-10 space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-primary/15 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 mt-1">
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
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-slate-950 hover:bg-primary-hover transition"
            >
              Explore Cold Storage Services →
            </Link>
          </div>
        </div>

        {/* Right Visual Card */}
        <div className="relative hidden lg:block">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Image
              src={coldstroageImg}
              alt="Cold Storage Engineering"
              width={520}
              height={420}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
