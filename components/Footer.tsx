import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Twitch, Youtube, Disc, Plus } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 pt-16 pb-8 px-6 relative z-10">
            <div className="max-w-[1400px] mx-auto">
                {/* Main Grid Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 text-center md:text-left">
                    {/* Racing */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">Racing</h4>
                        <ul className="space-y-4 text-gray-400 text-xs font-medium uppercase tracking-wide">
                            <li><Link href="#" className="hover:text-white transition-colors">Formula E</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">GT Works</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Customer Racing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Motorsport</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Porsche Cup</Link></li>
                        </ul>
                    </div>

                    {/* Sports Cars */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">Sports Cars</h4>
                        <ul className="space-y-4 text-gray-400 text-xs font-medium uppercase tracking-wide">
                            <li><Link href="#" className="hover:text-white transition-colors">718 Cayman GT4</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">911 Turbo S</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Taycan Turbo S</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Panamera</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Macan</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cayenne</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">Experience</h4>
                        <ul className="space-y-4 text-gray-400 text-xs font-medium uppercase tracking-wide">
                            <li><Link href="#" className="hover:text-white transition-colors">Service & Accessories</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Porsche Finder</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Exclusive Manufaktur</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Classic</Link></li>
                        </ul>
                    </div>

                    {/* Experience (Renamed to Lifestyle based on Ferrari example or similar) - Keeping "Collections" concept */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">Collections</h4>
                        <ul className="space-y-4 text-gray-400 text-xs font-medium uppercase tracking-wide">
                            <li><Link href="#" className="hover:text-white transition-colors">Men's Fashion</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Women's Fashion</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Watches</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Home & Lifestyle</Link></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">About Us</h4>
                        <ul className="space-y-4 text-gray-400 text-xs font-medium uppercase tracking-wide">
                            <li><Link href="#" className="hover:text-white transition-colors">Jobs & Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Bar */}
                <div className="border-t border-white/10 pt-12 pb-4">
                    <div className="flex justify-center gap-8">
                        {[
                            { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/porsche" },
                            { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/Porsche" },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                            >
                                <social.icon className="w-5 h-5" strokeWidth={1.5} />
                                <span className="font-bold uppercase tracking-wider text-xs">{social.name}</span>
                                <Plus className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
            </div>
        </footer>
    );
}
