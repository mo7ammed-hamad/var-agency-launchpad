import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground leading-snug">
            A modern agency built for brands that want{" "}
            <span className="text-gradient-gold font-accent italic text-black">impact</span>.
          </h2>
          <p className="mt-6 font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We help businesses strengthen their market presence through strategic thinking, strong creative direction, and high-quality execution across digital and offline channels.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
