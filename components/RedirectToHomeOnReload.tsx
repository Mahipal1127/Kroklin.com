'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const RedirectToHomeOnReload = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the page was reloaded
    const navigationEntry = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry && navigationEntry.type === 'reload') {
      // If it's not already the home page, redirect
      if (window.location.pathname !== '/') {
        router.push('/');
      }
    }
  }, [router]);

  return null;
};
