import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingPage = ({ onLoadingComplete }) => {
  const [percent, setPercent] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const loadingStatuses = [
    "INITIALIZING_CORE_ENGINE...",
    "BOOTING_MERN_STACK_MODULES...",
    "SYNCING_FLUTTER_UI_ASSETS...",
    "ESTABLISHING_SECURE_CONNECTION...",
    "OPTIMIZING_NEURAL_INTERFACE...",
    "ACCESS_GRANTED",
  ];

  useEffect(() => {
    // Increment percentage
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 800); // Small delay after 100%
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed here

    // Cycle through status messages
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) =>
        prev < loadingStatuses.length - 1 ? prev + 1 : prev,
      );
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-8 font-mono"
    >
      <div className="max-w-md w-full">
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-12 justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-white font-black tracking-[0.5em] uppercase text-sm">
            Zala<span className="text-blue-500">.</span>Tech
          </span>
        </div>

        {/* Progress Display */}
        <div className="relative mb-4">
          <div className="flex justify-between text-[10px] text-gray-500 mb-2 uppercase tracking-widest">
            <span>{loadingStatuses[statusIndex]}</span>
            <span className="text-blue-500 font-bold">{percent}%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="h-[2px] w-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
          </div>
        </div>

        {/* Decorative Grid detail */}
        <div className="grid grid-cols-4 gap-2 opacity-20">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
              className="h-1 bg-blue-500"
            />
          ))}
        </div>

        {/* Technical Footer */}
        <div className="mt-12 text-center">
          <p className="text-[8px] text-gray-700 uppercase tracking-[0.4em]">
            Deployment_Build_V2.0.6 // Addis_Ababa_Node
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
