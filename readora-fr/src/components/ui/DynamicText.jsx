import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
    { text: "Hello", language: "English" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Bonjour", language: "French" },
    { text: "Hola", language: "Spanish" },
    { text: "안녕하세요", language: "Korean" },
    { text: "Ciao", language: "Italian" },
    { text: "Hallo", language: "German" },
    { text: "नमस्ते", language: "Hindi" },
];

export default function DynamicText() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        let intervalId;

        const startCycle = () => {
            let index = 0;
            setIsAnimating(true);
            intervalId = setInterval(() => {
                index += 1;
                if (index >= greetings.length) {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        setCurrentIndex(0);
                        startCycle(); // Restart cycle after pause
                    }, 2000); // Delay before repeating cycle
                } else {
                    setCurrentIndex(index);
                }
            }, 300); // Time per greeting
        };

        startCycle();

        return () => clearInterval(intervalId);
    }, []);

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 },
    };

    return (
        <section className="flex items-center justify-center gap-1 p-2">
            <div className="relative h-16 w-[600px] flex mt-8 items-center justify-center overflow-visible">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        className="absolute flex  items-center gap-2 text-8xl font-medium text-white"
                        aria-live="off"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textVariants}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div
                            className="h-2 w-2 rounded-full bg-white"
                            aria-hidden="true"
                        />
                        {greetings[currentIndex].text}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
