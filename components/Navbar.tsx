"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, User } from "lucide-react";


export default function Navbar({ onMenuOpen }: { onMenuOpen: () => void }) {
    const [hidden, setHidden] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 backdrop-blur-xl border-b border-white/10 transition-colors duration-300"
        >
            {/* Left: Menu Option */}
            <button
                onClick={onMenuOpen}
                className="p-2 rounded-full hover:bg-white/10 transition-colors group"
            >
                <Menu className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </button>

            {/* Right: Account Action */}
            <div className="relative">
                <button
                    onClick={() => setIsAccountOpen(!isAccountOpen)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors group relative z-50"
                >
                    <User className={`w-6 h-6 transition-colors ${isAccountOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`} />
                </button>

                {/* Account Dropdown */}
                <AnimatePresence>
                    {isAccountOpen && (
                        <>
                            {/* Backdrop to close on click outside */}
                            <div
                                className="fixed inset-0 z-40 cursor-default"
                                onClick={() => setIsAccountOpen(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 top-full mt-2 w-56 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 p-1"
                            >
                                <div className="px-4 py-3 border-b border-white/10 mb-1">
                                    <p className="text-sm text-white font-medium">Welcome Back</p>
                                    <p className="text-xs text-gray-400">porsche_lover@example.com</p>
                                </div>
                                <div className="space-y-0.5">
                                    {['My Garage', 'Saved Configs', 'Account Settings'].map((item) => (
                                        <button
                                            key={item}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            onClick={() => setIsAccountOpen(false)}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-1 pt-1 border-t border-white/10">
                                    <button
                                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                        onClick={() => setIsAccountOpen(false)}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
