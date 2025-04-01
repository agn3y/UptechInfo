import { motion } from "framer-motion";
import React from "react";

const images = [
    "https://images.unsplash.com/photo-1730528220487-80ed488ad546?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528475734108-88a7b30257bb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705904506592-d8a0d5392c66?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705904506562-f28266845273?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1668004507192-af7309898238?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'https://images.pexels.com/photos/29781604/pexels-photo-29781604/free-photo-of-crescent-moon-in-black-night-sky-celestial-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/10632837/pexels-photo-10632837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16075343/pexels-photo-16075343/free-photo-of-handmade-dolls-and-football-world-cup-trophy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

export default function SecondCarousel() {
    return (
        <div className="overflow-hidden w-full max-w-[1600px] mx-auto px-6 my-20 relative">
            <motion.div
                className="flex whitespace-nowrap gap-7"
                animate={{ x: ["0%", "-100%"] }} // Moves Right to Left
                transition={{
                    duration: 12,
                    repeat: Infinity, // Keeps looping
                    ease: "linear",
                }}
            >
                {/* Duplicate images for smooth infinite scrolling */}
                {[...images, ...images].map((img, index) => (
                    <div
                        key={index}
                        className="min-w-[400px] h-[400px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
