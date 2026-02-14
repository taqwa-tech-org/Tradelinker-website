import Image from "next/image";
import Link from "next/link";
import refigerator from "@/public/images/services/refrigarator.jpg";

export default function RefrigerationServicePage() {
  return (
    <main>
      
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            Reliable Refrigeration Solutions
          </h2>
          <p className="text-black">
            We design, install, and support refrigeration systems that deliver
            precise temperature control, energy efficiency, and dependable
            performance for industrial and commercial applications.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full p-10 md:p-20 rounded-xl bg-blue-100">
        <div className="px-4 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-80">
            <Image
              src={refigerator}
              alt="Refrigeration Service"
              fill
              className="object-cover rounded-xl shadow-md"
              priority
            />
          </div>
          
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Refrigeration Systems
            </h1>

            <p className="text-blue-700 mb-6">
              Advanced refrigeration solutions designed to maintain precise
              temperature control, efficiency, and reliability for industrial and
              commercial environments.
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
