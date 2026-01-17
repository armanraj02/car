"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getBasePath } from "@/lib/utils";
import { Zap } from "lucide-react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or listen to window load event
        // Since we're in Next.js, we can just use a timer for the effect
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${getBasePath('/images/intro_bg.jpg')})` }}
                    />
                    {/* Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="relative flex flex-col items-center z-10">
                        {/* Progress Bar / Line */}
                        <div className="w-64 h-[1px] bg-white/20 overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-70 w-1/2"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-xs text-gray-400 uppercase tracking-[0.3em]"
                        >
                            Initializing Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
