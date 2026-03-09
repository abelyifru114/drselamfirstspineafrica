import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="font-serif text-xl font-bold text-primary-foreground mb-1">
            Dr. Selam Aklilu
          </h3>
          <p className="text-xs tracking-widest uppercase text-primary mb-4">
            1st Spine Clinics
          </p>
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
            Africa's leading spine health expert. Pioneering chiropractic care and
            holistic wellness across Ethiopia and the continent.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-sm tracking-widest uppercase text-primary mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "About Dr. Selam", href: "/about" },
              { label: "Clinics & Services", href: "/services" },
              { label: "Spine Health Library", href: "/spine-health-library" },
              { label: "Media & Speaking", href: "/media" },
              { label: "Blog & Insights", href: "/blog" },
              { label: "Book Appointment", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-sm tracking-widest uppercase text-primary mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {[
              "Chiropractic Adjustments",
              "Posture Correction",
              "Back & Neck Pain Treatment",
              "Rehabilitation Therapy",
              "Corporate Wellness",
              "Spine Health Education",
            ].map((s) => (
              <li key={s} className="text-sm text-primary-foreground/70">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm tracking-widest uppercase text-primary mb-5">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-primary-foreground/70">
                Bole Road, Addis Ababa<br />Ethiopia
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a
                href="tel:+251911000000"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                +251 911 000 000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a
                href="mailto:info@1stspineclinics.com"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                info@1stspineclinics.com
              </a>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <p className="text-xs text-primary-foreground/60 mb-1">Clinic Hours</p>
            <p className="text-sm text-primary-foreground/80">Mon–Fri: 8am – 6pm</p>
            <p className="text-sm text-primary-foreground/80">Saturday: 9am – 2pm</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-primary-foreground/50">
          <p>© 2024 Dr. Selam Aklilu · 1st Spine Clinics. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
