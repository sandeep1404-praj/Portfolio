'use client';

import { motion } from 'motion/react';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10"
          >
            <h1 className="text-6xl font-carter-one mb-4">Critical Error</h1>
            <p className="text-xl mb-8 font-faustina">A very unexpected error occurred at the root level.</p>
            <button
              onClick={() => reset()}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium"
            >
              Try to recover
            </button>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
