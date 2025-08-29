import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-green-500/20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2025 Srigan Sivagnanenthirarajah. All rights reserved.
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-green-500/10 text-center">
          <p className="text-gray-500 text-sm">
            "Champions aren't made in the comfort zone" ⚾
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;