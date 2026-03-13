"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting...</p>
    </div>
  );
}