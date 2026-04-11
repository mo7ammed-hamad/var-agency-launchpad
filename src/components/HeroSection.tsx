import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/80" />

    <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground"
      >
        Outstanding Ideas.{" "}
        <span className="font-accent italic text-gradient-gold">Premium</span>{" "}
        Execution.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-8 max-w-2xl mx-auto font-body text-base md:text-lg text-muted-foreground leading-relaxed"
      >
        VAR Agency delivers strategic marketing, creative branding, digital campaigns, events, and production solutions designed to help brands grow with clarity and presence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="px-8 py-3.5 bg-primary text-primary-foreground font-heading text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-primary/80 transition-colors duration-300"
        >
          Start Your Project
        </a>
        <a
          href="#services"
          className="px-8 py-3.5 border border-gold-subtle text-foreground font-heading text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-primary/10 transition-colors duration-300"
        >
          Explore Services
        </a>
      </motion.div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-5 h-8 border border-muted-foreground/40 rounded-full flex items-start justify-center p-1.5"
      >
        <div className="w-1 h-2 bg-primary rounded-full" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
