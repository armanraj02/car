import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getBasePath } from "@/lib/utils";
import { X, ArrowDown } from "lucide-react";

interface ExperienceOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const experiences = [
    {
        image: getBasePath("/images/experience/exp1.jpg"),
        title: "The Porsche Center",
        subtitle: "Architecture of Dreams",
        description: "Step into a world where design meets performance. Our Porsche Centers are more than just showrooms; they are galleries dedicated to the art of the sports car."
    },
    {
        image: getBasePath("/images/experience/exp2.jpg"),
        title: "Personal Commissioning",
        subtitle: "Your Vision, Realized",
        description: "In our Exclusive Manufaktur lounges, consult with design experts to tailor every detail of your Porsche. From custom paint to bespoke leather, the only limit is your imagination."
    }
];

export default function ExperienceOverlay({ isOpen, onClose }: ExperienceOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[150] bg-black text-white"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-8 right-8 z-[160] p-3 bg-black/50 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md border border-white/10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Vertical Scroll Snap Container */}
                    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
                        {experiences.map((exp, index) => (
                            <section
                                key={index}
                                className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
                                    style={{ backgroundImage: `url(${exp.image})` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="relative z-10 max-w-4xl px-6 text-center"
                                >
                                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs uppercase tracking-[0.2em] mb-6 bg-white/10 backdrop-blur-md">
                                        Experience
                                    </span>
                                    <h2 className="text-5xl md:text-8xl font-bold mb-4 tracking-tight drop-shadow-2xl">
                                        {exp.title}
                                    </h2>
                                    <h3 className="text-xl md:text-2xl text-blue-400 font-light uppercase tracking-widest mb-8">
                                        {exp.subtitle}
                                    </h3>
                                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                                        {exp.description}
                                    </p>
                                </motion.div>

                                {/* Scroll Indicator (only for first item) */}
                                {index === 0 && (
                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                                    >
                                        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                                        <ArrowDown className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </section>
                        ))}

                        {/* Final CTA Section */}
                        {/* Final CTA Section - Redesigned */}
                        <section className="relative h-screen w-full snap-start flex flex-col md:flex-row">
                            {/* Left Side - Text */}
                            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-12 md:px-24 bg-neutral-900 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent" />

                                <span className="text-blue-500 font-medium tracking-widest uppercase mb-6 text-sm">
                                    Global Network
                                </span>
                                <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                    Visit a <br />
                                    <span className="text-gray-500">Center.</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md border-l border-white/10 pl-6">
                                    Immerse yourself in the brand at one of our global destinations. Experience the heritage, the engineering, and the future of sportscars in person.
                                </p>
                            </div>

                            {/* Right Side - Visual */}
                            <div className="w-full md:w-1/2 h-full bg-black relative overflow-hidden group">
                                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${getBasePath('/images/experience/porsche_center_event.jpg')})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

                                <div className="absolute bottom-12 right-12 text-right">
                                    <h3 className="text-8xl font-black text-white/5 uppercase select-none">
                                        Porsche
                                    </h3>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
