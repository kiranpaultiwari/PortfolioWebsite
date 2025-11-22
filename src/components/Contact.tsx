import React from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-u2dm5opmgk";

function SocialMarquee() {
  return (
    <div className="w-full overflow-hidden py-10 border-t border-white/10 border-b bg-[#0a0a0c]">
      <div className="flex whitespace-nowrap">
        <motion.div 
            className="flex gap-16 items-center pr-16"
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
            {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                    <span className="text-white text-[60px] md:text-[130px] font-['Clash_Grotesk:Regular',_sans-serif]">INSTAGRAM</span>
                    <div className="size-10 md:size-16 shrink-0 text-[#ebff57]">
                         <svg className="size-full" fill="none" viewBox="0 0 40 40">
                            <path d={svgPaths.p25b9d700} fill="currentColor" />
                         </svg>
                    </div>
                     <span className="text-white text-[60px] md:text-[130px] font-['Clash_Grotesk:Regular',_sans-serif]">FACEBOOK</span>
                     <div className="size-10 md:size-16 shrink-0 text-[#ebff57]">
                         <svg className="size-full" fill="none" viewBox="0 0 40 40">
                            <path d={svgPaths.p25b9d700} fill="currentColor" />
                         </svg>
                    </div>
                     <span className="text-white text-[60px] md:text-[130px] font-['Clash_Grotesk:Regular',_sans-serif]">TWITTER</span>
                     <div className="size-10 md:size-16 shrink-0 text-[#ebff57]">
                         <svg className="size-full" fill="none" viewBox="0 0 40 40">
                            <path d={svgPaths.p25b9d700} fill="currentColor" />
                         </svg>
                    </div>
                </React.Fragment>
            ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <footer className="w-full bg-[#0a0a0c] overflow-hidden">
      <SocialMarquee />
      
      <div className="max-w-[1720px] mx-auto px-6 py-20 flex flex-col lg:flex-row gap-20 justify-between">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-10 max-w-2xl">
            <h2 className="text-white text-5xl md:text-8xl font-['Clash_Grotesk:Semibold',_sans-serif]">
                Let's Work Together
            </h2>
            <p className="text-gray-400 text-xl max-w-lg">
                Have a project in mind? We'd love to hear about it. Send us a message and let's start something together.
            </p>
            
            <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-4">
                    <div className="bg-[#252525] p-4 rounded-full text-white">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                     <span className="text-white text-xl">hello@smit.design</span>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="bg-[#252525] p-4 rounded-full text-white">
                         <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                     <span className="text-white text-xl">+1 (555) 123-4567</span>
                </div>
            </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-[600px] flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="bg-[#252525] text-white rounded-[30px] px-6 py-5 w-full outline-none focus:ring-2 focus:ring-[#ebff57] transition-all"
                />
                 <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-[#252525] text-white rounded-[30px] px-6 py-5 w-full outline-none focus:ring-2 focus:ring-[#ebff57] transition-all"
                />
            </div>
            <textarea 
                placeholder="Message" 
                rows={6}
                className="bg-[#252525] text-white rounded-[30px] px-6 py-5 w-full outline-none focus:ring-2 focus:ring-[#ebff57] transition-all resize-none"
            />
            <button className="bg-[#ebff57] text-[#0a0a0c] px-8 py-4 rounded-full font-medium text-xl hover:bg-[#d9ed4e] transition-colors w-full md:w-auto self-start">
                Submit
            </button>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-10">
          <div className="max-w-[1720px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-2xl font-bold">SMIT.</div>
              <div className="flex gap-8 text-white/60">
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                  <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
              <div className="text-white/40">© 2024 SMIT. All rights reserved.</div>
          </div>
      </div>
    </footer>
  );
}
