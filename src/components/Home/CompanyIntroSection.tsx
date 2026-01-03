export default function CompanyIntroSection() {
  const capabilities = [
    {
      number: "01",
      title: "Design & Engineering",
      description: "Architectural, structural, and MEP design for complete facility planning"
    },
    {
      number: "02",
      title: "Construction & Supply",
      description: "Civil works, steel buildings, and plant machinery procurement"
    },
    {
      number: "03",
      title: "Installation & Commissioning",
      description: "Professional erection, testing, and system activation services"
    },
    {
      number: "04",
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
            Complete Engineering Solutions for Industrial Refrigeration, Cold Storage, and Food Processing Facilities
          </h2>
          
          <div className="w-24 h-1 bg-pearl-aqua-600 mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Since 1980, Tradelinkers Engineering Limited has delivered over 400 turnkey projects 
            across Bangladesh food and agro industries. We provide end-to-end engineering 
            services—from architectural and MEP design through construction, equipment supply, 
            installation, and commissioning. Our solutions meet international standards while 
            ensuring operational efficiency, safety, and long-term reliability for cold storage, 
            dairy processing, seafood facilities, and grain handling operations.
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
                  className="py-3 px-4 rounded-lg bg-white border border-pearl-aqua-200 text-sm font-medium text-gray-700 hover:border-pearl-aqua-600 hover:text-pearl-aqua-700 transition-colors"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}