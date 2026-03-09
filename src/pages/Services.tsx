import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Activity, Brain, Heart, Building2, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, fadeUpDelay, staggerContainer, staggerItem } from "@/lib/animations";
import chiroTreatment from "@/assets/chiro-treatment.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import postureEducation from "@/assets/posture-education.jpg";
import rehabilitation from "@/assets/rehabilitation.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "Chiropractic Adjustments",
    desc: "Manual spinal manipulation and adjustment to restore proper alignment, reduce nerve pressure, and relieve pain.",
    benefits: ["Relieves back and neck pain", "Restores range of motion", "Reduces nerve pressure", "Improves spinal alignment"],
    image: chiroTreatment,
  },
  {
    icon: Activity,
    title: "Posture Correction",
    desc: "Comprehensive assessment and tailored programs to correct postural imbalances and prevent future spinal problems.",
    benefits: ["Identifies postural imbalances", "Corrective exercise programs", "Ergonomic guidance", "Long-term prevention"],
    image: postureEducation,
  },
  {
    icon: Brain,
    title: "Back & Neck Pain Treatment",
    desc: "Specialized diagnosis and evidence-based treatment for acute and chronic back and neck pain conditions.",
    benefits: ["Herniated disc treatment", "Cervical spine care", "Lumbar pain management", "Non-invasive approach"],
    image: chiroTreatment,
  },
  {
    icon: Heart,
    title: "Rehabilitation Therapy",
    desc: "Exercise-based rehabilitation programs designed to strengthen the spine and restore full mobility after injury.",
    benefits: ["Customized exercise plans", "Injury recovery", "Strength building", "Functional movement restoration"],
    image: rehabilitation,
  },
  {
    icon: Building2,
    title: "Corporate Wellness Programs",
    desc: "On-site and clinic-based spine health programs for companies to reduce workplace injuries and improve employee wellness.",
    benefits: ["Workplace ergonomics training", "Group wellness sessions", "Injury prevention", "Employee health screenings"],
    image: clinicInterior,
  },
  {
    icon: GraduationCap,
    title: "Spine Health Education",
    desc: "Community workshops, seminars, and educational resources to empower individuals with knowledge about spinal health.",
    benefits: ["Prevention education", "Community workshops", "School programs", "Corporate seminars"],
    image: postureEducation,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 block">
              Clinics & Services
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Comprehensive<br />
              <span className="italic">Spine Care</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Evidence-based chiropractic treatments and wellness programs delivered with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link to="/contact" className="gap-2">
                      Book This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <motion.div
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpDelay(0.2)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-elegant w-full h-[380px] object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="relative z-10 container-max text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Book a consultation today and let Dr. Selam create a personalized treatment plan for you.
            </p>
            <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
