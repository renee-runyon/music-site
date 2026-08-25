import { Code2, Lightbulb, Rocket, Users } from "lucide-react";



export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Sheila Vee
              <span className="font-serif italic font-normal text-white text-2xl"><br />
                {" "}
                Singer, songwriter, badass.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Sheila Vee is a singer, songwriter, and bandleader who refuses to stay in one lane. Across five projects — from front-porch bluegrass with Magnolia Street String Band to the plugged-in Sheila Vee Band, easygoing duo sets with Gerry, and the heavier minor-key world of Disciples of the Dead — she brings the same voice and the same songwriting instincts to every room she plays. Her debut solo album, under Music with Sheila, arrives in 2026.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Singer/Songwriter, Sheila Vee, is a guitarist who plays bluegrass & jamband music, as well as the cosmic intersection of both genres."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}

        </div>
      </div>
    </section>
  );
};
