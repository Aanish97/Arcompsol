import CareerPage from "@/templates/CareerPage";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Careers() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    
    // Handle vision query parameter
    if (router.query?.vision) {
      setTimeout(() => {
        const elm = document.getElementById('work-with-us');
        elm?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    } else {
      // Scroll to top when careers page loads (no vision query)
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [router.isReady, router.query]);

  return <CareerPage />;
}
