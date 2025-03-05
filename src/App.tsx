import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Splash from "./components/ui/Splash";
import WEBTHREE from "./icons/WEBTHREE";
import Globe from "./icons/Globe";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen  bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8 } }}
            className="min-h-screen flex flex-col items-center justify-center"
          >
            <Splash svg={<WEBTHREE w="60%" h="60%"/>} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <Navbar />
            <div className="border-b border-[#292929] w-full">
            <Hero />
            </div>

            <div className="text-white border-b border-[#292929] w-full">
              <div className="max-w-[1440px] mx-auto ">
                <div className="py-4 flex flex-row items-center justify-between">
                <div className="">
                  {/* <Globe w="420" h="420" /> */}
                  <span className="text-lg font-extralight"><span className="text-[#39FF14]">/</span> BASED IN UNITED STATES <br/> & WORKING WORLDWIDE</span>
                </div>
                <div>
                <span className="text-lg font-extralight"><span className="text-[#39FF14]">/</span> YEARS OF BLOCK <br/> CHAIN EXPERIENCE</span>
                </div>
                <div>
                <span className="text-lg font-extralight"><span className="text-[#39FF14]">/</span>©2024 WEBTHREE <br/> ALL RIGHTS RESERVED</span>
                </div>
                </div>

              </div>
            </div>
            {/* <Team />
            <Clients />
            <Footer /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
