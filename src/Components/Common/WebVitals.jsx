import { useEffect } from 'react';

const WebVitals = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const reportWebVitals = (metric) => {
      // You can send this data to your analytics service
      console.log('Web Vital:', metric);
      
      // Example: Send to Google Analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Fallback: Manual performance monitoring
    if ('performance' in window) {
      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page Load Time:', loadTime + 'ms');
      });

      // Monitor First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('First Contentful Paint:', entry.startTime + 'ms');
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Browser doesn't support this API
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitals;