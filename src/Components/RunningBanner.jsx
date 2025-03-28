import { motion } from 'framer-motion';
import React from 'react';

const images = [
    'https://images.pexels.com/photos/213962/pexels-photo-213962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/279404/pexels-photo-279404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/87001/pexels-photo-87001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/93702/pexels-photo-93702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/268904/pexels-photo-268904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/105170/pexels-photo-105170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/162354/harris-hawk-hawk-harris-bird-162354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/59681/pexels-photo-59681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/259658/pexels-photo-259658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

export default function InfiniteCarousel() {
    return (
        <div className="overflow-hidden w-full max-w-[1500px] mx-auto px-6 my-18">
            <motion.div
                className="flex whitespace-nowrap gap-7" // 28px gap between images
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* Duplicate images for smooth infinite scrolling */}
                {[...images, ...images].map((img, index) => (
                    <div
                        key={index}
                        className="min-w-[80px] h-[80px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden"
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
