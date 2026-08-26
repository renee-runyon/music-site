import { useState } from "react";
import { ArrowUpRight, Github, Facebook, Instagram, X } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Music with Sheila",
    description:
      "Sheila's own songs, voice, and guitar out front. The sound she comes home to between every other project.",
    details:
      "Add a longer writeup here — background, upcoming shows, how this project started, etc.",
    image: "/projects/musicwithsheila.jpeg",
    tags: [""],
    link: "https://www.facebook.com/musicwithsheila",
    github: "#",
  },
  {
    title: "Magnolia Street String Band",
    description:
      "A five-piece acoustic collective featuring local musicians.",
    details: "Longer writeup for Magnolia Street String Band goes here.",
    image: "/projects/magnoliaband.jpg",
    tags: [""],
    link: "https://www.magnoliastreetstringband.com/",
    github: "",
    facebook: "https://www.facebook.com/groups/magnoliastreetstringband",
    instagram: "https://www.instagram.com/mssbmusic/",
  },
  {
    title: "Sheila Vee Band",
    description:
      "The full electric lineup. Sheila's songs, turned up and built for the stage.",
    details: "Longer writeup for Sheila Vee Band goes here.",
    image: "/projects/sheilavband.jpg",
    tags: [""],
    link: "#",
    github: "#",
  },
  {
    title: "Sheila & Gerry Jam",
    description:
      "Monthly invitational curated by Sheila Vee & Gerry Rosenthal. Featuring the regions most talented musicians.",
    details: "Longer writeup for the jam series goes here.",
    image: "/projects/sheila-gerry.jpg",
    tags: [""],
    link: "#",
    github: "#",
  },
  {
    title: "Disciples of the Dead",
    description:
      "New Jersey-based Grateful Dead tribute band featuring Michael Jaskewicz.",
    details: "Longer writeup for Disciples of the Dead goes here.",
    image: "/projects/dodperforming.jpg",
    tags: [""],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-highlight/70 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/60 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-64 bg-highlight/70 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/60 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-md font-medium tracking-wider uppercase animate-fade-in">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Music
            <span className="font-serif italic font-bold text-white"> that makes an impact.</span>
          </h2>
          <p className="text-white animate-fade-in animation-delay-200 text-lg">
            Sheila splits her time across five very different rooms.<br />
            Tap any project to read more and jump straight to its music and socials.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group project-card rounded-2xl overflow-hidden animate-fade-in md:row-span-1 cursor-pointer"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-40" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-semibold text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-white text-lg">{project.description}</p>
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

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">{selectedProject.title}</h3>
              <p className="text-white">{selectedProject.details || selectedProject.description}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm"
                  >
                    <ArrowUpRight className="w-4 h-4" /> Website
                  </a>
                )}
                {selectedProject.facebook && (
                  <a
                    href={selectedProject.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                )}
                {selectedProject.instagram && (
                  <a
                    href={selectedProject.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};