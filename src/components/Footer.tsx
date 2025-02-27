import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Big WEBTHREE text */}
        <div className="mb-20">
          <h2 className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-center">
            WEB<span className="text-[#39FF14]">THREE</span>
          </h2>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-gray-800 pt-8">
          <div className="flex items-center gap-2">
            <Globe size={20} className="text-[#39FF14]" />
            <span className="text-gray-400">
              BASED IN UNITED STATES<br />& WORKING WORLDWIDE
            </span>
          </div>
          <div className="text-center text-gray-400">
            7 YEARS OF BLOCKCHAIN EXPERIENCE
          </div>
          <div className="text-right text-gray-400">
            ©2024 WEBTHREE<br />
            ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;