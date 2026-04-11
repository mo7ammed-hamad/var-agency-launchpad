import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Contact Us</h2>
          <p className="mt-5 max-w-2xl mx-auto font-body text-muted-foreground text-base leading-relaxed">
            Tell us about your brand, your project, or your next campaign. We would be glad to explore how VAR Agency can support your growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name" required className="w-full px-5 py-3.5 bg-card border border-gold-subtle rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="text" placeholder="Company Name" className="w-full px-5 py-3.5 bg-card border border-gold-subtle rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 bg-card border border-gold-subtle rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder="Email" required className="w-full px-5 py-3.5 bg-card border border-gold-subtle rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <select required className="w-full px-5 py-3.5 bg-card border border-gold-subtle rounded-sm font-body text-sm text-muted-foreground focus:outline-none focus:border-primary transition-colors">
              <option value="">Service Needed</option>
              <option>Digital Marketing</option>
              <option>Branding & Creative</option>
              <option>Events & Activations</option>
              <option>Stationery & Print Materials</option>
              <option>Giveaways & Promotional Items</option>
              <option>Content Production</option>
              <option>Multiple Services</option>
            </select>
            <textarea placeholder="Project Details" rows={5} className="w-full px-5 py-3.5 bg-card border border-gold-subtle rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 bg-primary text-primary-foreground font-heading text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-primary/80 transition-colors duration-300"
            >
              {submitted ? "Message Sent ✓" : "Submit"}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: MessageCircle, label: "\n", value: "\n" },
              { icon: Mail, label: "Email", value: "info@var-agency.com" },
              { icon: Phone, label: "Phone", value: "+964 750 211 3131" },
              { icon: MapPin, label: "Location", value: "Erbil" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div>
                  <p className="font-heading text-xs tracking-wide text-muted-foreground uppercase">{item.label}</p>
                  <p className="font-body text-sm text-foreground mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
