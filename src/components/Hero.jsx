import React from "react";
import heroImage from "../assets/hero-image/Rectangle 161124256@3x.png";
import appleLogo from '../assets/download-button-logo/Apple.png'
import playLogo from '../assets/download-button-logo/Playstore.png'

const Hero = () => {


    return (
        <section className="relative w-full overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 relative z-10">

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-bold text-[#202922] tracking-tight leading-snug sm:leading-tight lg:leading-[1.1]">
                            All Your Jobs <br className="hidden sm:block" /> One Smart App
                        </h1>

                        <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-base sm:text-[14px] md:text-[16px] text-[#5F6A62] leading-relaxed">
                            Built for business owners, employees, and clients to streamline
                            job scheduling, service tracking, and team management in one
                            powerful app.
                        </p>

                        {/* App Store Buttons */}
                        <div className="mt-[75px] flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="#" aria-label="Download on the App Store">
                                <div className="px-[14px] py-[10px] rounded-2xl border border-[#C7E6C5] transition-all duration-300 hover:bg-[#EAF7E9] hover:shadow-md hover:scale-[1.02] cursor-pointer">
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <img src={appleLogo} className="w-[22px] h-[27px]" alt="" />
                                        </div>
                                        <div>
                                            <p className="text-[9px]">Download on the</p>
                                            <p className="text-[18px]">App Store</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" aria-label="Get it on Google Play">
                                <div className="px-[14px] py-[10px] rounded-2xl border border-[#C7E6C5] transition-all duration-300 hover:bg-[#EAF7E9] hover:shadow-md hover:scale-[1.02] cursor-pointer">
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <img src={playLogo} className="w-[22px] h-[27px]" alt="" />
                                        </div>
                                        <div>
                                            <p className="text-[9px]">Download on the</p>
                                            <p className="text-[18px]">Google Play</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                        <img
                            src={heroImage}
                            alt="ScapeSync app on a smartphone"
                            className="w-[260px] sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[680px] 2xl:w-[820px]object-contain"
                        />

                        <div className="w-[793px] h-[124px] absolute bottom-0" style={{
                            background: "linear-gradient(0deg, rgba(255, 255, 255, 1) 100%%, rgba(255, 255, 255, 0) 100%)",
                        }}>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
