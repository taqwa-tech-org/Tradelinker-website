import Image from "next/image";
import milkImg from "@/public/images/Industry/milk.jpg";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const dairyServices: Service[] = [
  {
    icon: "🥛",
    title: "Milk Processing Plants",
    description: "Complete solutions for milk reception, processing, and packaging."
  },
  {
    icon: "❄️",
    title: "Cold Storage & Chilling",
    description: "Efficient chilling systems to maintain freshness and quality."
  },
  {
    icon: "🌡️",
    title: "HVAC & Refrigeration",
    description: "Temperature-controlled environments for dairy production."
  },
  {
    icon: "⚙️",
    title: "Turnkey Project Management",
    description: "End-to-end execution from design to commissioning."
  }
];

export default function DairyIndustrySection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto   grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Content */}
        <div>
          <div className="mb-3">
            <span className="text-pearl-aqua-600 font-semibold text-sm uppercase tracking-wider">
              Industry Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Dairy & Ice Cream Industry Solutions
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            We provide advanced engineering solutions for the dairy & Ice Cream industry,
            ensuring hygiene, efficiency, and compliance with international
            standards across the entire production chain.
          </p>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dairyServices.map((service, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl border-2 border-gray-200 hover:border-pearl-aqua-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pearl-aqua-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-2 bg-pearl-aqua-500/10 rounded-3xl"></div>
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={milkImg}
              alt="Dairy & Ice Cream Industry Solutions"
              fill
              className="object-cover"
              priority
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pearl-aqua-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">ISO Certified</div>
                  <div className="text-xs text-gray-500">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}