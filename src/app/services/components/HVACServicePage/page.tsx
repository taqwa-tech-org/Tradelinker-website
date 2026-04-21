import Image from "next/image";
import Link from "next/link";
import HvacImg from "@/public/images/services/HVAC-Solutions.jpg";

export default function HVACServicePage() {
    return (
        <main className="">
            {/* Overview */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                        Reliable HVAC Engineering
                    </h2>
                    <p className="text-black">
                        We design, install, and maintain HVAC systems that
                        ensure comfort, efficiency, and long-term performance
                        for industrial and commercial projects.
                    </p>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative w-full p-10 md:p-20 bg-blue-100 rounded-xl">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={HvacImg}
                            alt="HVAC Service"
                            fill
                            className="object-cover rounded-xl shadow-md"
                            priority
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                            HVAC Solutions
                        </h1>

                        <p className="text-black mb-6">
                            Efficient heating, ventilation, and air conditioning
                            solutions for industrial and commercial facilities.
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
