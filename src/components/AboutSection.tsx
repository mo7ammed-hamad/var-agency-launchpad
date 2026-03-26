import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Sparkles, Layers } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Strategic thinking" },
  { icon: Sparkles, title: "Premium creative execution" },
  { icon: Layers, title: "Integrated digital and offline solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">About</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Who We Are</h2>
          <p className="mt-6 font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            VAR Agency is a full-service marketing agency focused on helping brands communicate with strength, clarity, and consistency. We combine strategy, creativity, and execution to deliver marketing solutions that are both visually compelling and commercially effective.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group p-8 rounded-sm border border-gold-subtle bg-card hover:glow-gold transition-all duration-500"
            >
              <item.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading font-semibold text-sm tracking-wide text-foreground">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
