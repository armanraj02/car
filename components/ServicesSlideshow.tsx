import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ServicesSlideshowProps {
    isOpen: boolean;
    onClose: () => void;
}

const services = [
    {
        image: "/images/services/service1.jpg",
        title: "Global Reach",
        description: "Experience Porsche service standards at our premier locations worldwide."
    },
    {
        image: "/images/services/service2.jpg",
        title: "Master Technicians",
        description: "Your vehicle verified by certified experts using state-of-the-art diagnostics."
    },
    {
        image: "/images/services/service3.jpg",
        title: "Dedicated Care",
        description: "From routine maintenance to complex repairs, we ensure perfection."
    }
];

export default function ServicesSlideshow({ isOpen, onClose }: ServicesSlideshowProps) {
    // Lock body scroll when open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-black text-white"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-8 right-8 z-[110] p-3 bg-black/50 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md border border-white/10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Vertical Scroll Snap Container */}
                    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
                        {services.map((service, index) => (
                            <section
                                key={index}
                                className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
                            >
                                {/* Background Image with Slow Zoom */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        whileInView={{ scale: 1.1 }}
                                        transition={{ duration: 10, ease: "linear" }}
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                                {/* Progress Rail (Right Side) */}
                                <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 hidden md:flex">
                                    {services.map((_, idx) => (
                                        <div key={idx} className={`w-1 transition-all duration-500 rounded-full ${idx === index ? 'h-16 bg-blue-500' : 'h-2 bg-white/20'}`} />
                                    ))}
                                    <span className="text-[10px] text-white/40 font-mono rotate-90 mt-4 tracking-widest">
                                        0{index + 1} / 0{services.length}
                                    </span>
                                </div>

                                {/* Content - Glass Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative z-10 max-w-2xl mx-6 md:ml-32 md:mr-auto p-12 bg-black/20 backdrop-blur-xl border border-white/10 rounded-sm"
                                >
                                    {/* Decorative Line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 64 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="h-[2px] bg-blue-500 mb-8"
                                    />

                                    <div className="overflow-hidden mb-4">
                                        <motion.div
                                            initial={{ y: "100%" }}
                                            whileInView={{ y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="text-white/60 font-mono text-sm tracking-widest uppercase"
                                        >
                                            Service Collection 0{index + 1}
                                        </motion.div>
                                    </div>

                                    <div className="overflow-hidden mb-8">
                                        <motion.h2
                                            initial={{ y: "100%" }}
                                            whileInView={{ y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                                        >
                                            {service.title}
                                        </motion.h2>
                                    </div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                        className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-10 border-l border-white/20 pl-6"
                                    >
                                        {service.description}
                                    </motion.p>

                                    <motion.button
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        className="text-sm font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors flex items-center gap-3 group"
                                    >
                                        Discover More
                                        <span className="w-8 h-[1px] bg-white/50 group-hover:bg-blue-400 group-hover:w-16 transition-all duration-300" />
                                    </motion.button>
                                </motion.div>
                            </section>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
