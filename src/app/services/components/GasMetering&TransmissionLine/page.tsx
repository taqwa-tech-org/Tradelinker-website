import Image from "next/image";
import GasMeteringImg from "@/public/images/services/Gas-Metering.jpg";
import Link from "next/link";

export default function GasMeteringTransmissionPage() {
    return (
        <main>
            {/* Overview */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                        Gas Metering & Transmission Line
                    </h2>
                    <p className="text-black">
                        We design, install, and commission gas metering systems
                        and transmission pipelines that ensure accurate
                        measurement, safe distribution, and reliable long-term
                        performance for industrial and commercial applications.
                    </p>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative w-full p-10 md:p-20 rounded-xl bg-blue-100">
                <div className="px-4 grid md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={GasMeteringImg}
                            alt="Gas Metering & Transmission Line"
                            fill
                            className="object-cover rounded-xl shadow-md"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                            Gas Metering &amp; Transmission Line
                        </h1>

                        <p className="text-black mb-6">
                            From pipeline engineering and metering station
                            design to installation and commissioning, we deliver
                            precise gas measurement and safe, efficient
                            transmission infrastructure for industrial and
                            energy sectors.
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
