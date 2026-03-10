import React, { useRef } from 'react';

/**
 * VideoSection - Explanatory video for scam call protection
 * Placed BELOW Hero, ABOVE Features for optimal conversion
 * 
 * Video: "Protect Your Peace: Stop Scam Calls with Grace"
 * Native MP4 player (hosted on Cloudflare)
 */
export const VideoSection = () => {
  const videoRef = useRef(null);

  // Video hosted on Emergent CDN
  const videoUrl = 'https://customer-assets.emergentagent.com/job_git-save-verify/artifacts/2fxpg53p_protect-your-peace-stop-scam-calls-with-grace-widescreen%20%281%29.mp4';
  const thumbnailUrl = 'https://d19fa2ka4qs0b8.cloudfront.net/clips/rd6QAE_VSB0/20260201_022505-protect-your-peace-stop-scam-calls-with-grace-thumbnail.jpg';

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
            {/* Native Video Player */}
            <video
              ref={videoRef}
              controls
              poster={thumbnailUrl}
              className="w-full aspect-video object-cover"
              preload="metadata"
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
