"use client";

export default function VideoHeroSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        h-[40dvh]
        sm:h-[600px]
        sm:px-6
        lg:h-[800px]
        lg:px-8
        xl:h-[1000px]
        min-h-[300px]
      "
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}