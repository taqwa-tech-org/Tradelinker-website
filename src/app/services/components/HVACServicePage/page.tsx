import Image from "next/image";
import Link from "next/link";
import HvacImg from "@/public/images/services/hvac repair.jpg"


export default function HVACServicePage() {
  return (
    <main className="">
        {/* Overview */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Reliable HVAC Engineering
          </h2>
          <p className="text-gray-600">
            We design, install, and maintain HVAC systems that ensure comfort,
            efficiency, and long-term performance for industrial and commercial
            projects.
          </p>
        </div>
      </section>


      <section className="relative w-full p-10 md:p-20 lg:p-21 bg-primary text-white rounded-xl">

      {/* Hero Section */}
        <div className=" px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HVAC Solutions
            </h1>
            <p className="text-gray-300 mb-6">
              Efficient heating, ventilation, and air conditioning solutions
              for industrial and commercial facilities.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Request a Quote
            </Link>
          </div>

          {/* Image from public/services/hvac.jpg */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={HvacImg}
              alt="HVAC Service"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      

      {/* What We Offer */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            What We Offer
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "HVAC System Design",
              "Installation & Commissioning",
              "Energy Efficient Solutions",
              "Maintenance & Support",
              "System Upgrade & Retrofit",
              "Industrial & Commercial HVAC",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Bottom CTA */}
      {/* <section className="py-16 bg-primary text-white mt-5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-4">
            Need a Custom HVAC Solution?
          </h3>
          <p className="text-gray-300 mb-6">
            Talk to our engineering team and get the right solution for your
            project.  
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Contact Us
          </Link>
        </div>
      </section> */}
    </main>
  );
}
