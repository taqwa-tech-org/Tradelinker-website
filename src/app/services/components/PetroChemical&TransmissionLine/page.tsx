import Image from "next/image";
import PetroChemicalImg from "@/public/images/services/PetroChemicalTransmissionLine.jpg";
import Link from "next/link";

export default function PetroChemicalTransmissionPage() {
    return (
        <main>
            {/* Overview */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                        Petro Chemical & Transmission Line
                    </h2>
                    <p className="text-black">
                        We provide end-to-end petrochemical engineering and
                        transmission line solutions, ensuring safe handling,
                        efficient processing, and reliable pipeline
                        infrastructure for the energy and chemical industries.
                    </p>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative w-full p-10 md:p-20 rounded-xl bg-blue-100">
                <div className="px-4 grid md:grid-cols-2 gap-10 items-center">
                    {/* Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                            Petro Chemical &amp; Transmission Line
                        </h1>

                        <p className="text-black mb-6">
                            From petrochemical plant engineering and process
                            design to transmission pipeline installation and
                            maintenance, we deliver robust, compliant solutions
                            that maximise operational efficiency and safety
                            across complex energy projects.
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
                            src={PetroChemicalImg}
                            alt="Petro Chemical & Transmission Line"
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
