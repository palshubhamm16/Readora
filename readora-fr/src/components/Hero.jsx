const text1 = "TRAVEL";
const text2 = "DISCOVER";

const Hero = () => {
    const renderLetters = (text) =>
        text.split("").map((char, index) => (
            <div
                key={index}
                className="text-[180px] tracking-tighter -mx-1 font-extrabold text-black hover:text-gray-500 transition-colors duration-75"
            >
                {char}
            </div>
        ));

    return (
        <div className="min-h-screen xl:min-h-[550px]  bg-[#aaaaaa]/30 backdrop-blur-sm px-4 pt-10 pb-7 relative">
            <div>
                <div className="flex gap-1 -mt-5">{renderLetters(text1)}</div>
                <div className="flex gap-1 -mt-9">{renderLetters(text2)}</div>
            </div>

            <div>
                <div className="absolute bottom-20 right-10 max-w-md text-right text-gray-700 text-lg">
                    <p className="text-xs font-bold tracking-widest">ABOUT</p>
                    <p>
                        Hey! Raahi is a travel blog that captures the essence of every journey—turning stories,
                        sights, and experiences into beautifully crafted content. From hidden gems to popular paths,
                        Raahi blends visual storytelling with a passion for adventure—designed with creativity,
                        wanderlust, and just a bit of caffeine magic.
                    </p>
                </div>

                <div className="absolute bottom-6 right-10 flex items-center gap-2 text-black font-light">
                    <p>Scroll down</p>
                    <span className="animate-bounce text-xl">↓</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
