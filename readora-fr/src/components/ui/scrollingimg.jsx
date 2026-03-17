import { useEffect, useRef } from "react";
import DynamicText from "./DynamicText";

export default function ScrollRevealingImage() {
    const imgRef = useRef(null);
    const requestRef = useRef(null);
    const targetOffset = useRef(0);
    const currentOffset = useRef(0);

    const SCROLL_SPEED = 0.2;

    useEffect(() => {
        const handleScroll = () => {
            if (!imgRef.current) return;

            const scrollTop = window.scrollY;
            const containerTop =
                imgRef.current.parentElement.getBoundingClientRect().top + window.scrollY;
            const rawOffset = scrollTop - containerTop;

            targetOffset.current = Math.max(0, Math.min(rawOffset * SCROLL_SPEED, 100));
        };

        const animate = () => {
            if (!imgRef.current) return;

            currentOffset.current += (targetOffset.current - currentOffset.current) * 0.2;

            imgRef.current.style.transform = `translateY(-${currentOffset.current}px)`;
            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("scroll", handleScroll);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div className="relative h-[700px] overflow-hidden">
            {/* The Image */}
            <img
                ref={imgRef}
                src="/hello.png"
                alt="Hello"
                className="w-full object-cover will-change-transform duration-75"
                style={{ transform: "translateY(0px)" }}
            />

            {/* Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center pt-10 pointer-events-none z-10">
                <DynamicText />
            </div>
        </div>
    );
}
