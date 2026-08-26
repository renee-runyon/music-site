import { useState } from "react";

const galleryImages = [
  {
    src: "/projects/magnoliaband.jpg",
    alt: "Sheila Vee performing live",
    caption: "Sheila Vee Band",
    rotate: "-rotate-6",
    position: "left-[2%] top-[0%]",
    size: "w-[52%]",
    z: "z-20",
  },
  {
    src: "/projects/sheila-gerry.jpg",
    alt: "Magnolia Street String Band",
    caption: "Magnolia Street String Band",
    rotate: "rotate-3",
    position: "left-[42%] top-[2%]",
    size: "w-[46%]",
    z: "z-10",
  },
  {
    src: "/projects/sheilavband.jpg",
    alt: "Sheila Vee and Gerry",
    caption: "With Gerry",
    rotate: "rotate-[8deg]",
    position: "left-[10%] top-[46%]",
    size: "w-[42%]",
    z: "z-30",
  },
  {
    src: "/projects/maindod.jpg",
    alt: "Disciples of the Dead",
    caption: "Disciples of the Dead",
    rotate: "-rotate-[5deg]",
    position: "left-[46%] top-[50%]",
    size: "w-[46%]",
    z: "z-0",
  },
];

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-md font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Sheila Vee
              <span className="font-serif italic font-normal text-white text-3xl">
                <br />
                {" "}
                Singer, songwriter, badass.
              </span>
            </h2>

            <div className="space-y-4 text-white text-lg animate-fade-in animation-delay-200">
              <p>
                Sheila Vee is a singer, songwriter, and bandleader who
                refuses to stay in one lane. Across five projects — from
                front-porch bluegrass with Magnolia Street String Band to
                the plugged-in Sheila Vee Band, easygoing duo sets with
                Gerry, and the heavier minor-key world of Disciples of the
                Dead — she brings the same voice and the same songwriting
                instincts to every room she plays. Her debut solo album,
                under Music with Sheila, arrives in 2026.
              </p>
            </div>
          </div>

          {/* Right Column - Scrapbook Gallery */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[600px] w-[300px] sm:w-[380px] lg:w-full mx-auto lg:mx-0 self-center">
            {galleryImages.map((img, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className={`absolute ${img.position} ${img.size} ${img.rotate} ${img.z}
                    group animate-fade-in transition-all duration-500 ease-out cursor-pointer
                    hover:rotate-0 hover:scale-105 hover:z-40
                    ${isActive ? "!rotate-0 !scale-105 !z-40" : ""}`}
                  style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                >
                  {/* Polaroid frame */}
                  <div className="bg-white p-3 pb-12 rounded-sm shadow-2xl shadow-black/40">
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="absolute bottom-3 left-0 right-0 text-center font-serif italic text-black text-sm px-2 truncate">
                      {img.caption}
                    </p>
                  </div>
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-white/40 rotate-2
                      shadow-sm backdrop-blur-[1px] border border-white/50"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};