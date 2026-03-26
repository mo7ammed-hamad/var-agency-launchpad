import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { img: portfolio1, title: "Brand Identity System", cat: "Branding & Creative" },
  { img: portfolio2, title: "Digital Campaign Launch", cat: "Digital Marketing" },
  { img: portfolio3, title: "Corporate Event Activation", cat: "Events & Activations" },
  { img: portfolio4, title: "Premium Print Collateral", cat: "Stationery & Print" },
];

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Selected Work</h2>
          <p className="mt-5 max-w-2xl mx-auto font-body text-muted-foreground text-base leading-relaxed">
            Our work is shaped by strategy, refined by creativity, and delivered with business purpose. From brand materials and digital campaigns to event support and promotional production, every output is designed to elevate brand presence.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="group relative overflow-hidden rounded-sm border border-gold-subtle"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="font-heading text-xs tracking-widest uppercase text-primary mb-1">{p.cat}</p>
                <h3 className="font-heading font-semibold text-lg text-foreground">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 border border-gold-subtle text-foreground font-heading text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-primary/10 transition-colors duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
