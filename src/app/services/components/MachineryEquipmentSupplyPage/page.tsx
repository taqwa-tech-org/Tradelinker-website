import Image from "next/image";
import MachineryImg from "@/public/images/services/mechinaryequip.jpg";
import Link from "next/link";

export default function MachineryEquipmentSupplyPage() {
  return (
    <main className="w-full">
      
      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Reliable Machinery & Equipment Supply
          </h2>
          <p className="text-gray-600">
            We supply high-quality industrial machinery and equipment sourced
            from trusted manufacturers, ensuring performance, durability, and
            long-term operational efficiency.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Machinery & Equipment Supply
            </h1>
            <p className="text-gray-300 mb-6">
              End-to-end supply solutions for industrial machinery and equipment,
              supporting installation, integration, and reliable site
              operations.
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
              src={MachineryImg}
              alt="Machinery and Equipment Supply"
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
