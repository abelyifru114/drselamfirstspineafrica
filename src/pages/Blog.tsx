import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import chiroTreatment from "@/assets/chiro-treatment.jpg";
import postureEducation from "@/assets/posture-education.jpg";
import spineAnatomy from "@/assets/spine-anatomy.jpg";
import rehabilitation from "@/assets/rehabilitation.jpg";

const featuredPost = {
  title: "1 Minute Spine Tips That Will Change Your Life",
  excerpt: "Small daily habits have the biggest impact on your spinal health. In this article, Dr. Selam shares her top micro-habits that take less than one minute but can prevent years of back pain.",
  category: "Spine Health Tips",
  readTime: "5 min read",
  date: "January 15, 2024",
  image: chiroTreatment,
};

const posts = [
  { title: "How to Set Up a Healthy Desk Workspace", excerpt: "Your desk setup is either protecting your spine or destroying it. Here's the ergonomic guide Dr. Selam recommends for every office worker.", category: "Posture Correction", readTime: "6 min read", date: "January 10, 2024", image: postureEducation },
  { title: "5 Simple Stretches to Relieve Back Pain", excerpt: "These five evidence-based stretches can be done anywhere, anytime, to immediately reduce back pain and tension.", category: "Spine Health Tips", readTime: "4 min read", date: "January 5, 2024", image: rehabilitation },
  { title: "Travel Tips for Spine Health on Long Flights", excerpt: "Long flights are brutal on your spine. Dr. Selam shares how to sit, move, and recover to avoid travel-induced back pain.", category: "Wellness Lifestyle", readTime: "5 min read", date: "December 28, 2023", image: spineAnatomy },
  { title: "Understanding Your Sciatica: A Patient Guide", excerpt: "Sciatica is one of the most misunderstood spine conditions. This comprehensive guide explains what it is, why it happens, and how to treat it.", category: "Patient Education", readTime: "8 min read", date: "December 20, 2023", image: chiroTreatment },
  { title: "The Hidden Link Between Stress and Back Pain", excerpt: "Did you know stress is one of the leading causes of back pain? Dr. Selam explains the mind-body connection and what you can do about it.", category: "Medical Insights", readTime: "6 min read", date: "December 15, 2023", image: postureEducation },
  { title: "Why Children Need Spinal Health Awareness", excerpt: "Spinal problems don't only affect adults. Heavy school bags and poor posture habits in childhood can lead to lifelong issues.", category: "Patient Education", readTime: "5 min read", date: "December 10, 2023", image: rehabilitation },
];

const categories = ["All", "Spine Health Tips", "Posture Correction", "Wellness Lifestyle", "Patient Education", "Medical Insights"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 block">
              Expert Knowledge
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Health Insights
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Practical spine health advice, wellness tips, and medical insights from Dr. Selam Aklilu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-card border-b border-border sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button key={cat} className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl overflow-hidden border border-border shadow-card mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="h-72 lg:h-full min-h-[380px]">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <Tag className="w-3 h-3" />
                {featuredPost.category}
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredPost.readTime}</span>
                <span>{featuredPost.date}</span>
              </div>
              <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {posts.map((post) => (
              <motion.div key={post.title} className="bg-card rounded-2xl overflow-hidden card-hover group border border-border" variants={staggerItem}>
                <div className="relative overflow-hidden h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <button className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="relative z-10 container-max text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Get Weekly Spine Health Tips
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Subscribe to Dr. Selam's newsletter and receive expert advice directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-xl bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-xl hover:bg-primary-foreground/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
