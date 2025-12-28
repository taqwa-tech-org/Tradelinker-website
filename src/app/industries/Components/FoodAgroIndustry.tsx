import Image from "next/image";
import FoodImg from "@/public/images/Industry/food .jpg"

export const metadata = {
  title: "Food & Agro Industry Solutions",
  description:
    "Engineering, refrigeration, HVAC, and industrial solutions for the food and agro industry.",
};



export default function FoodAgroIndustry() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src={FoodImg} 
            alt="Food and Agro Industry Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Food & Agro Industry
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We deliver advanced engineering solutions tailored for the food and agro industry,
            focusing on safety, efficiency, and sustainable production. Our systems help businesses
            maintain quality standards while improving operational performance.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Food processing & packaging systems</li>
            <li>✔ Cold storage & refrigeration solutions</li>
            <li>✔ Agro-based industrial infrastructure</li>
            <li>✔ Hygienic HVAC environments</li>
            <li>✔ Energy-efficient machinery installation</li>
            <li>✔ Technical support & consultancy</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
