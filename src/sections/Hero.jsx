import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Instagram,
  Youtube,
  Download,
  Facebook,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-image.jpg"
          alt="Hero image"
          className="w-full h-full object-cover object-[50%_10%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#5d9dff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#fbbf24]">
                <span className="w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse" />
                Solo Album Coming in 2026
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="pt-8 pb-8 text-4xl md:text-4xl lg:text-4xl font-bold leading-tight animate-fade-in animation-delay-100">
                Sheila Vee <span className="text-[#5d9dff]">Music</span>
                
              </h1>
              <p className="pb-8 text-lg text-white max-w-lg animate-fade-in animation-delay-200">
                One voice, five projects.< br/>< br/>
                From front-porch string band to solo songwriting to a heavier night on the dark side. Come find the one that's calling you.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me
              </Button>
              <AnimatedBorderButton>
                Explore My Music<ArrowRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
