import React from "react";
import imgServices from "figma:asset/a29cb6a61a4b30953b062bad709f9d690e929efd.png";
import imgTextImages from "figma:asset/ea8d13a176bb05967485497ec15e92aafb4f4d8e.png";

export function Intro() {
  return (
    <section className="w-full bg-[#0a0a0c] py-20 px-6 overflow-hidden" id="about">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-4 md:gap-8 text-center">
        
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-5">
          <span className="font-['Clash_Grotesk:Regular',_sans-serif] text-white text-3xl md:text-5xl lg:text-[62px] leading-tight">
            UI/UX Designer with
          </span>
          <span className="font-['Clash_Grotesk:Regular',_sans-serif] text-white text-3xl md:text-5xl lg:text-[62px] leading-tight">
            2.5 years of experience
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-5">
          <span className="font-['Clash_Grotesk:Regular',_sans-serif] text-white text-3xl md:text-5xl lg:text-[62px] leading-tight">
             and 30+ completed projects, specializing in
          </span>
          <div className="bg-[#ffffff] h-[40px] w-[80px] md:h-[66px] md:w-[125px] overflow-hidden relative rounded-[57px] shrink-0 inline-block align-middle mx-2">
            <div
                className="absolute bg-center bg-cover bg-no-repeat h-full w-[180%] left-[-40%]"
                style={{
                backgroundImage: `url('${imgServices}')`,
                }}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-5">
             <span className="font-['Clash_Grotesk:Regular',_sans-serif] text-white text-3xl md:text-5xl lg:text-[62px] leading-tight">
            Skilled in research,
          </span>
           <div className="bg-[#ffffff] h-[40px] w-[80px] md:h-[66px] md:w-[125px] overflow-hidden relative rounded-[57px] shrink-0 inline-block align-middle mx-2">
            <div
                className="absolute bg-center bg-cover bg-no-repeat h-full w-full"
                style={{
                backgroundImage: `url('${imgTextImages}')`,
                }}
            />
          </div>
           <span className="font-['Clash_Grotesk:Regular',_sans-serif] text-white text-3xl md:text-5xl lg:text-[62px] leading-tight">
             wireframing, prototyping,
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-5">
          <span className="font-['Clash_Grotesk:Regular',_sans-serif] text-white text-3xl md:text-5xl lg:text-[62px] leading-tight">
            user-centric, problem-solving designs
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-5">
           <span className="font-['Clash_Grotesk:Regular',_sans-serif] text-white text-3xl md:text-5xl lg:text-[62px] leading-tight">
            and visual design to craft intuitive and engaging user experiences.
          </span>
        </div>

      </div>
    </section>
  );
}
