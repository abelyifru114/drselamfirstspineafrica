import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Award,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  Stethoscope,
  Activity,
  Brain,
  Heart,
  Building2,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drSelamHero from "@/assets/dr-selam-hero.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import chiroTreatment from "@/assets/chiro-treatment.jpg";
import speakingConference from "@/assets/speaking-conference.jpg";
import postureEducation from "@/assets/posture-education.jpg";
import spineAnatomy from "@/assets/spine-anatomy.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const stats = [
  { value: "10,000+", label: "Patients Treated" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Media Appearances" },
  { value: "3", label: "Clinic Locations" },
];

const services = [
  {
    icon: Stethoscope,
    title: "Chiropractic Adjustments",
    desc: "Spinal alignment treatments to restore mobility and reduce pain.",
  },
  {
    icon: Activity,
    title: "Posture Correction",
    desc: "Programs designed to improve posture and prevent spinal problems.",
  },
  {
    icon: Brain,
    title: "Back & Neck Pain Treatment",
    desc: "Specialized care for chronic pain and mobility challenges.",
  },
  {
    icon: Heart,
    title: "Rehabilitation Therapy",
    desc: "Exercise-based recovery and spine strengthening programs.",
  },
  {
    icon: Building2,
    title: "Corporate Wellness Programs",
    desc: "Spine health training for companies and organizations.",
  },
  {
    icon: GraduationCap,
    title: "Health Education",
    desc: "Community workshops and seminars on spinal health awareness.",
  },
];

const testimonials = [
  {
    name: "Tigist Haile",
    role: "Office Professional, Addis Ababa",
    text: "After years of chronic back pain, Dr. Selam's treatments completely changed my life. I can now work and live without daily pain.",
    rating: 5,
  },
  {
    name: "Dawit Tesfaye",
    role: "Engineer",
    text: "Dr. Selam is not just a chiropractor — she is a healer. Her expertise and care are unmatched anywhere in Africa.",
    rating: 5,
  },
  {
    name: "Meron Bekele",
    role: "Teacher",
    text: "I was skeptical about chiropractic care, but after just a few sessions with Dr. Selam, my neck pain disappeared completely.",
    rating: 5,
  },
  {
    name: "Samuel Girma",
    role: "Athlete",
    text: "The posture correction program helped me recover from a sports injury faster than I ever expected. Truly exceptional care.",
    rating: 5,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 hero-bg opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(210_65%_55%_/_0.3),_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-flex items-center gap-2 bg-primary-foreground/15 border border-primary-foreground/20 text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Award className="w-3.5 h-3.5" />
                Africa's Leading Spine Health Expert
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              Dr. Selam<br />
              <span className="italic">Aklilu</span>
            </motion.h1>

            <motion.p
              className="text-xl text-primary-foreground/80 leading-relaxed mb-4 font-medium"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              Pioneering Spine Health & Holistic Wellness in Africa
            </motion.p>

            <motion.p
              className="text-base text-primary-foreground/70 leading-relaxed mb-10 max-w-lg"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
            >
              Founder of 1st Spine Clinics and advocate for advanced chiropractic care
              helping thousands live healthier lives through spinal wellness.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
            >
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Health Tips
              </Button>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            className="relative hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary-foreground/10 blur-3xl scale-110" />
              <img
                src={drSelamHero}
                alt="Dr. Selam Aklilu - Chiropractor Ethiopia"
                className="relative w-[460px] h-[540px] object-cover object-top rounded-3xl shadow-elegant"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-8 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Certified</p>
                  <p className="text-sm font-bold text-foreground">Spine Specialist</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-6 bg-card rounded-2xl shadow-card p-4">
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-xs text-muted-foreground">Patients Healed</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-card/90 backdrop-blur-md rounded-t-2xl shadow-elegant grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {stats.map((s, i) => (
                <div key={i} className="px-8 py-5 text-center">
                  <p className="text-2xl font-bold text-primary font-serif">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
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
                About Dr. Selam
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Leading Spine Care Expert in Ethiopia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Selam Aklilu is a pioneering chiropractor dedicated to transforming spine health
                and wellness in Ethiopia and across Africa. With extensive international training and
                decades of experience, she has introduced modern chiropractic care and holistic
                wellness practices that help patients overcome chronic pain.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Through her leadership and commitment to healthcare education, she continues to raise
                awareness about spinal health and preventive care, positioning 1st Spine Clinics as
                the premier destination for chiropractic excellence in East Africa.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link to="/about" className="gap-2">
                    Meet Dr. Selam <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={clinicInterior}
                alt="1st Spine Clinics Ethiopia"
                className="rounded-2xl shadow-elegant w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elegant hidden md:block">
                <p className="font-serif text-3xl font-bold">15+</p>
                <p className="text-sm text-primary-foreground/80 mt-1">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={postureEducation}
                alt="Dr. Selam teaching posture"
                className="rounded-2xl shadow-elegant w-full h-[480px] object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
                Our Mission
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Transforming Health Through Spine Care
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Selam believes that a healthy spine is the foundation of overall wellbeing.
                Her mission is to educate communities about spinal health while providing safe,
                non-invasive treatment for pain and mobility challenges.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Preventing chronic back pain",
                  "Improving posture and alignment",
                  "Promoting holistic wellness",
                  "Expanding chiropractic care in Africa",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <ChevronRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              What We Offer
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Specialized Spine & Wellness Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive chiropractic care and wellness programs tailored to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-background border border-border rounded-2xl p-7 card-hover cursor-pointer group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services" className="gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3 block">
                Health Education
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                Learn How to Protect Your Spine
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Dr. Selam is passionate about educating people on how to prevent spinal injuries
                and maintain long-term health. Through articles, videos, and community workshops,
                she shares practical advice that empowers people to take control of their wellbeing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link to="/spine-health-library">Read Health Tips</Link>
                </Button>
                <Button variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Videos
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={spineAnatomy}
                alt="Spine anatomy illustration"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={speakingConference}
                alt="Dr. Selam speaking at conference"
                className="rounded-2xl shadow-elegant w-full h-[420px] object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
                Media & Speaking
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Media, Interviews & Speaking
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dr. Selam Aklilu is regularly invited to share her expertise on spinal health,
                healthcare innovation, and wellness education. She has spoken at conferences,
                health forums, and professional medical discussions across Africa.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Conferences", value: "20+" },
                  { label: "TV Appearances", value: "30+" },
                  { label: "Countries", value: "5+" },
                  { label: "Publications", value: "10+" },
                ].map((item) => (
                  <div key={item.label} className="bg-accent rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary font-serif">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/media" className="gap-2">
                  View Media Gallery <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Patient Stories
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Changing Lives Through Spine Health
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thousands of patients have experienced relief from chronic pain and improved mobility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-card border border-border rounded-2xl p-8 card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210_65%_55%_/_0.2),_transparent_70%)]" />
        <div className="relative z-10 container-max text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Take the First Step Toward<br />
              <span className="italic">Better Spine Health</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Book an appointment today and start your journey toward a healthier, pain-free life
              with Ethiopia's leading chiropractor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-6 text-lg">
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                <Link to="/contact">Contact Clinic</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
