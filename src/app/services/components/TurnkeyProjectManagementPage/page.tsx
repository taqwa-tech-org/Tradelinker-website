import Image from "next/image";
import TurnkeyImg from "@/public/images/services/Industrial-Process-Turnkey-Projects.jpg";
import Link from "next/link";

export default function TurnkeyProjectManagementPage() {
  return (
    <main>
      
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            Complete Turnkey Project Management
          </h2>
          <p className="text-black">
            We manage projects from concept to completion, delivering fully
            integrated engineering and construction solutions with a single
            point of responsibility.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full p-10 md:p-20 rounded-xl bg-blue-100">
        <div className="px-4 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={TurnkeyImg}
              alt="Turnkey Project Management"
              fill
              className="object-cover rounded-xl shadow-md"
              priority
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Turnkey Project Management
            </h1>

            <p className="text-black mb-6">
              From planning and design to execution and handover, we ensure
              seamless coordination, cost control, and on-time delivery of
              complex industrial projects.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Request a Quote
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
