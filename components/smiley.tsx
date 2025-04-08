function Smiley({ section, color }: { section: string; color: string }) {
    return (
        <div>
            <img
                src="yellow.jpg"
                className={`w-36 h-36 mb-4 hover:scale-105 hover:contrast-125 transition-all duration-300 saturate-150 rounded-md filter ${
                    color == "red"
                        ? "hue-rotate-[-50deg] saturate-[5]"
                        : color == "blue"
                        ? "hue-rotate-180"
                        : color == "yellow"
                        ? "hue-rotate-0"
                        : color == "grey"
                        ? "grayscale"
                        : null
                }`}
                alt="smiley"
            />
            <p className="text-center text-[#5f5957] shadow-lg">{section}</p>
        </div>
    );
}

export default Smiley;
