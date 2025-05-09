import Image from "next/image";

function Smiley({ section, color }: { section: string; color: string }) {
    return (
        <div>
            {/* <Image
                src="yellow.jpg"
                className={`w-28 h-28 md:w-36 md:h-36 mb-2 hover:scale-105 hover:contrast-125 transition-all duration-300 saturate-150 rounded-md filter ${
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
            /> */}
            <Image
                src="/yellow.jpg"
                width={144}
                height={144}
                className={`w-28 h-28 md:w-36 md:h-36 mb-2 hover:scale-105 hover:contrast-125 transition-all duration-300 saturate-150 rounded-md filter ${
                    color == "red"
                        ? "hue-rotate-[-50deg] saturate-[5]"
                        : color == "blue"
                        ? "hue-rotate-180"
                        : color == "yellow"
                        ? "hue-rotate-0"
                        : color == "grey"
                        ? "grayscale"
                        : ""
                }`}
                alt="smiley"
            />

            <p className="text-center text-[#dfdddc] text-shadow-lg">
                {section}
            </p>
        </div>
    );
}

export default Smiley;
