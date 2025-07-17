import React from 'react'
import { motion } from 'framer-motion'

// Animation config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

function Project() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <span className="border border-gray-500 text-white px-4 py-1 rounded-full text-sm tracking-wide">
            🎯 Portfolio
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
        >
          My Latest <span className="text-[#e6a383]">Project</span>
        </motion.h2>

        {/* Grid with Scroll-in Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[1, 2, 3].map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#141414] rounded-2xl overflow-hidden shadow-md text-left group transition transform duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={
                    index === 0
                      ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop'
                      : index === 1
                      ? 'https://plus.unsplash.com/premium_photo-1705091307717-cac2e3ca3c16?q=80&w=1074&auto=format&fit=crop'
                      : 'https://images.unsplash.com/photo-1713946598691-173f44f13dc9?q=80&w=1332&auto=format&fit=crop'
                  }
                  alt={`Project ${index + 1}`}
                  className="w-full h-60 object-cover rounded-t-2xl transform transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Website Design</h3>
                <p className="text-gray-400 text-xl mb-4">Web Design ,App Design</p>
                <div className="flex justify-end">
                  <div className="bg-gradient-to-br from-[#e6a383] to-[#c97dff] w-10 h-10 flex items-center justify-center rounded-full text-black font-bold text-xl">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Project
