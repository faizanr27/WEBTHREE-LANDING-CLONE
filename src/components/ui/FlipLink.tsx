import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className="min-w-max relative inline-block whitespace-nowrap text-base font-normal uppercase text-white/90"
      style={{
        lineHeight: 0.75,
      }}
    >
      {/* Container to prevent width issues */}
      <div className="relative inline-flex min-w-max">
        {/* Wrapper for both spans */}
        <div className="relative overflow-hidden flex w-full items-center justify-center px-2">
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
            className="block w-full text-center"
          >
            {children}
          </motion.span>
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center w-full text-[#95ff00]"
          >
            /{children}
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
};

export default FlipLink;