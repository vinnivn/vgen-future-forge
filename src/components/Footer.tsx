import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">VGEN</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            VGEN is a Future Skills & Innovation Platform preparing learners for tomorrow through Robotics, Artificial Intelligence, Innovation, Entrepreneurship, Emerging Technologies, and Community Problem Solving.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "Home", path: "/" },
              { label: "Programs", path: "/programs" },
              { label: "For Schools", path: "/for-schools" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-3">Future Skills Programs</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>AI Spark (Grade 5)</li>
            <li>Tech Fusion (Grade 6)</li>
            <li>GenAI Builder (Grade 7)</li>
            <li>Vortex AI (Grade 8)</li>
            <li>ImpactX (Grade 9)</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone size={14} /> +91 6363851378
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} /> +91 6364355011
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> contact@vgen.co.in
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> Mysore, Karnataka, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} VGEN. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
