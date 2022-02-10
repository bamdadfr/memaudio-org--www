import {useGoogleAnalytics} from './use-google-analytics';

/**
 * Hook to be used in the Next.js App component.
 */
export function useApp(): void {
  useGoogleAnalytics();
}
