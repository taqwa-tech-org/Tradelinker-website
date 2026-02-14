import Image from "next/image";
import MachineryImg from "@/public/images/services/mechinaryequip.jpg";
import Link from "next/link";

export default function MachineryEquipmentSupplyPage() {
  return (
    <main>
      
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            Reliable Machinery & Equipment Supply
          </h2>
          <p className="text-black">
            We supply high-quality industrial machinery and equipment sourced
            from trusted manufacturers, ensuring performance, durability, and
            long-term operational efficiency.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full p-10 md:p-20 rounded-xl bg-blue-100">
        <div className="px-4 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Machinery & Equipment Supply
            </h1>

            <p className="text-blue-700 mb-6">
              End-to-end supply solutions for industrial machinery and equipment,
              supporting installation, integration, and reliable site
              operations.
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
              src={MachineryImg}
              alt="Machinery and Equipment Supply"
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
