"use client";

export default function MarqueeStrip() {
  const marqueeItems = [
    "Problem Solver",
    "Community",
    "Development",
    "Software Engineering",
    "Websites",
    "Strategy",
    "Products",
  ];

  return (
    <div className="mt-18 w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 px-0">
      <div className="marquee-shell relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 py-6 sm:py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 rounded-[5px] backdrop-blur-2xl" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10  rounded-[4px] backdrop-blur-2xl" />
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="mx-6 inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold tracking-tight uppercase text-[#E0E0E0] dark:text-[#3D3D3D]"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              {item}
              <span className="text-4xl leading-none text-[#E0E0E0] dark:text-[#3D3D3D]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
