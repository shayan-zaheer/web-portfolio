import Image from "next/image";

function Suggestions({ number, image }: { number: number; image: string }) {
    return (
        <div className={`relative w-[300px] h-[220px] flex items-center pl-2`}>
            <p className="text-[300px] font-pulp text-[#4F4F4F] opacity-70">
                {number}
            </p>

            <Image
                priority
                src={image}
                alt="suggested"
                className="absolute left-30 h-[220px] w-[150px] object-cover rounded-lg z-10 shadow-lg"
            />
        </div>
    );
}

export default Suggestions;