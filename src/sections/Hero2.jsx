import { ArrowRight, ChevronDown, Facebook, Instagram, Youtube } from "lucide-react";

export const Hero2 = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Full-bleed background image, no dots, no soft gradient blur */}
      <div className="absolute inset-0">
        <img
          src="/hero-image.jpg"
          alt="Hero image"
          className="w-full h-full object-cover sm:object-[10%_10%] grayscale-[20%]"
        />
        {/* Single hard gradient for text legibility, not ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/10" />
      </div>

      {/* Content, bottom-anchored */}
      <div className="container mx-auto px-6 pb-20 pt-40 relative z-10">
        <div className="max-w-4xl">
          <span className="block text-sm tracking-[0.3em] uppercase text-amber-400 mb-6 animate-fade-in">
            Solo album coming 2026
          </span>

          <h1 className="section-title text-6xl md:text-8xl font-bold leading-[0.95] uppercase tracking-tight text-white animate-fade-in animation-delay-100">
            Sheila Vee
          </h1>

          <div className="h-1 w-24 bg-[#5d9dff] my-8 animate-fade-in animation-delay-200" />

          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 animate-fade-in animation-delay-300">
            One voice, five projects. From front-porch string band to solo
            songwriting to a heavier night on the dark side.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
            <a href="#projects2">
              <button className="px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider text-sm hover:bg-[#5d9dff] hover:text-white transition-colors">
                Projects
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm hover:border-white transition-colors flex items-center gap-2">
                Contact <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>

          
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 right-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest hidden sm:inline">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};