import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, fadeUpDelay } from "@/lib/animations";

const services = [
  "Chiropractic Adjustments",
  "Posture Correction",
  "Back & Neck Pain Treatment",
  "Rehabilitation Therapy",
  "Corporate Wellness",
  "General Consultation",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Book an Appointment
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Take the first step toward better spine health. Our team is ready to help you start your journey to a pain-free life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Clinic Information</h2>
              </div>
              {[
                { icon: MapPin, label: "Address", value: "Bole Road, Near Edna Mall\nAddis Ababa, Ethiopia" },
                { icon: Phone, label: "Phone", value: "+251 911 000 000\n+251 116 000 000" },
                { icon: Mail, label: "Email", value: "info@1stspineclinics.com\nappointments@1stspineclinics.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="text-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="p-5 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Clinic Hours</p>
                    <div className="space-y-1 text-sm text-foreground">
                      <p className="flex justify-between gap-8"><span>Monday – Friday</span><span className="text-muted-foreground">8:00 AM – 6:00 PM</span></p>
                      <p className="flex justify-between gap-8"><span>Saturday</span><span className="text-muted-foreground">9:00 AM – 2:00 PM</span></p>
                      <p className="flex justify-between gap-8"><span>Sunday</span><span className="text-muted-foreground">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpDelay(0.15)}
            >
              <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-card">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Appointment Request Received!</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      Thank you for reaching out. Dr. Selam's team will contact you within 24 hours to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Request an Appointment</h2>
                    <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Full Name *</label>
                          <Input
                            required
                            placeholder="Your full name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Email Address *</label>
                          <Input
                            required
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Phone Number</label>
                          <Input
                            placeholder="+251 9XX XXX XXX"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Service Needed</label>
                          <select
                            className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground block mb-2">Tell us about your condition</label>
                        <Textarea
                          placeholder="Describe your symptoms, pain location, and how long you've been experiencing it…"
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="bg-background resize-none"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full gap-2">
                        <Send className="w-4 h-4" />
                        Send Appointment Request
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-card border-t border-border">
        <div className="container-max py-8">
          <div className="rounded-2xl overflow-hidden h-80 bg-muted flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold text-foreground mb-1">1st Spine Clinics</p>
              <p className="text-muted-foreground text-sm">Bole Road, Addis Ababa, Ethiopia</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3 hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
