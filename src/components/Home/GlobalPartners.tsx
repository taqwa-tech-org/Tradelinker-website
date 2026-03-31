"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";

const GlobalPartners: React.FC = () => {
    const CARD_WIDTH = 160;
    const GAP = 48;
    const ITEM_WIDTH = CARD_WIDTH + GAP;

    const SPEED = 60; // lower = slower (try 10 for ultra slow)

    // 🎯 motion values (IMPORTANT)
    const x1 = useMotionValue(0);
    const x2 = useMotionValue(0);

    let controls1: any;
    let controls2: any;

    const getImagePath = (num: number): string => {
        const webpImages = [1, 38, 39, 44, 50, 61, 63, 74];
        const jpgImages = [
            4, 14, 18, 20, 24, 27, 32, 33, 36, 42, 59, 68, 69, 70, 71, 72, 75,
            76, 82, 83,
        ];

        let ext = "png";
        if (webpImages.includes(num)) ext = "webp";
        else if (jpgImages.includes(num)) ext = "jpg";

        return `/images/company-logo/${num}.${ext}`;
    };

    const allLogos = Array.from({ length: 84 }, (_, i) => i + 1);
    const midPoint = Math.ceil(allLogos.length / 2);

    const firstRowLogos = allLogos.slice(0, midPoint);
    const secondRowLogos = allLogos.slice(midPoint);

    const firstRowWidth = firstRowLogos.length * ITEM_WIDTH;
    const secondRowWidth = secondRowLogos.length * ITEM_WIDTH;

    // 🚀 Start animation
    const startRow1 = () => {
        const current = x1.get();
        const remaining = -firstRowWidth - current;
        const duration = Math.abs(remaining) / SPEED;

        controls1 = animate(x1, -firstRowWidth, {
            duration,
            ease: "linear",
            onComplete: () => {
                x1.set(0);
                startRow1(); // loop
            },
        });
    };

    const startRow2 = () => {
        const current = x2.get();
        const remaining = 0 - current;
        const duration = Math.abs(remaining) / SPEED;

        controls2 = animate(x2, 0, {
            duration,
            ease: "linear",
            onComplete: () => {
                x2.set(-secondRowWidth);
                startRow2(); // loop
            },
        });
    };

    useEffect(() => {
        x2.set(-secondRowWidth); // initial position
        startRow1();
        startRow2();

        return () => {
            controls1?.stop();
            controls2?.stop();
        };
    }, []);

    return (
        <div className="w-full py-18 md:py-16 lg:py-25 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Partners
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Trusted by leading companies worldwide to deliver
                    exceptional results and drive innovation across industries.
                </p>
            </div>

            {/* 🔵 First Row */}
            <div
                className="relative mb-8 overflow-hidden"
                onMouseEnter={() => controls1?.stop()}
                onMouseLeave={() => startRow1()}
            >
                <motion.div className="flex gap-12" style={{ x: x1 }}>
                    {[...firstRowLogos, ...firstRowLogos, ...firstRowLogos].map(
                        (num, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={getImagePath(num)}
                                        alt={`Client ${num}`}
                                        fill
                                        sizes="160px"
                                        className="object-contain hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
                                    />
                                </div>
                            </div>
                        ),
                    )}
                </motion.div>
            </div>

            {/* 🟣 Second Row */}
            <div
                className="relative overflow-hidden"
                onMouseEnter={() => controls2?.stop()}
                onMouseLeave={() => startRow2()}
            >
                <motion.div className="flex gap-12" style={{ x: x2 }}>
                    {[
                        ...secondRowLogos,
                        ...secondRowLogos,
                        ...secondRowLogos,
                    ].map((num, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={getImagePath(num)}
                                    alt={`Client ${num}`}
                                    fill
                                    sizes="160px"
                                    className="object-contain hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default GlobalPartners;
