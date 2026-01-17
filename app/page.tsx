"use client";
import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductBottleScroll from "../components/ProductBottleScroll";
import ProductTextOverlays from "../components/ProductTextOverlays";
import Preloader from "../components/Preloader";
import ServicesSlideshow from "../components/ServicesSlideshow";
import ExperienceOverlay from "../components/ExperienceOverlay";
import MenuDrawer from "../components/MenuDrawer";
import EngineBlueprint from "../components/EngineBlueprint";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Gauge, Timer, Zap } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const product = products[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const nextProduct = () => {
    if (products.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }
  };

  const handleProductSelect = (index: number) => {
    setCurrentIndex(index);
    setIsMenuOpen(false);
  };

  return (
    <main className="relative bg-black min-h-screen">
      {/* Global Background Image (Dimmed) */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/images/intro_bg.jpg)' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/50 via-black/80 to-black pointer-events-none" />

      <Preloader />
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />

      <ServicesSlideshow
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
      />

      <ExperienceOverlay
        isOpen={isExperienceOpen}
        onClose={() => setIsExperienceOpen(false)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        products={products}
        onSelectProduct={handleProductSelect}
        onServicesClick={() => {
          setIsMenuOpen(false);
          setIsServicesOpen(true);
        }}
        onExperienceClick={() => {
          setIsMenuOpen(false);
          setIsExperienceOpen(true);
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Scroll Experience */}
          <div className="relative z-0">
            <ProductTextOverlays product={product} />
            <ProductBottleScroll product={product} />
          </div>

          {/* Content Sections */}
          <div className="relative z-10">

            {/* Product Details - Bento Grid Refactor */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                {/* Section Header */}
                <div className="max-w-3xl">
                  <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-600 mb-6 tracking-tight">
                    {product.detailsSection.title}
                  </h2>
                  <p className="text-gray-400 text-xl leading-relaxed font-light tracking-wide">
                    {product.detailsSection.description}
                  </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                  {/* Large Card - Engine */}
                  <div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                    <EngineBlueprint
                      image={product.heroImage}
                      title={product.section2.title}
                      description={product.section2.subtitle}
                    />
                  </div>

                  {/* Tall Card - Stats */}
                  <div className="md:col-span-1 grid grid-rows-3 gap-6">
                    <BentoStat
                      icon={<Zap className="w-6 h-6 text-yellow-400" />}
                      label="Power Output"
                      value={product.stats[0].val}
                      desc="At 6,750 RPM"
                    />
                    <BentoStat
                      icon={<Timer className="w-6 h-6 text-blue-400" />}
                      label="Acceleration"
                      value={product.stats[1].val}
                      desc="0 - 60 mph"
                    />
                    <BentoStat
                      icon={<Gauge className="w-6 h-6 text-red-500" />}
                      label="Top Speed"
                      value={product.stats[2].val}
                      desc="Track Limits"
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Craftsmanship Section */}
            <section className="py-32 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.1),transparent_50%)]" />
              <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase text-gray-300">
                    Atelier
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {product.freshnessSection.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {product.freshnessSection.description}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  {/* Abstract Visualization */}
                  <div className="aspect-video rounded-3xl bg-neutral-900 border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="space-y-2 text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Master Technician</div>
                        <div className="text-5xl font-serif italic text-white/20">Signature</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Buy / Reserve Section */}
            <section id="buy-section" className="py-32 px-6 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-neutral-900 to-black rounded-[3rem] p-8 md:p-16 overflow-hidden relative border border-white/10 group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-colors duration-700" />

                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
                  <div className="space-y-10 max-w-2xl">
                    <div>
                      <div className="text-blue-400 font-medium mb-4 tracking-wide uppercase text-sm">Configurable Allocation</div>
                      <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                        {product.price}
                      </h2>
                      <p className="text-xl text-gray-400 font-light">{product.buyNowSection.unit} - Base Configuration</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {product.buyNowSection.processingParams.map((item, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm flex items-center gap-2">
                          <Check className="w-3 h-3 text-blue-400" /> {item}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-gray-500 max-w-md border-l-2 border-white/10 pl-4 py-1">
                      {product.buyNowSection.deliveryPromise}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6 w-full lg:w-auto">
                    <button className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-white text-black rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                      <span className="relative z-10 font-bold text-lg tracking-wide uppercase">Reserve Allocation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => alert("Connecting you to a specialist...")}
                      className="px-10 py-5 rounded-2xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors uppercase tracking-wide text-sm"
                    >
                      Contact Specialist
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Next Car Button */}
            <div className="pb-32 flex justify-center">
              <button
                onClick={nextProduct}
                className="group flex flex-col items-center gap-4 text-gray-500 hover:text-white transition-colors"
              >
                <span className="text-sm uppercase tracking-[0.3em]">Continue Journey</span>
                <ChevronRight className="w-8 h-8 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

function BentoStat({ icon, label, value, desc }: { icon: React.ReactNode, label: string, value: string, desc: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between group">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors duration-500" />

      {/* Gradient Blob on Hover */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex justify-between items-start">
        <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">{label}</div>
        <div className="p-2 bg-white/5 rounded-full ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">{icon}</div>
      </div>
      <div className="relative z-10">
        <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-blue-400 transition-colors">{value}</div>
        <div className="text-gray-500 text-xs font-medium">{desc}</div>
      </div>
    </div>
  );
}
