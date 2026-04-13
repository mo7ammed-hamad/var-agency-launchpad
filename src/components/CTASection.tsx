import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-snug">
            Let's Build Something{" "}
            <span className="font-accent italic text-gradient-gold text-black">Powerful</span>{" "}
            for Your Brand
          </h2>
          <p className="mt-6 font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            Whether you need digital marketing, creative direction, event support, premium print materials, or branded promotional items, VAR Agency is ready to help you move forward with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-heading text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-primary/80 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-gold-subtle text-foreground font-heading text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-primary/10 transition-colors duration-300"
            >
              Request a Proposal
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
