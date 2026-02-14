import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/public/images/hero/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-white">
      
      <div className="relative z-10 container mx-auto px-5 md:px-10 py-5 md:py-10 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            
            {/* Light Badge */}
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 md:px-5 py-2 rounded-full 
              bg-blue-50 text-blue-600 border border-blue-100">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs md:text-sm font-semibold">Since 1970's • 50+ Years of Excellence</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
              Engineering
              <span className="block text-blue-400">Solutions</span>
              <span className="block text-gray-900">That Last</span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-10 max-w-xl">
              Full-service multidisciplinary engineering and contracting company delivering 
              <strong> complete turnkey solutions</strong> from planning to handover.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-0">
              
              {/* Primary Button - Soft Blue */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 
                bg-blue-500 hover:bg-blue-600
                text-white font-semibold rounded-xl shadow-md hover:shadow-lg 
                transition-all duration-300 text-sm md:text-base"
              >
                Explore Our Services
              </Link>

              {/* Secondary Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 
                bg-white hover:bg-blue-50 
                text-gray-900 font-semibold rounded-xl 
                border border-blue-200 hover:border-blue-400
                transition-all duration-300 text-sm md:text-base"
              >
                Get in Touch
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              
              {/* Soft Light Glow */}
              <div className="absolute -inset-2 md:-inset-4 bg-blue-100 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl"></div>

              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-100">
                <Image
                  src={HeroImg}
                  alt="Engineering Project"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                  priority
                />
              </div>

              {/* Light 24/7 Card */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 
                bg-blue-100 text-blue-700 
                rounded-lg md:rounded-xl shadow-md p-3 md:p-5 border border-blue-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-0 md:mb-1">24/7</div>
                  <div className="text-xs opacity-80">Support</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
