import React from "react";

import img1 from "../assets/img1_Wallpaper.jpg";
import img2 from "../assets/img2_Wallpaper.jpg";
import img3 from "../assets/img3_Wallpaper.jpg";

function Company_Name() {
    return (
        <>
            {/* Hero Section with Background Image */}
            <div
                className="relative w-full h-screen flex items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${img3})` }}
            >
                {/* Gradient overlay (lighter than before) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

                {/* Content Container - aligned to right */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex justify-start">
                    <div className="w-full md:w-1/2 lg:w-2/5 text-right">
                        {/* Company Name */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            ⚡ENERGY ENNOVATIONS
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-light">
                            Innovating Tomorrow's Solutions Today
                        </p>

                        {/* Company Description */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 sm:p-8">
                            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                                An energy innovation company focuses on
                                developing sustainable and cutting-edge
                                technologies to revolutionize how energy is
                                produced, stored, and consumed. These companies
                                aim to reduce carbon footprints and promote
                                clean, efficient energy solutions for a greener
                                future.
                            </p>
                        </div>

                        {/* Call-to-Action Button */}
                        <button className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105">
                            Discover Our Solutions
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator (optional) */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
                    <div className="animate-bounce w-6 h-10 border-4 border-white rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company_Name;
