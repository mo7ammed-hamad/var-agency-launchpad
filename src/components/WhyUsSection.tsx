import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Gem, Link, Award } from "lucide-react";

const points = [
  { icon: Target, title: "Strategic Approach", desc: "We start with your business goals, not only visuals." },
  { icon: Gem, title: "Creative Precision", desc: "We create work that is polished, relevant, and aligned with brand value." },
  { icon: Link, title: "Integrated Solutions", desc: "From digital campaigns to physical brand materials, we connect every touchpoint." },
  { icon: Award, title: "Premium Standards", desc: "We care about detail, consistency, and presentation in every project." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Why Us</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Why VAR Agency</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="flex gap-5 p-6 rounded-sm border border-gold-subtle bg-card hover:glow-gold transition-all duration-500"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-gold-subtle flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
