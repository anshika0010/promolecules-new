"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: "/blogdummy.webp",
      title:
        "THE POWER OF CONSISTENCY: HOW STAYING ON TRACK CAN TRANSFORM YOUR LIFE",
      description:
        "DISCOVER THE TRANSFORMATIVE POWER OF CONSISTENCY IN ACHIEVING YOUR HEALTH AND FITNESS GOALS. LEARN HOW TO BUILD SUSTAINABLE HABITS THAT LEAD TO LONG-TERM SUCCESS.",
    },
    {
      id: 2,
      image: "/blogdummy.webp",
      title: "FUEL YOUR BODY: SECRETS OF PROPER NUTRITION",
      description:
        "NUTRITION IS POWER. LEARN HOW TO FUEL YOUR BODY WITH THE RIGHT NUTRIENTS, MAXIMIZE PERFORMANCE, AND UNLOCK YOUR FULL POTENTIAL WITH SCIENCE-BACKED NUTRITION STRATEGIES.",
    },
    {
      id: 3,
      image: "/blogdummy.webp",
      title: "GET YOUR SLEEP: A CRUCIAL PIECE",
      description:
        "THE SECRET WEAPON BEHIND PEAK ATHLETIC PERFORMANCE IS QUALITY SLEEP. DISCOVER HOW PROPER REST IMPACTS YOUR RECOVERY, MUSCLE GROWTH, AND OVERALL PERFORMANCE.",
    },
      {
      id: 4,
      image: "/blogdummy.webp",
      title: "FUEL YOUR BODY: SECRETS OF PROPER NUTRITION",
      description:
        "NUTRITION IS POWER. LEARN HOW TO FUEL YOUR BODY WITH THE RIGHT NUTRIENTS, MAXIMIZE PERFORMANCE, AND UNLOCK YOUR FULL POTENTIAL WITH SCIENCE-BACKED NUTRITION STRATEGIES.",
    },
    {
      id: 5,
      image: "/blogdummy.webp",
      title: "GET YOUR SLEEP: A CRUCIAL PIECE",
      description:
        "THE SECRET WEAPON BEHIND PEAK ATHLETIC PERFORMANCE IS QUALITY SLEEP. DISCOVER HOW PROPER REST IMPACTS YOUR RECOVERY, MUSCLE GROWTH, AND OVERALL PERFORMANCE.",
    },
  ];

  return (
    <section className="relative bg-black py-4 sm:py-6 md:py-4 max-w-7xl mx-auto overflow-hidden">
      <style>{`
        .blogs-swiper .swiper-pagination {
          bottom: 0px;
        }
        .blogs-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          width: 6px;
          height: 6px;
        }
        .blogs-swiper .swiper-pagination-bullet-active {
          background: #dc2626;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 space-y-4">
          <div className="flex justify-center items-center px-4 min-h-[80px]">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center w-full"
            >
              <h2 className="creepster-regular heading leading-none text-center">
                BLOGS
              </h2>
              <div className="h-1 bg-red-600 mt-2 w-20 sm:w-32 md:w-60 rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={false}
          breakpoints={{
            480: { slidesPerView: 1.3, spaceBetween: 16 },
            640: { slidesPerView: 1.8, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 2.8, spaceBetween: 28 },
            1280: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="blogs-swiper !pb-10"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer">
                {/* Card Image */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[290px] lg:h-[300px] rounded-2xl overflow-hidden mb-3 sm:mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 hover:scale-110 transition-all duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 space-y-2">
                    <h3 className="text-red-500 anton-regular text-xs sm:text-sm font-bold  line-clamp-1">
                      {blog.title}
                    </h3>
                 <p className="global-text-style text-[9px] sm:text-[10px] md:text-xs leading-relaxed line-clamp-2">
  {blog.description}
</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/blog"
                  aria-label="Learn more about our blogs and fitness articles"
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm tracking-wider"
                >
                  <span>Explore Blogs</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="flex justify-center mt-6 sm:mt-10">
          <Link href="/blog">
            <button className="flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-red-600 hover:bg-red-600 text-white font-bold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 text-xs sm:text-sm tracking-widest group cursor-pointer">
              <span>VIEW ALL</span>
              <div className="bg-red-600 group-hover:bg-white p-1.5 sm:p-2 rounded-full transition-colors">
                <ChevronRight
                  size={16}
                  className="text-white group-hover:text-red-600"
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;