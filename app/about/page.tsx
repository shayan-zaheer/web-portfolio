"use client";

import ReactLenis from "@studio-freight/react-lenis";

function Page() {
    return (
     <ReactLenis root>
         <div className="w-full h-0 pb-[56.25%]">
           <video
             src="design-video.mp4"
             autoPlay
             muted
             playsInline
             loop
             className="absolute top-0 left-0 w-full h-full object-cover"
           />
         </div>
     </ReactLenis>
    );
  }
  
  export default Page;
  