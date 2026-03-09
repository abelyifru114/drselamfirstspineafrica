import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, fadeUpDelay, staggerContainer, staggerItem } from "@/lib/animations";
import drSelamHero from "@/assets/dr-selam-hero.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import postureEducation from "@/assets/posture-education.jpg";
import speakingConference from "@/assets/speaking-conference.jpg";

const milestones = [
  { year: "2005", event: "Graduated with distinction in Chiropractic Sciences from international institution" },
  { year: "2008", event: "Advanced training in Spinal Manipulation Therapy in Europe" },
  { year: "2010", event: "Founded 1st Spine Clinics in Addis Ababa, Ethiopia" },
  { year: "2014", event: "Expanded to three clinic locations across the city" },
  { year: "2018", event: "Launched the Ethiopia Spine Health Awareness Campaign" },
  { year: "2022", event: "Recognized as Africa's leading spine health advocate" },
];

const credentials = [
  { icon: GraduationCap, title: "Doctor of Chiropractic", subtitle: "International Chiropractic Institute" },
  { icon: Award, title: "Board Certified Chiropractor", subtitle: "African Chiropractic Board" },
  { icon: Globe, title: "International Speaker", subtitle: "20+ Healthcare Conferences" },
  { icon: Users, title: "Healthcare Leader", subtitle: "Ethiopia Medical Association" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 block">
              About Dr. Selam Aklilu
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              A Pioneer in<br />
              <span className="italic">African Healthcare</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              The story of a woman who returned home to revolutionize spine health across an entire continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Her Story */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
                Her Story
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                From Addis Ababa to the World — and Back
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Selam Aklilu grew up in Addis Ababa with a deep passion for health and human
                  wellbeing. Witnessing family members suffer from chronic back pain and receiving
                  inadequate care sparked in her a lifelong mission to bring better treatment options
                  to her community.
                </p>
                <p>
                  She pursued advanced education in chiropractic sciences internationally, immersing
                  herself in the most modern techniques in spinal manipulation, rehabilitation therapy,
                  and holistic wellness. With distinction, she earned her doctorate and gained extensive
                  clinical experience abroad.
                </p>
                <p>
                  But her heart never left Ethiopia. In 2010, she returned to Addis Ababa and founded
                  1st Spine Clinics — the first professional chiropractic clinic in the country. What
                  began as a single practice has grown into a movement transforming how Ethiopians
                  understand and care for their spinal health.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpDelay(0.2)}
            >
              <img
                src={drSelamHero}
                alt="Dr. Selam Aklilu"
                className="rounded-2xl shadow-elegant w-full h-[540px] object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Education & Credentials
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {credentials.map((c) => (
              <motion.div
                key={c.title}
                className="bg-card rounded-2xl p-6 text-center card-hover"
                variants={staggerItem}
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Building a Movement */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <img
                src={clinicInterior}
                alt="1st Spine Clinics"
                className="rounded-2xl shadow-elegant w-full h-[420px] object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpDelay(0.15)}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
                Building a Healthcare Movement
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Founding 1st Spine Clinics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                She founded 1st Spine Clinics to provide professional chiropractic services and increase
                awareness about spinal health. The clinic quickly became renowned for its evidence-based
                approach, compassionate care, and commitment to patient education.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, 1st Spine Clinics operates multiple locations in Addis Ababa, serving thousands
                of patients each year and training the next generation of spine health professionals.
              </p>
              <Button asChild>
                <Link to="/services" className="gap-2">
                  Explore Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Journey of Excellence
            </h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpDelay(i * 0.08)}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-xl p-5 shadow-card border border-border">
                      <span className="text-primary font-bold text-lg font-serif">{m.year}</span>
                      <p className="text-muted-foreground text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-surface shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="relative z-10 container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3 block">
                Leadership in Healthcare
              </span>
              <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-6">
                Expanding Access to Chiropractic Care
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Through education and professional initiatives, Dr. Selam continues to expand access
                to chiropractic care and wellness education. She advocates for the integration of
                chiropractic services into mainstream healthcare across Africa.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Her work has inspired a new generation of healthcare professionals across the continent,
                and she continues to mentor and train practitioners committed to spine health excellence.
              </p>
              <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">Work with Dr. Selam</Link>
              </Button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpDelay(0.2)}
            >
              <img
                src={speakingConference}
                alt="Dr. Selam speaking at a healthcare conference"
                className="rounded-2xl shadow-elegant w-full h-[420px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
