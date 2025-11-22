import React from "react";
import imgImage5 from "figma:asset/21939f8fbfefedaaa9c4760682483fe6022b1043.png";
import imgImage6 from "figma:asset/a29cb6a61a4b30953b062bad709f9d690e929efd.png"; // Double check this mask image path if it fails, it was in original code.
import svgPaths from "../imports/svg-u2dm5opmgk";

function ProjectCard() {
  return (
    <div className="group relative rounded-[30px] overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
      <div className="aspect-[4/3] overflow-hidden relative">
          {/* Using a div for background image to handle the mask if needed, or just display the image directly. 
              The original code used a complex mask. For responsiveness and simplicity, standard object-cover is better unless mask is crucial shape.
              The mask looked like a rectangle anyway. */}
        <div 
            className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url('${imgImage5}')` }}
        />
      </div>
      
      <div className="p-8 flex flex-col gap-6">
         <div className="flex items-center justify-between">
             <span className="text-white/60 uppercase tracking-wider text-sm">Branding</span>
             <div className="bg-[#ebff57] rounded-full px-4 py-2 flex items-center gap-2">
                <svg className="size-5" fill="none" viewBox="0 0 24 24">
                     <path d={svgPaths.pace200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                     <path d={svgPaths.p168b3380} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                     <path d={svgPaths.p2bfa5680} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                     <path d={svgPaths.p1920f500} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                     <path d={svgPaths.p219c3a80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </svg>
                <span className="text-black font-medium text-sm">Live Website</span>
             </div>
         </div>
         <h3 className="text-white text-2xl font-['Clash_Grotesk:Medium',_sans-serif]">
             Lorem Ipsum is simply dummy text of the printing and
         </h3>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section className="w-full bg-[#0a0a0c] py-20 px-6" id="portfolio">
      <div className="max-w-[1720px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-6">
           <div className="flex items-center gap-3">
                <div className="size-4">
                   <svg className="size-full" fill="none" viewBox="0 0 17 17">
                    <path d={svgPaths.p2608d400} fill="white" />
                   </svg>
                </div>
                <span className="text-white text-xl font-['Clash_Grotesk:Regular',_sans-serif]">Our Latest Work</span>
            </div>
             <h2 className="text-white text-4xl md:text-6xl lg:text-[62px] font-['Clash_Grotesk:Regular',_sans-serif] max-w-3xl">
                Unveiling Thoughtful and Impactful Innovations
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
                <ProjectCard key={i} />
            ))}
        </div>

      </div>
    </section>
  );
}
