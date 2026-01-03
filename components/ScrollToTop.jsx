'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Use Lenis if available, otherwise fallback to window scroll
    const scrollToTop = () => {
      // Try to use Lenis scroll if available
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: false });
      } else {
        // Fallback to instant scroll
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();
  }, [pathname]);

  return null;
}
