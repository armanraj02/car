"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, User } from "lucide-react";
import Link from "next/link";

import { Product } from "@/data/products";

interface MenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    products: Product[];
    onSelectProduct: (index: number) => void;
    onServicesClick?: () => void;
    onExperienceClick?: () => void;
}

const navLinks = [
    "Models",
    "Services",
    "Experience"
];

import { getBasePath } from "@/lib/utils";

// Mapping product IDs to menu images
const menuImages: Record<string, string> = {
    "718": getBasePath("/images/menu/718.jpg"),
    "porsche": getBasePath("/images/menu/911.jpg"),
    "taycan": getBasePath("/images/menu/taycan.jpg"),
    "panamera": getBasePath("/images/menu/panamera.jpg"),
};

export default function MenuDrawer({ isOpen, onClose, products, onSelectProduct, onServicesClick, onExperienceClick }: MenuDrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[110] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 left-0 bottom-0 w-[90%] md:w-[70%] max-w-4xl bg-[#f5f6f7] z-[120] flex shadow-2xl overflow-hidden"
                    >
                        {/* Close Button Top Right of Drawer (or outside) */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/50 rounded-full md:hidden z-10"
                        >
                            <X className="w-6 h-6 text-black" />
                        </button>

                        {/* Left Column: Navigation */}
                        <div className="w-1/3 md:w-1/3 bg-white flex flex-col justify-between py-10 px-8 border-r border-gray-200">
                            <nav className="space-y-2">
                                {navLinks.map((link, i) => (
                                    <button
                                        key={link}
                                        onClick={() => {
                                            if (link === "Services" && onServicesClick) {
                                                onServicesClick();
                                            }
                                            if (link === "Experience" && onExperienceClick) {
                                                onExperienceClick();
                                            }
                                        }}
                                        className={`w-full text-left py-3 px-4 rounded-lg flex items-center justify-between group transition-colors ${i === 0 ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`}
                                    >
                                        <span className={`text-lg ${i === 0 ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                                            {link}
                                        </span>
                                        <ChevronRight className={`w-4 h-4 text-gray-400 group-hover:text-black transition-opacity ${i === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                    </button>
                                ))}
                            </nav>

                            {/* Account Link Bottom */}
                            <button className="flex items-center gap-3 px-4 text-gray-700 hover:text-black mt-auto pt-8">
                                <User className="w-5 h-5" />
                                <span className="font-medium">Account</span>
                            </button>
                        </div>

                        {/* Right Column: Visual Models */}
                        <div className="flex-1 bg-[#f5f6f7] overflow-y-auto py-10 px-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8 px-4">Models</h3>
                            <div className="grid grid-cols-1 gap-8">
                                {products.map((product, index) => (
                                    <div
                                        key={product.id}
                                        onClick={() => onSelectProduct(index)}
                                        className="group cursor-pointer p-4 rounded-xl hover:bg-white transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-2xl font-bold text-gray-900">{product.name}</h4>
                                            <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Car Image Container */}
                                        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-gray-100">
                                            <img
                                                src={menuImages[product.id] || "/images/menu/911.jpg"}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-500 rounded uppercase tracking-wide">
                                            {product.features[2] || "Porsche"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Close Button on the overlay side (Desktop) */}
                        <button
                            onClick={onClose}
                            className="hidden md:flex absolute top-4 right-[-3rem] md:right-[-4rem] text-white/50 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
