import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const galleryImages = [
  {
    src: "/projects/magnoliaband.jpg",
    alt: "Sheila Vee performing live",
    caption: "Sheila Vee Band",
    area: "hero",
  },
  {
    src: "/projects/sheila-gerry.jpg",
    alt: "Magnolia Street String Band",
    caption: "Magnolia Street String Band",
    area: "side1",
  },
  {
    src: "/projects/sheilavband.jpg",
    alt: "Sheila Vee and Gerry",
    caption: "With Gerry",
    area: "side2",
  },
  {
    src: "/projects/maindod.jpg",
    alt: "Disciples of the Dead",
    caption: "Disciples of the Dead",
    area: "banner",
  },
];

const areaClass = {
  hero: "lg:[grid-area:hero]",
  side1: "lg:[grid-area:side1]",
  side2: "lg:[grid-area:side2]",
  banner: "lg:[grid-area:banner]",
};

export const About = () => {
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

          {/* Right Column - Gallery */}
          <div
            className="self-center grid grid-cols-2 grid-rows-2 gap-4 h-[450px] sm:h-[400px] lg:h-[500px]
              lg:[grid-template-columns:1fr_1fr]
              lg:[grid-template-areas:'hero_side1'_'hero_side2'_'banner_banner']
              lg:grid-rows-[1fr_1fr_1fr]"
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden group animate-fade-in ${areaClass[img.area]}`}
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 " />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium text-white">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};