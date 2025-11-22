import React from "react";
import svgPaths from "../imports/svg-u2dm5opmgk";

function ArrowRight() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" viewBox="0 0 59 59">
        <path
          d={svgPaths.p19811a00}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2.05556"
        />
        <path
          d="M8.57115 29.3873H49.7869"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2.05556"
        />
      </svg>
    </div>
  );
}

function IconWeb() {
  return (
    <svg className="size-16" fill="none" viewBox="0 0 64 64">
        <path d={svgPaths.p4e102c80} stroke="white" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p3324c500} stroke="white" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p37e73380} stroke="white" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function IconApp() {
    return (
        <svg className="size-16" fill="none" viewBox="0 0 64 64">
             <path d={svgPaths.p377c000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
             <path d={svgPaths.p36682a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
             <path d={svgPaths.p19e74100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    )
}

function IconGraphic() {
    return (
        <svg className="size-16" fill="none" viewBox="0 0 64 64">
            <path d={svgPaths.p1b0d9400} stroke="white" strokeWidth="2" />
            <path d={svgPaths.p24e69900} stroke="white" strokeWidth="2" />
        </svg>
    )
}

function IconLogo() {
    return (
        <svg className="size-16" fill="none" viewBox="0 0 64 64">
            <path d={svgPaths.p461d280} fill="white" />
        </svg>
    )
}


function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[30px] bg-[#1a1a1a]/30 border border-white/20 p-8 md:p-10 flex flex-col gap-8 backdrop-blur-xl group hover:bg-[#1a1a1a]/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10">
        {icon}
      </div>
      <div className="flex flex-col gap-4 relative z-10">
        <h3 className="text-white text-2xl md:text-3xl font-['Clash_Grotesk:Medium',_sans-serif]">
            {title}
        </h3>
        <p className="text-gray-400 text-base md:text-lg font-['Clash_Grotesk:Light',_sans-serif] leading-relaxed">
            {desc}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="w-full bg-[#0a0a0c] py-20 px-6" id="services">
      <div className="max-w-[1720px] mx-auto flex flex-col xl:flex-row gap-20 items-start">
        
        {/* Left Column: Sticky Title */}
        <div className="w-full xl:w-1/3 xl:sticky xl:top-32 flex flex-col gap-12">
            <div className="flex items-center gap-3">
                <div className="size-4">
                   <svg className="size-full" fill="none" viewBox="0 0 17 17">
                    <path d={svgPaths.p2608d400} fill="white" />
                   </svg>
                </div>
                <span className="text-white text-xl font-['Clash_Grotesk:Regular',_sans-serif]">Our Service</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight">
                Innovative Solutions Tailored to Your Vision
            </h2>
            
            {/* Explore More Circle Button */}
            <div className="relative size-[185px] group cursor-pointer hidden xl:block">
                <div className="absolute inset-0 animate-spin-slow">
                    <svg className="size-full" viewBox="0 0 185 185">
                        <path id="circlePath" d="M 92.5, 92.5 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                        <text fill="white" className="text-xs font-bold uppercase tracking-[4px]">
                            <textPath href="#circlePath" startOffset="0%">
                                Explore More Explore More Explore More
                            </textPath>
                        </text>
                    </svg>
                </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rotate-[-45deg] w-16 h-16 flex items-center justify-center border border-white rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Grid */}
        <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
                title="Website Design"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum"
                icon={<IconWeb />}
            />
             <ServiceCard 
                title="Application design"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum"
                icon={<IconApp />}
            />
             <ServiceCard 
                title="Graphic Design"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum"
                icon={<IconGraphic />}
            />
             <ServiceCard 
                title="Logo Design"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum"
                icon={<IconLogo />}
            />
        </div>

      </div>
    </section>
  );
}
