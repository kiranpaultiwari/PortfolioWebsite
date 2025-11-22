import React from "react";
import imgRectangle1 from "figma:asset/f82869a80f906e1c6f7e3d916e35962fe320f428.png";
import imgImage4 from "figma:asset/891fe860c52dcd7a3309affa6bbd1251b86eef34.png";
import imgImage3 from "figma:asset/1002d28e5770af51c417b903605283e5627203e7.png";

function MaskGroup() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%] opacity-[0.15]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1442 1176.9\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.4149e-15 58.844 -72.1 3.6032e-15 721 588.44)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
          maskImage: `url('${imgRectangle1}')`,
          maskSize: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}

function FloatingImageLeft() {
  return (
    <div className="hidden xl:block absolute left-[5%] top-[55%] w-[325px] h-[413px] pointer-events-none z-10">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="rotate-[351deg] relative">
          <div className="bg-[#ffffff] h-[297px] relative rounded-[30px] w-[282px] p-[10px]">
             <div className="h-full w-full overflow-hidden rounded-[20px] relative">
                <div
                    className="absolute bg-center bg-cover bg-no-repeat h-[340px] w-full left-0 top-[-6px]"
                    style={{ backgroundImage: `url('${imgImage4}')` }}
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingImageRight() {
  return (
    <div className="hidden xl:block absolute right-[5%] top-[60%] w-[304px] h-[388px] pointer-events-none z-10">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="rotate-[5deg] relative">
          <div className="bg-[#ffffff] h-[294px] relative rounded-[30px] w-[279px] p-[10px]">
            <div className="h-full w-full overflow-hidden rounded-[20px] relative">
                <div
                className="absolute bg-center bg-cover bg-no-repeat h-[426px] w-[352px] left-[-53px] top-[-33px]"
                style={{ backgroundImage: `url('${imgImage3}')` }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0c] overflow-hidden flex flex-col items-center justify-center pt-20">
      <MaskGroup />
      <FloatingImageLeft />
      <FloatingImageRight />

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto gap-10">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-['Clash_Grotesk:Medium',_sans-serif] text-white text-4xl sm:text-6xl md:text-7xl lg:text-[102px] leading-[1.1] md:leading-[0.9]">
            I'm SMIT, a <br className="hidden md:block" /> UI/UX Designer
          </h1>
          <p className="font-['Clash_Grotesk:Regular',_sans-serif] text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed">
            Specializing in user-centered design, intuitive interfaces, and
            meaningful digital experiences.
          </p>
        </div>

        <button className="bg-[#ebff57] text-[#0a0a0c] px-8 py-4 rounded-full text-xl font-medium hover:bg-[#d9ed4e] transition-transform hover:scale-105 active:scale-95">
          Get Started
        </button>
      </div>
      
      {/* Mobile Image Stack (visible only on mobile) */}
      <div className="xl:hidden flex flex-wrap justify-center gap-8 mt-12 pb-20 relative z-10">
         <div className="rotate-[-6deg] scale-75 sm:scale-90">
             <div className="bg-[#ffffff] h-[297px] relative rounded-[30px] w-[282px] p-[10px]">
                 <div className="h-full w-full overflow-hidden rounded-[20px] relative">
                    <div
                        className="absolute bg-center bg-cover bg-no-repeat h-[340px] w-full left-0 top-[-6px]"
                        style={{ backgroundImage: `url('${imgImage4}')` }}
                    />
                 </div>
            </div>
         </div>
          <div className="rotate-[6deg] scale-75 sm:scale-90">
            <div className="bg-[#ffffff] h-[294px] relative rounded-[30px] w-[279px] p-[10px]">
                <div className="h-full w-full overflow-hidden rounded-[20px] relative">
                    <div
                    className="absolute bg-center bg-cover bg-no-repeat h-[426px] w-[352px] left-[-53px] top-[-33px]"
                    style={{ backgroundImage: `url('${imgImage3}')` }}
                    />
                </div>
            </div>
         </div>
      </div>

    </section>
  );
}
