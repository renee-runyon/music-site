import { Github, Linkedin, Twitter, Heart } from "lucide-react";


const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects2", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="section-title text-xl font-bold tracking-tight">
              Sheila Vee<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear}  |   All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>


          <div className="text-center md:text-left">

            <a className="text-sm text-muted-foreground mt-2">
              Site by <span 
              href="https://datachunkdesigns.com"
              target="_blank" 
              rel="nofollow noopener noreferrer">
                Datachunk Media Designs
                </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
