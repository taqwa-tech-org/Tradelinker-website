import Image from "next/image";
import Link from "next/link";
import IndustrialImg from "@/public/images/services/construction.jpg";

export default function IndustrialConstructionPage() {
  return (
    <main>
      
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            Industrial Construction Excellence
          </h2>
          <p className="text-black">
            We deliver reliable industrial construction solutions with a strong
            focus on safety, structural quality, and timely project execution
            for factories, plants, and large-scale industrial facilities.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full p-10 md:p-20 rounded-xl bg-blue-100">
        <div className="px-4 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Industrial Construction
            </h1>

            <p className="text-blue-700 mb-6">
              End-to-end construction services for industrial projects, from
              planning and civil works to structural development and site
              execution.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
              className="object-cover rounded-xl shadow-md"
              priority
            />
          </div>

        </div>
      </section>

    </main>
  );
}
