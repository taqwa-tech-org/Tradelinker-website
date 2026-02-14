'use client';

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

export default function MissionValues() {
  const coreValues: CoreValue[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Excellence',
      description: 'Delivering highest standards in every project through rigorous quality control and best practices.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Reliability',
      description: 'Consistent performance and timely delivery that our clients can depend on, project after project.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparent communication and ethical business practices.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Cost Effectiveness',
      description: 'Maximizing value through innovative solutions and efficient resource management.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'Creating environmentally responsible and energy-efficient solutions for future generations.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'People Development',
      description: 'Investing in our team through continuous education and skill enhancement programs.'
    }
  ];

  const stats: Stat[] = [
    { number: '40+', label: 'Years Experience' },
    { number: '400+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mission & Values
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-pearl-aqua-50 rounded-3xl transform -rotate-1"></div>
            <div className="absolute inset-0 bg-pearl-aqua-100 rounded-3xl transform rotate-1"></div>
            
            {/* Content Card */}
            <div className="relative bg-gradient-to-br from-primary to-pearl-aqua-700 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Our Mission</h3>
                  <div className="w-20 h-1 bg-white bg-opacity-50"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-white text-opacity-95">
                <p>
                  To become a <strong>regional leader</strong> in our industries, offering clients 
                  complete satisfaction and delivering the best value and most cost-effective services 
                  based on quality, reliability, and trust.
                </p>
                <p className="text-base md:text-lg text-white text-opacity-90 italic border-l-4 border-white border-opacity-40 pl-6 mt-6">
                  We aim to be a world-class engineering and contracting company providing efficient, 
                  affordable, sustainable & cost-effective services of the highest level of quality.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white border-opacity-20">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-white text-opacity-80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we deliver
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border-2 border-pearl-aqua-100 hover:border-primary hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-pearl-aqua-100 group-hover:bg-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-5">
                  {value.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-pearl-aqua-200 group-hover:bg-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}