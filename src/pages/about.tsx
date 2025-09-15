import AboutPage from "@/templates/AboutPage";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function About() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    
    // Scroll to top when about page loads
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, [router.isReady]);

  return <AboutPage />;
}
