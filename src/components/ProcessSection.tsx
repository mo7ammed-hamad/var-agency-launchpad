import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discover", desc: "We understand your business, market, and goals." },
  { num: "02", title: "Plan", desc: "We build the right strategy and creative direction." },
  { num: "03", title: "Create", desc: "We design, write, produce, and prepare all required assets." },
  { num: "04", title: "Execute", desc: "We launch and deliver with precision." },
  { num: "05", title: "Refine", desc: "We improve results and support continued growth." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Process</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">How We Work</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="text-center md:text-left"
              >
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 bg-background mb-5">
                  <span className="font-heading text-xs font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
