"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Bookmark, TrendingUp } from "lucide-react";

export default function BlogDetailPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      
      {/* Hero Image */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/blog2.png"
          alt="Pre Workout Supplement"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </section>

      {/* Title Section - Below Image */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-red-800 rounded-full font-medium">
              <TrendingUp className="w-4 h-4" />
              Nutrition
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-red-800 rounded-full font-medium">
              Supplements
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-red-800 rounded-full font-medium">
              Performance
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl creepster-regular font-bold text-gray-900 mb-6 leading-tight">
            The Ultimate Guide to Pre-Workout Supplements
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Boost energy, improve focus, and maximize performance with the right pre-workout formula. Everything you need to know to make informed choices.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span>Dr. Sarah Mitchell</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span>February 15, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
        
          </div>
        </motion.div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            
            {/* Introduction */}
            <div className="bg-gray-700 rounded-2xl shadow-lg p-8 md:p-10">
              <p className="text-lg text-gray-100 leading-relaxed mb-6">
                Pre-workout supplements have become an essential part of many fitness routines. Designed to increase energy, endurance, and strength, these supplements help you push harder during your workouts and achieve better results.
              </p>
              <p className="text-lg text-gray-100 leading-relaxed">
                Whether you're a seasoned athlete or just starting your fitness journey, understanding what goes into your pre-workout can make all the difference in your performance and safety.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold creepster-regular text-gray-900 mb-6 flex items-center gap-3">
          
                Key Benefits of Pre-Workout
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 p-6 rounded-xl border-l-4 border-orange-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Increased Energy</h3>
                  <p className="text-gray-700">Ingredients like caffeine enhance alertness and reduce fatigue, giving you the boost needed to power through intense training sessions.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 p-6 rounded-xl border-l-4 border-purple-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Improved Focus</h3>
                  <p className="text-gray-700">Nootropics help you stay mentally sharp throughout your session, enhancing mind-muscle connection and workout quality.</p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100/50 p-6 rounded-xl border-l-4 border-red-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Better Pump</h3>
                  <p className="text-gray-700">Nitric oxide boosters improve blood flow and muscle fullness, delivering nutrients more efficiently to working muscles.</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Enhanced Endurance</h3>
                  <p className="text-gray-700">Beta-alanine helps delay muscle fatigue by buffering lactic acid buildup, allowing you to train harder for longer.</p>
                </div>
              </div>
            </div>

            {/* Key Ingredients */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          
                Essential Ingredients to Look For
              </h2>

              <div className="space-y-5">
                <div className="pb-5 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Caffeine (150-300mg)</h3>
                  <p className="text-gray-700">The cornerstone of most pre-workouts, caffeine increases energy, focus, and fat oxidation during exercise.</p>
                </div>

                <div className="pb-5 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Citrulline Malate (6-8g)</h3>
                  <p className="text-gray-700">Boosts nitric oxide production, improving blood flow, oxygen delivery, and the coveted muscle pump.</p>
                </div>

                <div className="pb-5 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Beta-Alanine (3-5g)</h3>
                  <p className="text-gray-700">Increases carnosine levels in muscles, buffering acid and delaying fatigue during high-intensity exercise.</p>
                </div>

                <div className="pb-5 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Creatine Monohydrate (5g)</h3>
                  <p className="text-gray-700">Enhances strength, power output, and muscle recovery by replenishing ATP stores.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">L-Theanine (100-200mg)</h3>
                  <p className="text-gray-700">When paired with caffeine, it promotes calm focus and reduces jitters for smooth, sustained energy.</p>
                </div>
              </div>
            </div>

            {/* How to Choose */}
            <div className="bg-gray-700 rounded-2xl shadow-lg p-8 md:p-10 text-white">
              <h2 className="text-3xl creepster-regular font-bold mb-6 flex items-center gap-3">
            
                How to Choose the Right Pre-Workout?
              </h2>
              <div className="space-y-4 text-blue-50">
                <p className="leading-relaxed">
                  <strong className="text-white">Check the Label:</strong> Look for clinically dosed ingredients with transparent labeling. Avoid proprietary blends that hide ingredient amounts.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Start Small:</strong> Begin with a lower serving to assess your tolerance, especially if you're sensitive to stimulants.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Match Your Goals:</strong> Choose formulas designed for your workout type—strength training, endurance, or general fitness.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Avoid Fillers:</strong> Skip products loaded with artificial colors, excessive sweeteners, or unnecessary additives.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Consult Professionals:</strong> Always check with a healthcare professional if you have medical conditions or take medications.
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl  creepster-regular font-bold text-gray-900 mb-6 flex items-center gap-3">
              
                When to Take Pre-Workout
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                For optimal results, consume your pre-workout 20-30 minutes before exercise. This allows enough time for ingredients to be absorbed and start working.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Avoid taking pre-workout late in the evening if it contains caffeine, as it may interfere with sleep quality. Consider caffeine-free options for evening training sessions.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          
                Final Thoughts
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A good pre-workout supplement can transform your training sessions. When used responsibly, it enhances performance, motivation, and results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Choose quality products from reputable brands and pair them with proper nutrition, hydration, and rest for maximum benefits. Remember, supplements enhance a solid foundation—they don't replace it.
              </p>
            </div>

          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            
            {/* Author Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center text-red-700 text-2xl font-bold">
                  P
                </div>
                <h3 className="font-bold text-lg text-gray-900">PROMOLECULES™</h3>
                <p className="text-sm text-gray-600">PREWORKOUT & GYM SUPPLEMENTS</p>
              </div>
           
              <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:from-red-700 hover:to-red-700 transition-all">
                Follow
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-orange-100">Avg. Energy Boost</span>
                  <span className="font-bold text-xl">+40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-100">Workout Duration</span>
                  <span className="font-bold text-xl">+25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-100">Focus Improvement</span>
                  <span className="font-bold text-xl">+35%</span>
                </div>
              </div>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">Post-Workout Nutrition Guide</p>
                  <p className="text-xs text-gray-600 mt-1">5 min read</p>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">Creatine: Complete Overview</p>
                  <p className="text-xs text-gray-600 mt-1">7 min read</p>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">Hydration for Performance</p>
                  <p className="text-xs text-gray-600 mt-1">4 min read</p>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">Sleep & Recovery Tips</p>
                  <p className="text-xs text-gray-600 mt-1">6 min read</p>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-300 mb-4">Get the latest fitness and nutrition tips delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg mb-3 text-gray-900 text-sm"
              />
              <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>

          </motion.aside>

        </div>
      </section>
    </div>
  );
}