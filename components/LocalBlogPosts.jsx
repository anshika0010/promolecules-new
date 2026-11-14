"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useLocale } from "./LocaleProvider";

/**
 * Short blog posts from the language file (data/i18n/<lang>.json → "posts").
 * Used on non-English sites instead of the English posts from the blog API.
 */
export default function LocalBlogPosts({ showHeading = true }) {
  const { t, fmt, rich } = useLocale();

  return (
    <section className="bg-black py-12 sm:py-16 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {showHeading && (
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-white font-black leading-tight text-3xl sm:text-4xl lg:text-5xl">
              {t.blog_h}
            </h2>
            <p className="mt-4 text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">{fmt(t.blog_p)}</p>
          </div>
        )}

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {t.posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-8"
            >
              <span className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center mb-5">
                <BookOpen size={22} className="text-red-500" />
              </span>
              <h3 className="text-white font-black text-lg sm:text-xl leading-snug">{rich(post.title)}</h3>
              <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">{fmt(post.text)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
