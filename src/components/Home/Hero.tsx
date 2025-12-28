import Image from "next/image";
import HeroImg from "../../../public/Hvac.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[85vh]
        md:h-[75vh]
        lg:h-[70vh]
      "
    >
      {/* Background Image */}
      <Image
        src={HeroImg}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      {/* Centered Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 xl:px-0">
          {/* Glass Card */}
          <div
            className="
              mx-auto text-center
              max-w-xl p-8
              rounded-3xl
              backdrop-blur-lg bg-white/20
              border border-white/30
              shadow-2xl
            "
          >
            <h1
              className="
                 font-sans
                 p-2 text-2xl
                font-bold tracking-tight
                text-white leading-tight
              "
            >
              Energy-efficient heating, ventilation, and air-conditioning
              systems designed for comfort, performance, and long-term
              reliability.
            </h1>
            <Link href={"/contact"}>
              <button
                className="group relative inline-block text-sm font-medium text-white bg-primary
                  hover:bg-primary-hover"
              >
                <span
                  className="
                  absolute inset-0
                  translate-x-0.5 translate-y-0.5
                  
                  transition-transform
                  group-hover:translate-x-0
                  group-hover:translate-y-0
                "
                ></span>

                <span
                  className="
                  relative block
                  border border-white
                  bg-transparent
                  px-8 py-3
                  rounded-lg
                "
                >
                  Request a Consultation
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
