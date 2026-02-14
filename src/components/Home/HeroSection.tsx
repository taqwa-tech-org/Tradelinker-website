import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/public/images/hero/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative  flex items-center overflow-hidden bg-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>

      <div className="relative z-10 container mx-auto px-5 md:px-10 py-5 md:py-10 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 md:px-5 py-2 rounded-full bg-pearl-aqua-100 text-pearl-aqua-800 border border-pearl-aqua-200">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-pearl-aqua-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs md:text-sm font-semibold">Since 1970's • 50+ Years of Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-7xl font-bold text-gray-900  mb-4 md:mb-6">
              Engineering
              <span className="block text-pearl-aqua-600">Solutions</span>
              <span className="block text-gray-900">That Last</span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-10 max-w-xl">
              Full-service multidisciplinary engineering and contracting company delivering 
              <strong> complete turnkey solutions</strong> from planning to handover.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-0">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-pearl-aqua-600 hover:bg-pearl-aqua-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Explore Our Services
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl border-2 border-gray-300 hover:border-pearl-aqua-600 transition-all duration-300 text-sm md:text-base"
              >
                Get in Touch
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators - Hidden on Mobile */}
            <div className="hidden md:block mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by leading companies</p>
              <div className="flex flex-wrap gap-4 lg:gap-6 items-center opacity-60">
                <span className="text-base lg:text-lg font-semibold text-gray-400">MILK VITA</span>
                <span className="text-base lg:text-lg font-semibold text-gray-400">IGLOO</span>
                <span className="text-base lg:text-lg font-semibold text-gray-400">POLAR</span>
                <span className="text-base lg:text-lg font-semibold text-gray-400">BRAC</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Now Visible on All Devices */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative z-10">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-pearl-aqua-400/30 to-pearl-aqua-600/30 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl"></div>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white">
                  <Image
                    src={HeroImg}
                    alt="Engineering Project"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                    priority
                  />
                </div>
              </div>

             

              {/* Floating Card - Top Right - Mobile Visible */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 bg-pearl-aqua-600 text-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl p-3 md:p-5">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-0 md:mb-1">24/7</div>
                  <div className="text-xs opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators - Mobile Only (Below Image) */}
          <div className="md:hidden order-3 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3 font-medium">Trusted by leading companies</p>
            <div className="flex flex-wrap gap-3 items-center opacity-60">
              <span className="text-sm font-semibold text-gray-400">MILK VITA</span>
              <span className="text-sm font-semibold text-gray-400">IGLOO</span>
              <span className="text-sm font-semibold text-gray-400">POLAR</span>
              <span className="text-sm font-semibold text-gray-400">BRAC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-pearl-aqua-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}