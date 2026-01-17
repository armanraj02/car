"use client";
import React from "react";
import { motion } from "framer-motion";

interface EngineBlueprintProps {
    image?: string;
    title: string;
    description: string;
}

export default function EngineBlueprint({ image, title, description }: EngineBlueprintProps) {
    return (
        <div className="relative w-full h-full bg-black overflow-hidden flex flex-col p-8">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
            />

            {/* Header Content */}
            <div className="relative z-10 mb-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px] bg-blue-500"></div>
                    <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase">Engineering</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
                    {description}
                </p>
            </div>

            {/* Central Graphical Element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-48 h-48 rounded-full border border-white/5 flex items-center justify-center overflow-hidden">
                    {/* Car Image in Center */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-700"
                        style={{ backgroundImage: `url(${image || '/images/porsche/1.jpg'})` }}
                    />
                    <div className="absolute inset-0 bg-black/40" /> {/* Dimmer */}

                    {/* Pulsing Outer Ring */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full border border-blue-900/40"
                    />

                    {/* Rotating Dashed Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-10px] rounded-full border border-dashed border-white/10"
                    />

                    {/* Inner Content */}
                    <div className="text-center z-10 bg-black/60 backdrop-blur-md p-4 rounded-full border border-white/10">
                        <span className="block text-4xl font-bold text-white/90 tracking-tighter">3.8L</span>
                        <span className="block text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-1">Twin-Turbo</span>
                    </div>
                </div>
            </div>

            {/* Bottom Right detail */}
            <div className="absolute bottom-6 right-6 z-10">
                <span className="text-[10px] text-white/20 font-mono tracking-widest">FIG 911-S</span>
            </div>
        </div>
    );
}
