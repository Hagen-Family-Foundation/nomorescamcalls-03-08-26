import React, { useState } from 'react';

/**
 * VideoSection - Explanatory video for scam call protection
 * Placed BELOW Hero, ABOVE Features for optimal conversion
 * 
 * Video: "Protect Your Peace: Stop Scam Calls with Grace"
 * Source: Hypernatural AI
 */
export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = 'https://app.hypernatural.ai/v/rd6QAE_VSB0/';
  const thumbnailUrl = 'https://d19fa2ka4qs0b8.cloudfront.net/clips/rd6QAE_VSB0/20260201_022505-protect-your-peace-stop-scam-calls-with-grace-thumbnail.jpg';

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Watch How We <span className="text-yellow-400">Destroy Scammers</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            See exactly how we handle confirmed scammers — and how Grace gets you protected instantly.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-700/50">
            {!isPlaying ? (
              /* Thumbnail with Play Button */
              <div 
                className="relative cursor-pointer group"
                onClick={handlePlayClick}
              >
                <img 
                  src={thumbnailUrl}
                  alt="Protect Your Peace: Stop Scam Calls with Grace"
                  className="w-full aspect-video object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-8 h-8 md:w-10 md:h-10 text-slate-900 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-lg">
                  2:30
                </div>
              </div>
            ) : (
              /* Iframe Video Player */
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  title="Protect Your Peace: Stop Scam Calls with Grace"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Video Caption */}
          <p className="text-center text-slate-400 mt-4 text-sm md:text-base">
            "Here's exactly how we handle confirmed scammers + Grace gets you protected instantly."
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
          >
            <span>Get Protected with Grace</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-slate-500 mt-3 text-sm">
            No contracts • Cancel anytime • Protected in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
