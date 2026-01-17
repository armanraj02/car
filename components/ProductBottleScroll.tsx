"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { Product } from "@/data/products";

interface ProductBottleScrollProps {
    product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth scroll
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // Load images on mount
    useEffect(() => {
        let loadedCount = 0;
        const totalFrames = 192; // We have 192 frames
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${product.folderPath}/${i}.jpg`; // Direct path: /images/porsche/1.jpg
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [product.folderPath]);

    // Render loop
    useEffect(() => {
        if (!isLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size (HiDPI)
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth * window.devicePixelRatio;
                canvas.height = parent.clientHeight * window.devicePixelRatio;
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            }
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const render = () => {
            const progress = smoothProgress.get();
            // Map 0-1 to 0-(totalFrames-1)
            const frameIndex = Math.min(
                images.length - 1,
                Math.max(0, Math.floor(progress * (images.length - 1)))
            );

            const img = images[frameIndex];

            // Draw image "contain" logic
            const parent = canvas.parentElement;
            if (!parent) return;
            const cw = parent.clientWidth;
            const ch = parent.clientHeight;

            ctx.clearRect(0, 0, cw, ch);

            if (img) {
                const imgRatio = img.width / img.height;
                const canvasRatio = cw / ch;

                let renderW, renderH;

                // Contain logic
                if (canvasRatio > imgRatio) {
                    renderH = ch;
                    renderW = ch * imgRatio;
                } else {
                    renderW = cw;
                    renderH = cw / imgRatio;
                }

                const offsetX = (cw - renderW) / 2;
                const offsetY = (ch - renderH) / 2;

                ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
            }

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [isLoaded, images, smoothProgress]);

    return (
        <div
            ref={containerRef}
            className="relative h-[500vh] w-full bg-black/50" // 500vh scroll space
        >
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
                {/* Content: Canvas OR Static Image */}
                <div className="relative w-full h-full">
                    {product.heroImage ? (
                        <motion.div
                            key="hero-image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <img
                                src={product.heroImage}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    ) : (
                        <>
                            {!isLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center text-white/50 animate-pulse">
                                    Loading...
                                </div>
                            )}
                            <canvas
                                ref={canvasRef}
                                className="block w-full h-full object-contain relative z-10"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </>
                    )}
                </div>

                {/* Vignette & Gradient Overlays for seamless integration */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-20" />
            </div>
        </div>
    );
}
