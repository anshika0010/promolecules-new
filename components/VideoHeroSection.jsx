"use client";

import { useEffect, useRef } from "react";

export default function VideoHeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = false;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser blocked autoplay with sound — fallback to muted autoplay
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        /* Mobile: true full screen, no padding */
        h-[40dvh]

        /* Tablet */
        sm:h-[600px]
        sm:px-6

        /* Desktop */
        lg:h-[800px]
        lg:px-8

        /* Large desktop: original height */
        xl:h-[1000px]

        /* Ensure it never shrinks below a useful size */
        min-h-[300px]
      "
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-fit"
        autoPlay
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}
    </section>
  );
}