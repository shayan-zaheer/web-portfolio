// import Link from "next/link";

// function Navbar() {
//     return (
//         <div className="flex items-center py-4 px-4 md:px-12 text-white font-poppins justify-between text-shadow-lg z-60 sm:text-sm">
//             <div className="flex items-center gap-12">
//                 <Link href="/">
//                     <img
//                         src="/main-logo.png"
//                         alt="Shayan"
//                         className="w-48 h-12 hover:scale-105 duration-300 transition-all"
//                     />
//                 </Link>
//                 <ul className="hidden sm:flex gap-8">
//                     <li>About</li>
//                     <li>Experience</li>
//                     <li>Projects</li>
//                     <li>Resume</li>
//                 </ul>
//             </div>
//             <img
//                 src="/yellow.jpg"
//                 alt=""
//                 className="w-8 h-8 object-cover rounded-full"
//             />
//         </div>
//     );
// }

// export default Navbar;

import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center py-4 px-4 md:px-12 text-white font-poppins justify-between text-shadow-lg z-60 sm:text-sm">
      <div className="flex items-center gap-12">
        <Link href="/">
          <Image
            src="/main-logo.png"
            alt="Shayan Logo"
            width={192} // Adjust based on actual image size (48px * 4 for w-48)
            height={48} // Adjust based on actual image size (12px * 4 for h-12)
            className="hover:scale-105 duration-300 transition-all"
            priority // Optional: Load logo eagerly since it’s in the navbar
          />
        </Link>
        <ul className="hidden sm:flex gap-8">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </div>
      <Image
        src="/yellow.jpg"
        alt="Profile Icon"
        width={32} // Adjust based on actual image size (8px * 4 for w-8)
        height={32} // Adjust based on actual image size (8px * 4 for h-8)
        className="object-cover rounded-full"
      />
    </div>
  );
}

export default Navbar;