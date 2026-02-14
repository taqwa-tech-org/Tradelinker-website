import {
BrushCleaning,
  Building2,
  Settings,
  Headphones
} from "lucide-react";

export default function CompanyIntroSection() {
  const capabilities = [
    {
      icon: BrushCleaning,
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
      <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-5 md:px-10">
              {/* Header */}
              <div className=" text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                      Complete Engineering Solutions from Industrial &
                      Commercial Refrigeration, Cold Storage, Food Processing, Gas Metering to Bulk Grain Handling Facilities
                  </h2>

                  <div className="w-24 h-1 bg-pearl-aqua-600 mx-auto mb-8"></div>

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      Since 1970's, Tradelinkers Engineering Limited has delivered
                      over 400 turnkey projects across Bangladesh in food and
                      agro industries. We provide end-to-end engineering
                      services — from architectural and MEP design through
                      construction, equipment supply, installation, and
                      commissioning. Our solutions meet international standards
                      while ensuring operational efficiency, safety, and
                      long-term reliability for cold storage, dairy & ice-cream processing,
                      seafood facilities, gas metering and bulk grain handling operations.
                  </p>
              </div>

              {/* Stats Bar */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {[
            { value: "1980", label: "Established" },
            { value: "400+", label: "Projects Completed" },
            { value: "40+", label: "Years Experience" },
            { value: "10+", label: "Industry Sectors" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 rounded-xl bg-pearl-aqua-50 border border-pearl-aqua-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-pearl-aqua-700 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

              {/* Capabilities Grid */}
              <div className="">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
                      Our Capabilities
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {capabilities.map((item, idx) => (
                          <div
                              key={idx}
                              className="group p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-pearl-aqua-600 hover:shadow-lg transition-all duration-300"
                          >
                              <div className="flex items-start gap-5">
                                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-pearl-aqua-100 text-pearl-aqua-700 font-bold text-xl flex items-center justify-center group-hover:bg-pearl-aqua-600 group-hover:text-white transition-colors">
                                      {item.number}
                                  </div>
                                  <div>
                                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pearl-aqua-700 transition-colors">
                                          {item.title}
                                      </h4>
                                      <p className="text-gray-600 leading-relaxed">
                                          {item.description}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Industries Served */}
              {/* <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-pearl-aqua-50 to-white rounded-2xl p-8 md:p-12 border border-pearl-aqua-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {[
                "Cold Storage",
                "Dairy Processing",
                "Ice Cream Plants",
                "Seafood Processing",
                "Meat Processing",
                "Grain Handling",
                "Grain Milling",
                "HVAC Solutions",
                "Fire & Security",
                "Building Management"
              ].map((industry, idx) => (
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
        </div> */}
          </div>
      </section>
  );
}
