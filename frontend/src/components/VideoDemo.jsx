import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from './ui/button';
import { useBrand } from '../context/BrandContext';

export const VideoDemo = () => {
  const brand = useBrand();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-demo" className="py-20 bg-gray-900" data-testid="video-demo-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See How We <span className="text-orange-500">Stop Scammers</span> in Their Tracks
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch our 60-second demo to see how {brand.appName} protects you and your family from fraud attempts.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          {!isPlaying ? (
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setIsPlaying(true)}
              data-testid="video-thumbnail"
            >
              {/* Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt={`Video thumbnail - How ${brand.appName} works`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-25" />
                  <button 
                    className="relative w-20 h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                    aria-label="Play video"
                  >
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </button>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                1:02
              </div>
            </div>
          ) : (
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              {/* Embedded Video - Using a placeholder since we don't have actual video */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-lg">Video would play here</p>
                  <p className="text-sm text-gray-400 mt-2">Embed your YouTube/Vimeo video</p>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close video"
                data-testid="video-close-btn"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
          )}
        </div>

        {/* Video Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">1</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Call Comes In</h3>
            <p className="text-gray-400 text-sm">Our AI screens the call before it reaches you</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">2</span>
            </div>
            <h3 className="text-white font-semibold mb-2">AI Screens Caller</h3>
            <p className="text-gray-400 text-sm">Real-time voice analysis detects scam patterns</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">3</span>
            </div>
            <h3 className="text-white font-semibold mb-2">You Stay Protected</h3>
            <p className="text-gray-400 text-sm">Scam blocked. Legitimate calls go through</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold"
            data-testid="video-cta-btn"
          >
            Start Your Free Trial
          </Button>
          <p className="text-gray-400 text-sm mt-3">Credit Card Required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};
