import { Link } from "react-router-dom";
import { SITE } from "../../data/config";
import { Icon } from "../ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { name: "GitHub",    href: SITE.contact.github,   icon: "github"   as const },
    { name: "LinkedIn",  href: SITE.contact.linkedin,  icon: "linkedin" as const },
    { name: "Facebook",  href: SITE.contact.facebook,  icon: "facebook" as const },
    { name: "Email",     href: `mailto:${SITE.contact.email}`, icon: "mail" as const },
  ];

  return (
    <footer
      className="bg-surface border-t border-border"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left — name + copyright */}
          <div className="space-y-1">
            <Link
              to="/"
              className="font-display font-bold text-text hover:text-accent transition-colors duration-200"
            >
              Jade Ventic
            </Link>
            <p className="text-xs text-muted font-body">
              {year} {SITE.fullName}. Hello and Good Day!.
            </p>
          </div>

          {/* Center — nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {SITE.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-body font-medium text-muted hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={name}
                className="w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-text hover:bg-surface-card transition-all duration-200"
              >
                <Icon name={icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
