import {
  PaintbrushVertical,
  Building2,
  Settings,
  Headphones
} from "lucide-react";

export default function CompanyIntroSection() {
  const capabilities = [
    {
      icon: PaintbrushVertical,
      title: "Design & Engineering",
      description: "Architectural, structural, and MEP design for complete facility planning"
    },
    {
      icon: Building2,
      title: "Construction & Supply",
      description: "Civil works, steel buildings, and plant machinery procurement"
    },
    {
      icon: Settings,
      title: "Installation & Commissioning",
      description: "Professional erection, testing, and system activation services"
    },
    {
      icon: Headphones,
      title: "After Sales Support",
      description: "Ongoing technical assistance and maintenance programs"
    }
  ];

  return (
      <section className="py-20 md:py-24 bg-blue-50/40">
          <div className="container mx-auto px-5 md:px-10">
              {/* Header */}
              <div className="text-center mb-16  mx-auto">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                      Complete Engineering Solutions from Industrial &
                      Commercial Refrigeration, Cold Storage, Food Processing,
                      Gas Metering to Bulk Grain Handling Facilities
                  </h2>

                  <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      Since 1970's, Tradelinkers Engineering Limited has
                      delivered over 400 turnkey projects across Bangladesh in
                      food and agro industries. We provide end-to-end
                      engineering services — from architectural and MEP design
                      through construction, equipment supply, installation, and
                      commissioning. Our solutions meet international standards
                      while ensuring operational efficiency, safety, and
                      long-term reliability for cold storage, dairy & ice-cream
                      processing, seafood facilities, gas metering and bulk
                      grain handling operations.
                  </p>
              </div>

              {/* Capabilities */}
              <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
                      Our Capabilities
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {capabilities.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                              <div
                                  key={idx}
                                  className="group p-8 rounded-xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                              >
                                  <div className="flex items-start gap-5">
                                      {/* Icon Box */}
                                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                          <Icon size={24} />
                                      </div>

                                      <div>
                                          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                              {item.title}
                                          </h4>
                                          <p className="text-gray-600 leading-relaxed">
                                              {item.description}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </section>
  );
}
