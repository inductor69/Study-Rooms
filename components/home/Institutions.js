import { motion } from 'framer-motion'
import React from "react";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
export default function Institutions() {
    const animation = { duration: 10000, easing: (t) => t }

    const [sliderRef] = useKeenSlider({
        loop: true,
        rtl: true,
        renderMode: "performance",

        created(s) {
            s.moveToIdx(-5, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs - 5, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs - 5, true, animation)
          },
        breakpoints:{
            '(min-width:300px) and (max-width: 800px)':{
                slides:{
                    perView:2,
                    spacing: 10,
                },
            },
            '(min-width:800px) and (max-width: 1150px)':{
                slides:{
                    perView:3,
                    spacing: 10,
                },
            },

        },

        slides: {
          perView: 4,
          spacing: 10,
        },
      })

    return (
        <section className="">
        <div className="">
            <motion.div
                initial={{ opacity: 0, y: 90 }}
                animate={{
                    opacity: 1, y: 0,
                    transition: {
                        type: "spring"
                    }
                }}
                transition={{ duration: 0.5 }}
                className="inst">
                    <h2 className="t-h2s home-hero__content__body">Used by hundreds of students internationally</h2>

                <div ref={sliderRef} className="keen-slider">
                    <motion.img layout='fill' className="keen-slider__slide number-slide1" src='/assets/institutions/cornell.png'/>
                    <motion.img layout='fill'className="keen-slider__slide number-slide2"src='/assets/institutions/cambridge.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide3"src='/assets/institutions/harvard.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide4"src='/assets/institutions/imperial.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide5"src='/assets/institutions/lse.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide6"src='/assets/institutions/melbourne.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide7"src='/assets/institutions/mit.png'/>
                    <motion.img layout='fill'  className="keen-slider__slide number-slide8"src='/assets/institutions/oxford.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide9" src='/assets/institutions/princeton.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide10"src='/assets/institutions/stanford.png'/>
                    <motion.img layout='fill' className="keen-slider__slide number-slide11"src='/assets/institutions/toronto.png'/>
                    <motion.img  layout='fill' className="keen-slider__slide number-slide12"src='/assets/institutions/yale.png'/>
                </div>

            </motion.div>


        </div>
    </section>
    )
}
