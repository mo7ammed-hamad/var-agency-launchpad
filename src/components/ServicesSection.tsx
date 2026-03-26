import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Palette, CalendarCheck, FileText, Gift, Camera } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Digital Marketing", desc: "Performance-driven strategies, social media management, advertising, and audience growth." },
  { icon: Palette, title: "Branding & Creative", desc: "Identity systems, campaign concepts, brand visuals, and creative direction." },
  { icon: CalendarCheck, title: "Events & Activations", desc: "Experiences and branded moments that connect businesses with their audience." },
  { icon: FileText, title: "Stationery & Print Materials", desc: "Professionally designed printed assets that strengthen brand image and communication." },
  { icon: Gift, title: "Giveaways & Promotional Items", desc: "Branded items that increase visibility and leave a memorable impression." },
  { icon: Camera, title: "Content Production", desc: "Photography, videography, short-form content, and campaign visuals that bring ideas to life." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Services</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">What We Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative p-8 rounded-sm border border-gold-subtle bg-background hover:border-primary/40 hover:glow-gold transition-all duration-500"
            >
              <s.icon className="w-7 h-7 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading font-semibold text-base text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
