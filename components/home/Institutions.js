import { motion } from 'framer-motion'
import React from "react";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
export default function Institutions() {
    const animation = { duration: 12000, easing: (t) => t }

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
                className="">
                    <h2 className="t-h2s home-hero__content__body">Used by hundreds of students internationally</h2>

                <div ref={sliderRef} className="keen-slider">
                    <img className="keen-slider__slide number-slide1" src='/assets/institutions/cornell.png'/>
                    <img className="keen-slider__slide number-slide2"src='/assets/institutions/cambridge.png'/>
                    <img className="keen-slider__slide number-slide3"src='/assets/institutions/harvard.png'/>
                    <img className="keen-slider__slide number-slide4"src='/assets/institutions/imperial.png'/>
                    <img className="keen-slider__slide number-slide5"src='/assets/institutions/lse.png'/>
                    <img className="keen-slider__slide number-slide6"src='/assets/institutions/melbourne.png'/>
                    <img className="keen-slider__slide number-slide7"src='/assets/institutions/mit.png'/>
                    <img className="keen-slider__slide number-slide8"src='/assets/institutions/oxford.png'/>
                    <img className="keen-slider__slide number-slide9" src='/assets/institutions/princeton.png'/>
                    <img className="keen-slider__slide number-slide10"src='/assets/institutions/stanford.png'/>
                    <img className="keen-slider__slide number-slide11"src='/assets/institutions/toronto.png'/>
                    <img className="keen-slider__slide number-slide12"src='/assets/institutions/yale.png'/>
                {/* <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
                </div>
                
            </motion.div>
            
            
        </div>
    </section>
    )
}
