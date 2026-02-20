'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import RippleButton from '@/components/ui/RippleButton';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements - Use Destructive/Red colors for Error */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-destructive rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <div className="mb-8 flex justify-center">
          <motion.div
            className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center relative"
            animate={{ 
              rotate: [0, -5, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-destructive"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            
            <motion.div 
              className="absolute inset-0 border-2 border-destructive/20 rounded-full"
              animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <h1 className="text-4xl md:text-6xl font-carter-one mb-4">Under Maintenance?</h1>
        <h2 className="text-xl md:text-2xl font-faustina font-medium mb-6">Something unexpected happened.</h2>
        
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto font-faustina">
          Don't worry, it's not you, it's us. We've hit a small snag in the code. 
          You can try refreshing the page or head back home.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => reset()}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium text-sm"
          >
            Try Again
          </button>
          <Link href="/">
            <RippleButton text="Go Home" hoverText="Safe Zone" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Background text decoration */}
      <div className="absolute bottom-10 left-0 right-0 pointer-events-none select-none opacity-[0.02] -z-10">
        <h1 className="text-[20vw] font-carter-one whitespace-nowrap">ERROR ERROR ERROR</h1>
      </div>
    </div>
  );
}
