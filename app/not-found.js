"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";

/**
 * Unknown URLs go back to the home page.
 * The redirect runs after render (calling redirect() inside render throws
 * mid-render and breaks React's dev performance timing:
 * "Failed to execute 'measure' on 'Performance': 'NotFound' cannot have a negative time stamp").
 */
export default function NotFound() {
  const router = useRouter();
  const { t } = useLocale();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-black text-white px-6 text-center">
      <p className="text-6xl font-black text-red-600">404</p>
      <Link href="/" className="rounded-full bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold uppercase tracking-wider">
        {t.ui.home}
      </Link>
    </section>
  );
}
