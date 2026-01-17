"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
    product: Product;
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
    // We attach to the main window scroll or we rely on the same h-[500vh] container. 
    // Ideally, this component should be overlaid ON TOP of the scroll container in page.tsx 
    // But since the prompts asks to "Display the 4 text sections... fade In/Out based on scroll progress",
    // We can assume this component is placed ALONG WITH the BottleScroll, perhaps absolute positioned.
    // However, since BottleScroll has the ref for scroll, it's cleaner to have this component accept scroll progress?
    // Or we just use `useScroll` with window target because the BottleScroll makes the page 500vh tall.

    // Let's use window scroll for simplicity as the container is 500vh.

    const { scrollYProgress } = useScroll();

    // Map scroll progress (0 to 1 over the 500vh) to visuals
    // 0-0.2: Section 1
    // 0.25-0.45: Section 2
    // 0.5-0.7: Section 3
    // 0.75-0.9: Section 4

    return (
        <div className="pointer-events-none fixed inset-0 z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4">
            {/* Section 1 */}
            <Section
                title={product.section1.title}
                subtitle={product.section1.subtitle}
                inputRange={[0.02, 0.08, 0.12, 0.18]}
                progress={scrollYProgress}
                align="center"
            />
            {/* Section 2 - Left Aligned */}
            <Section
                title={product.section2.title}
                subtitle={product.section2.subtitle}
                inputRange={[0.22, 0.30, 0.35, 0.42]}
                progress={scrollYProgress}
                align="left"
            />
            {/* Section 3 - Right Aligned */}
            <Section
                title={product.section3.title}
                subtitle={product.section3.subtitle}
                inputRange={[0.45, 0.52, 0.58, 0.65]}
                progress={scrollYProgress}
                align="right"
            />
            {/* Section 4 */}
            <Section
                title={product.section4.title}
                subtitle={product.section4.subtitle}
                inputRange={[0.68, 0.75, 0.80, 0.85]}
                progress={scrollYProgress}
                align="center"
            />
        </div>
    );
}

function Section({ title, subtitle, inputRange, progress, align }: {
    title: string;
    subtitle: string;
    inputRange: number[];
    progress: any;
    align: 'left' | 'right' | 'center';
}) {
    const opacity = useTransform(progress, inputRange, [0, 1, 1, 0]);
    const y = useTransform(progress, inputRange, [50, 0, 0, -50]);

    let alignClass = "items-center text-center";
    if (align === 'left') alignClass = "items-start text-left ml-12 md:ml-24 self-start max-w-xl";
    else if (align === 'right') alignClass = "items-end text-right mr-12 md:mr-24 self-end max-w-xl";

    return (
        <motion.div
            style={{ opacity, y, display: useTransform(opacity, (v) => v === 0 ? "none" : "flex") }}
            className={`absolute flex flex-col ${alignClass}`}
        >
            <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 drop-shadow-lg">
                {title}
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                {subtitle}
            </p>
        </motion.div>
    );
}
