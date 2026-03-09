import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mic, Tv, Newspaper, Video, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, fadeUpDelay, staggerContainer, staggerItem } from "@/lib/animations";
import speakingConference from "@/assets/speaking-conference.jpg";
import postureEducation from "@/assets/posture-education.jpg";
import chiroTreatment from "@/assets/chiro-treatment.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const mediaItems = [
  { type: "Conference", title: "Africa Healthcare Summit 2023", outlet: "Addis Ababa Convention Center", date: "October 2023", image: speakingConference },
  { type: "TV Interview", title: "Spine Health & Prevention", outlet: "EBC Health Network", date: "August 2023", image: postureEducation },
  { type: "Panel Discussion", title: "Future of Healthcare in Africa", outlet: "Pan-African Medical Forum", date: "June 2023", image: chiroTreatment },
  { type: "Workshop", title: "Back Pain Awareness Campaign", outlet: "Addis Ababa University", date: "April 2023", image: clinicInterior },
  { type: "Conference", title: "WHO African Region Meeting", outlet: "Geneva, Switzerland", date: "March 2023", image: speakingConference },
  { type: "Podcast", title: "Spine Health for Modern Africa", outlet: "African Health Podcast", date: "February 2023", image: postureEducation },
];

const speakingTopics = [
  { icon: Mic, title: "Spinal Health & Prevention", desc: "Evidence-based insights on preventing back pain and maintaining spinal wellness for all ages." },
  { icon: Tv, title: "Chiropractic Care in Africa", desc: "The role of chiropractic medicine in modern African healthcare systems and its growing importance." },
  { icon: Newspaper, title: "Corporate Wellness", desc: "How organizations can reduce workplace injuries and improve productivity through spine health programs." },
  { icon: Video, title: "Holistic Healthcare", desc: "Integrating chiropractic care with conventional medicine for comprehensive patient outcomes." },
];

export default function Media() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 block">
                Media & Speaking
              </span>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Africa's Voice<br />
                <span className="italic">in Spine Health</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Dr. Selam is a sought-after speaker and media contributor on spinal health, healthcare innovation, and wellness education across Africa and beyond.
              </p>
              <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">Invite Dr. Selam to Speak</Link>
              </Button>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeUpDelay(0.2)}>
              <img
                src={speakingConference}
                alt="Dr. Selam speaking at conference"
                className="rounded-2xl shadow-elegant w-full h-[420px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[{ v: "20+", l: "Conferences" }, { v: "30+", l: "TV Appearances" }, { v: "5+", l: "Countries" }, { v: "10+", l: "Publications" }].map((s) => (
              <div key={s.l} className="px-8 py-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary">{s.v}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-3">Media Appearances</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Recent conferences, interviews, and speaking engagements by Dr. Selam.</p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mediaItems.map((item) => (
              <motion.div key={item.title} className="bg-card rounded-2xl overflow-hidden card-hover group border border-border" variants={staggerItem}>
                <div className="relative overflow-hidden h-52">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.outlet}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Book Dr. Selam</span>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-3">Speaking Topics</h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {speakingTopics.map((topic) => (
              <motion.div key={topic.title} className="bg-card rounded-2xl p-7 flex gap-5 card-hover border border-border" variants={staggerItem}>
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/contact" className="gap-2">
                Invite Dr. Selam to Your Event <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
