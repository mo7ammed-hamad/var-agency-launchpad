import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-16 px-6 md:px-12 border-t border-gold-subtle bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="max-w-md">
          <p className="font-heading font-bold text-lg text-foreground tracking-wider">
            VAR <span className="text-gradient-gold">Agency</span>
          </p>
          <p className="mt-2 font-accent italic text-sm text-muted-foreground">Outstanding Ideas. Premium Execution.</p>
          <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
            Integrated marketing solutions across branding, digital marketing, events, print materials, promotional items, and content production.
          </p>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/var__agency/?hl=en" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/var-marketing-agency/about/?viewAsMember=true" },
            { icon: MessageCircle, label: "WhatsApp", href: "#" },
            { icon: Mail, label: "Email", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-sm border border-gold-subtle flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gold-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} VAR Agency. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Erbil &nbsp;·&nbsp; Baghdad
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
