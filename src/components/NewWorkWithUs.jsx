import React from 'react'

import MasonryGallery from './MasonryGallery'
import RatingWorks from './RatingWorks'
import Footer from './Footer'
import { motion } from 'framer-motion'
import ReelsSection from './ReelsSection'
import BecomePartner from './BecomePartner'

function NewWorkWithUs() {
  return (
    <section>
      {/* PAGE HEADING — GAP FIXED */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mt-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       <span className='text-[#090971]'>Work with</span> <span className="text-[#739131]"> us</span>
      </motion.h2>

      <div className="bg-[#f8f7f0]">

        {/* BECOME PARTNER — GAP FIXED */}
        <section className="mt-10">
          <BecomePartner />
        </section>

        {/* REELS — GAP FIXED */}
        <section className="mt-1">
          <ReelsSection />
        </section>

        {/* GALLERY + RATINGS */}
        <section>
          <MasonryGallery />
          <RatingWorks />
        </section>

        {/* FOOTER — GAP FIXED */}
        <section className="mt-20">
          <Footer />
        </section>

      </div>
    </section>
  )
}

export default NewWorkWithUs
