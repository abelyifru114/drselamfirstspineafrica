import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, BookOpen, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import chiroTreatment from "@/assets/chiro-treatment.jpg";
import postureEducation from "@/assets/posture-education.jpg";
import spineAnatomy from "@/assets/spine-anatomy.jpg";
import rehabilitation from "@/assets/rehabilitation.jpg";

const articles = [
  { slug: "causes-of-back-pain", title: "Causes of Back Pain", excerpt: "Understanding the common and less common causes of back pain to help you take action early and prevent chronic conditions.", readTime: "5 min read", category: "Spine Basics", image: chiroTreatment },
  { slug: "fix-poor-posture", title: "How to Fix Poor Posture", excerpt: "A practical guide to identifying postural imbalances and correcting them with exercises and lifestyle adjustments.", readTime: "7 min read", category: "Posture", image: postureEducation },
  { slug: "best-sleeping-positions", title: "Best Sleeping Positions for Spine Health", excerpt: "Learn which sleeping positions support your spine and which ones may be contributing to your morning aches.", readTime: "4 min read", category: "Wellness", image: spineAnatomy },
  { slug: "neck-pain-phone-usage", title: "Neck Pain From Phone Usage", excerpt: "Tech neck is a growing epidemic. Discover how to protect your cervical spine while using smartphones and devices.", readTime: "5 min read", category: "Prevention", image: rehabilitation },
  { slug: "exercises-healthy-spine", title: "Exercises for a Healthy Spine", excerpt: "A curated set of safe, effective exercises recommended by Dr. Selam to strengthen your back and improve flexibility.", readTime: "8 min read", category: "Exercise", image: chiroTreatment },
  { slug: "sciatica-treatment", title: "Sciatica Treatment Options", excerpt: "From conservative chiropractic care to rehabilitation therapy — everything you need to know about treating sciatica.", readTime: "6 min read", category: "Conditions", image: postureEducation },
  { slug: "office-worker-spine-health", title: "Spinal Health for Office Workers", excerpt: "If you spend 8+ hours at a desk, this guide is essential. Learn ergonomic strategies to protect your spine at work.", readTime: "7 min read", category: "Workplace", image: spineAnatomy },
  { slug: "prevent-chronic-back-pain", title: "How to Prevent Chronic Back Pain", excerpt: "Prevention is always better than cure. Dr. Selam shares her top evidence-based strategies for avoiding long-term back pain.", readTime: "6 min read", category: "Prevention", image: rehabilitation },
];

const categories = ["All Topics", "Spine Basics", "Posture", "Wellness", "Prevention", "Exercise", "Conditions", "Workplace"];

export default function SpineHealthLibrary() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 block">
              Free Knowledge Base
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Spine Health Library
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Expert-written guides and articles by Dr. Selam Aklilu on spinal health, prevention, and wellness.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles… e.g. back pain, posture, sciatica"
                className="pl-12 pr-4 py-6 text-base rounded-xl bg-card border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-card border-b border-border sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-2xl font-bold text-foreground">{articles.length} Articles</h2>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {articles.map((article) => (
              <motion.div
                key={article.slug}
                className="bg-card rounded-2xl overflow-hidden card-hover group border border-border"
                variants={staggerItem}
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                  <button className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="relative z-10 container-max text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <BookOpen className="w-12 h-12 text-primary-foreground mx-auto mb-4 opacity-80" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Want Personalized Spine Advice?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Schedule a consultation with Dr. Selam and receive a personalized spine health assessment.
            </p>
            <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
