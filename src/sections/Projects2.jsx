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
        <ArrowUpRight className="w-4 h-4" /> Website
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
        <Facebook className="w-4 h-4" /> Facebook
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
        <Instagram className="w-4 h-4" /> Instagram
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
        <Youtube className="w-4 h-4" /> YouTube
      </a>
    )}
  </div>
);

export const Projects2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const displayIndex = hoveredIndex ?? 0;

  return (
    <section id="projects2" className="py-60 relative overflow-hidden bg-gradient-to-t from-black via-black/1 to-[#06122D]">
        
        <div className="mb-20 ml-16 h-1 w-24 bg-[#5d9dff] my-8 animate-fade-in animation-delay-200" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="block text-sm tracking-[0.3em] uppercase text-[#5d9dff] mb-4 animate-fade-in">
            Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white animate-fade-in animation-delay-100">
            Five rooms.
            <br />
            One voice.
          </h2>
          <p className="text-white/60 text-lg mt-6 animate-fade-in animation-delay-200">
            Sheila splits her time across five very different projects.
            Hover a name to preview, or tap to read more and jump straight to
            its music and socials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Title list */}
          <div className="border-t border-white/10">
            {projects2.map((project, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={idx} className="border-b border-white/10">
                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : idx)
                    }
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="w-full text-left py-6 flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#5d9dff] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/50 mt-1 hidden sm:block">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={`w-6 h-6 text-white/40 flex-shrink-0 transition-transform duration-300 ${
                        isExpanded ? "rotate-45 text-[#5d9dff]" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile / touch expansion — replaces modal entirely */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                      isExpanded ? "max-h-[600px] pb-6" : "max-h-0"
                    }`}
                  >
                    <div className="aspect-video overflow-hidden mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
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

          {/* Right: Sticky image preview — desktop only */}
          <div className="hidden lg:block sticky top-32">
            <div className="aspect-[4/5] overflow-hidden bg-white/5">
              {projects2.map((project, idx) => (
                <img
                  key={idx}
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                    displayIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <p className="text-white/50 mt-4 text-sm uppercase tracking-wider">
              {projects2[displayIndex].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};