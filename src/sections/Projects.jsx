import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Music with Sheila",
    description:
      "Sheila's own songs, voice, and guitar out front. The sound she comes home to between every other project.",
    image: "/projects/musicwithsheila.jpeg",
    tags: [""],
    link: "https://www.facebook.com/musicwithsheila",
    github: "#",
  },
  {
    title: "Magnolia Street String Band",
    description:
      "A five-piece acoustic collective featuring local musicians.",
    image: "/projects/magnoliaband.jpg",
    tags: [""],
    link: "#",
    github: "#",
  },
  {
    title: "Sheila Vee Band",
    description:
      "The full electric lineup. Sheila's songs, turned up and built for the stage.",
    image: "/projects/sheilavband.jpg",
    tags: [""],
    link: "#",
    github: "#",
  },
  {
    title: "Sheila & Gerry Jam",
    description:
      "Monthly invitational curated by Sheila Vee & Gerry Rosenthal. Featuring the regions most talented musicians.",
    image: "/projects/sheila-gerry.jpg",
    tags: [""],
    link: "#",
    github: "#",
  },
    {
    title: "Disciples of the Dead",
    description:
      "New Jersey-based Grateful Dead tribute band featuring Michael Jaskewicz.",
    image: "/projects/dodperforming.jpg",
    tags: [""],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-highlight/70 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/60 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-64 bg-highlight/70 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/60 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Music
            <span className="font-serif italic font-normal text-white">
              {" "}
              that makes an impact.
            </span>
          </h2>
          <p className="text-white animate-fade-in animation-delay-200">
            Sheila splits her time across five very different rooms.<br />Tap any project to read more and jump straight to its music and socials.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group project-card rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50 to-transparent opacity-40"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-primary group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-white text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
