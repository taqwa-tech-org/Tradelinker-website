import Image from "next/image";
import FoodImg from "@/public/images/Industry/food.webp";

export const metadata = {
  title: "Food & Agro Industry Solutions",
  description:
    "Engineering, refrigeration, HVAC, and industrial solutions for the food and agro industry.",
};

export default function FoodAgroIndustry() {
  const solutions = [
    "Food processing & packaging systems",
    "Cold storage & refrigeration solutions",
    "Agro-based industrial infrastructure",
    "Energy-efficient machinery installation",
    "Technical support & consultancy",
  ];

  return (
    <section className="py-16 bg-white">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 bg-pearl-aqua-500/10 rounded-3xl"></div>
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={FoodImg}
                alt="Food and Agro Industry Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="mb-3">
              <span className="text-pearl-aqua-600 font-semibold text-sm uppercase tracking-wider">
                Industry Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Food & Agro Industry
            </h1>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We deliver advanced engineering solutions tailored for the food and
              agro industry, focusing on safety, efficiency, and sustainable
              production. Our systems help businesses maintain quality standards
              while improving operational performance.
            </p>

            {/* Solutions List */}
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pearl-aqua-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium group-hover:text-pearl-aqua-700 transition-colors">
                    {solution}
                  </p>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}