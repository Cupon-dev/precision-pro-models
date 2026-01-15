import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Templates: [
    { name: "Financial Modeling", href: "#" },
    { name: "Business Planning", href: "#" },
    { name: "Data Analytics", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "All Categories", href: "#categories" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Excel Tips", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Free Resources", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Affiliate Program", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@excelpro.com" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl">ExcelPro</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Professional Excel templates for finance professionals, founders, 
              and analysts. Built by experts. Trusted globally.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} ExcelPro. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/50">
              <span>🇺🇸 🇬🇧 🇩🇪 🇨🇦 🇦🇺</span>
              <span>Serving professionals in 40+ countries</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
