import Image from "next/image";
import Link from "next/link";
import IndustrialImg from "@/public/images/services/construction.jpg";

export default function IndustrialConstructionPage() {
  return (
    <main className="w-full">
      
      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Industrial Construction Excellence
          </h2>
          <p className="text-gray-600">
            We deliver reliable industrial construction solutions with a strong
            focus on safety, structural quality, and timely project execution
            for factories, plants, and large-scale industrial facilities.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industrial Construction
            </h1>
            <p className="text-gray-300 mb-6">
              End-to-end construction services for industrial projects, from
              planning and civil works to structural development and site
              execution.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Request a Quote
            </Link>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={IndustrialImg}
              alt="Industrial Construction"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

        </div>
      </section>

    </main>
  );
}
