'use client'

import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="w-full max-w-[500px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden"
      >
        <video
          src="/main_intro.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  )
}
