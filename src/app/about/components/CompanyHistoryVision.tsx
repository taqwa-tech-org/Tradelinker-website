'use client';

interface ValueCard {
  icon: string;
  title: string;
  desc: string;
}

export default function CompanyHistoryVision() {
  const valueCards: ValueCard[] = [
    { icon: '🎯', title: 'Client Satisfaction', desc: 'Complete solutions' },
    { icon: '⚡', title: 'Cost Effective', desc: 'Best value services' },
    { icon: '🏆', title: 'Quality Driven', desc: 'Highest standards' },
    { icon: '🤝', title: 'Trust & Reliability', desc: 'Built on integrity' }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-pearl-aqua-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Story & Vision
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-pearl-aqua-300 transform md:-translate-x-1/2"></div>

          {/* History Section */}
          <div className="relative mb-20 md:mb-32">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 ml-20 md:ml-0 md:pr-16 md:text-right">
                <div className="inline-block bg-pearl-aqua-100 text-pearl-aqua-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Since 1970's
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Our Journey
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 1970's as <strong>Tradelinkers Corporation Ltd</strong>, 
                    we embarked on a mission to transform Bangladesh Industrial landscape.
                  </p>
                  <p>
                    Over <strong>five decades</strong>, we have evolved into a full-service 
                    multidisciplinary engineering and contracting powerhouse, completing 
                    <strong> over 400 projects</strong> across diverse sectors.
                  </p>
                  <p>
                    From planning to commissioning, we deliver complete turnkey solutions 
                    with proven expertise in complex projects of all scales, serving both 
                    private and public sector clients with excellence.
                  </p>
                </div>
              </div>

              {/* Image Placeholder - Right Side */}
              <div className="md:w-1/2 ml-20 md:ml-16">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary opacity-10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-8 border-l-4 border-primary">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-pearl-aqua-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-2xl font-bold text-primary">400+</span>
                    </div>
                    <p className="text-gray-600 font-medium">
                      Completed Projects
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Turnkey solutions across multiple industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse md:items-center gap-8">
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 ml-20 md:ml-16 md:text-left">
                <div className="inline-block bg-pearl-aqua-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Our Vision
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Looking Forward
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We aspire to become a <strong>market leader</strong> in our industries, 
                    offering our clients with complete satisfaction through best value and 
                    cost-effective services.
                  </p>
                  <p>
                    Our commitment is rooted in <strong>quality, reliability, and trust</strong> — 
                    the pillars that define every project we undertake.
                  </p>
                  <p>
                    We aim to be a <strong>world-class engineering and contracting company</strong>, 
                    providing efficient, affordable, and sustainable services at the highest 
                    level of quality for generations to come.
                  </p>
                </div>
              </div>

              {/* Icon Grid - Left Side */}
              <div className="md:w-1/2 ml-20 md:ml-0 md:pr-16">
                <div className="grid grid-cols-2 gap-4">
                  {valueCards.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pearl-aqua-100"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h4 className="font-bold text-sm text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}