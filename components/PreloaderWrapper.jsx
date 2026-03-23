"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Preloader";

export default function PreloaderWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // show loader on route change

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, [pathname]); // 🔥 runs on every page change

  return loading ? <Preloader /> : <>{children}</>;
}