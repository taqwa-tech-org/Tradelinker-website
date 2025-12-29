import Image from "next/image";
import milkImg from "@/public/images/Industry/milk.jpg"

type Service = {
  title: string;
  description: string;
};

const dairyServices: Service[] = [
  {
    title: "Milk Processing Plants",
    description: "Complete solutions for milk reception, processing, and packaging."
  },
  {
    title: "Cold Storage & Chilling",
    description: "Efficient chilling systems to maintain freshness and quality."
  },
  {
    title: "HVAC & Refrigeration",
    description: "Temperature-controlled environments for dairy production."
  },
  {
    title: "Turnkey Project Management",
    description: "End-to-end execution from design to commissioning."
  }
];

export default function DairyIndustrySection() {
  return (
    <section className="py-10 md:py-13 lg:py-15  bg-white border-t-gray-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={milkImg}
            alt="Dairy Industry Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dairy Industry Solutions
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We provide advanced engineering solutions for the dairy industry,
            ensuring hygiene, efficiency, and compliance with international
            standards across the entire production chain.
          </p>

          {/* Services */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dairyServices.map((service, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg text-gray-900">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
