import { useState } from "react";
import { ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";

const projects2 = [
  {
    title: "Music with Sheila",
    description:
      "Sheila's own songs, voice, and guitar out front. The sound she comes home to between every other project.",
    details:
      "Sheila's solo project is where her original songwriting lives — stripped-back arrangements built around voice, guitar, and story. Her debut solo album is on the way for 2026, and this is the best place to hear where that record is headed.",
    image: "/projects/musicwithsheila.jpeg",
    link: "",
    facebook: "https://www.facebook.com/musicwithsheila",
    instagram: "",
    youtube: "",
  },
  {
    title: "Magnolia Street String Band",
    description:
      "A five-piece acoustic collective featuring local musicians.",
    details:
      "Magnolia Street String Band is a five-piece acoustic collective featuring incredible musicians from New Jersey, Pennsylvania, and New York. The group plays everything from traditional bluegrass to cosmic Americana.",
    image: "/projects/magnoliaband.jpg",
    link: "https://www.magnoliastreetstringband.com/",
    facebook: "https://www.facebook.com/groups/magnoliastreetstringband",
    instagram: "https://www.instagram.com/mssbmusic/",
    youtube: "",
  },
  {
    title: "Sheila Vee Band",
    description:
      "The full electric lineup. Sheila's songs, turned up and built for the stage.",
    details:
      "The Sheila Vee Band is the full-lineup, plugged-in version of her songwriting — drums, bass, and electric guitar behind her voice. Details on the current roster and upcoming shows are coming soon.",
    image: "/projects/sheilavband.jpg",
    link: "",
    facebook: "https://www.facebook.com/sheilaveemusic",
    instagram: "",
    youtube: "",
  },
  {
    title: "Sheila & Gerry Jam",
    description:
      "Monthly invitational curated by Sheila Vee & Gerry Rosenthal. Featuring the region's most talented musicians.",
    details:
      "The Sheila & Gerry Jam happens at Pino's, 13 N. 4th Ave, Highland Park NJ, on most first Thursdays of the month. This jam/invitational has been going strong for 4 years and growing in numbers and popularity.",
    image: "/projects/sheila-gerry.jpg",
    link: "",
    facebook: "https://www.facebook.com/sheilagerryjam",
    instagram: "",
    youtube: "",
  },
  {
    title: "Disciples of the Dead",
    description:
      "New Jersey-based Grateful Dead tribute band featuring Michael Jaskewicz.",
    details:
      "Disciples of the Dead is Sheila's outlet for darker, heavier material — minor-key songwriting, atmospheric guitars, and a stage show built around mood and low light. Not for the solo-acoustic crowd.",
    image: "/projects/dodperforming.jpg",
    link: "",
    facebook: "https://www.facebook.com/profile.php?id=61582860777201",
    instagram: "https://www.instagram.com/disciplesofthedead",
    youtube:
      "https://www.youtube.com/playlist?app=desktop&list=PLn__CXKP_89EWs_eeXL9LfLfnA9reqxL4",
  },
];

const SocialLinks = ({ project }) => (
  <div className="flex flex-wrap gap-4 mt-4">
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm uppercase tracking-wider transition-colors"
      >
        <ArrowUpRight className="w-4 h-4" />
        Website
      </a>
    )}

    {project.facebook && (
      <a
        href={project.facebook}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm uppercase tracking-wider transition-colors"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </a>
    )}

    {project.instagram && (
      <a
        href={project.instagram}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm uppercase tracking-wider transition-colors"
      >
        <Instagram className="w-4 h-4" />
        Instagram
      </a>
    )}

    {project.youtube && (
      <a
        href={project.youtube}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm uppercase tracking-wider transition-colors"
      >
        <Youtube className="w-4 h-4" />
        YouTube
      </a>
    )}
  </div>
);

export const Projects2 = () => {
  // The first project is selected when the page loads.
  const [expandedIndex, setExpandedIndex] = useState(0);

  const displayProject = projects2[expandedIndex];

  return (
    <section
      id="projects2"
      className="relative overflow-hidden bg-gradient-to-t from-black via-black/1 to-[#06122D] py-16"
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className="my-8 mb-20 h-1 w-24 animate-fade-in animation-delay-200 bg-[#5d9dff]" />

        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <span className="mb-4 block animate-fade-in text-sm uppercase tracking-[0.3em] text-[#5d9dff]">
            Projects - OPTION 2
          </span>

          <h2 className="animate-fade-in text-4xl font-bold uppercase tracking-tight text-white animation-delay-100 md:text-6xl">
            Five rooms.
            <br />
            One voice.
          </h2>

          <p className="mt-6 animate-fade-in text-lg text-white/60 animation-delay-200">
            Sheila splits her time across five very different projects. Click
            a name to view its image, details, and socials.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Project title list */}
          <div className="border-t border-white/10">
            {projects2.map((project, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div key={project.title} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(idx)}
                    className="group flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <div>
                      <h3
                        className={`text-2xl font-bold uppercase tracking-tight transition-colors md:text-3xl ${
                          isExpanded
                            ? "text-[#5d9dff]"
                            : "text-white group-hover:text-[#5d9dff]"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-1 hidden text-white/50 sm:block">
                        {project.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      className={`h-6 w-6 flex-shrink-0 text-white/40 transition-transform duration-300 ${
                        isExpanded ? "rotate-45 text-[#5d9dff]" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile project details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 lg:hidden ${
                      isExpanded ? "max-h-[600px] pb-6" : "max-h-0"
                    }`}
                  >
                    <div className="mb-4 aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="text-white/70">
                      {project.details || project.description}
                    </p>

                    <SocialLinks project={project} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Desktop project image and details */}
          <div className="sticky top-32 hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
              {projects2.map((project, idx) => (
                <img
                  key={project.title}
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    expandedIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                {displayProject.title}
              </h3>

              <p className="mt-3 text-white/70">
                {displayProject.details || displayProject.description}
              </p>

              <SocialLinks project={displayProject} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
