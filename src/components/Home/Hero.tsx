import Image from "next/image";
import HeroImg from "../../../public/Hvac.jpg";

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
      <div className="absolute inset-0 bg-black/40" />

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
            <p
              className="
                inline-block px-3 py-px mb-4
                text-xs font-semibold tracking-wider
                text-white uppercase
                rounded-full bg-white/20
              "
            >
              New Collaboration
            </p>

            <h1
              className="
                mb-6 font-sans
                text-4xl sm:text-5xl
                font-bold tracking-tight
                text-white leading-tight
              "
            >
              The quick, brown fox <br />
              jumps over{" "}
              <span className="text-indigo-300">
                a lazy dog
              </span>
            </h1>

            <button className="group relative inline-block text-sm font-medium text-white">
              <span
                className="
                  absolute inset-0
                  translate-x-0.5 translate-y-0.5
                  bg-indigo-600
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
                Download
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
