import {useEffect} from 'react';
import {useRouter} from 'next/router';

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    gtag: (config: string, id: string, options: unknown) => void;
  }
}

export const GA_TRACKING_ID = 'UA-149260187-2';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {'page_path': url});
};

/**
 * Hook for using Google Analytics
 */
export function useGoogleAnalytics(): void {
  const router = useRouter();

  useEffect(() => {
    const listener = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', listener);

    return () => {
      router.events.off('routeChangeComplete', listener);
    };
  }, [router.events]);
}
