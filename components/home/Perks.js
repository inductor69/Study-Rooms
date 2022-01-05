import { motion } from 'framer-motion'

export default function Perks() {
    return (
        <section className="home-hero">
            <div className="container container--section">
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
                   <p className='t-p  home-hero__content__body'>The benefits of studying online </p>
                    <h2 className="t-h2s home-hero__content__body">It's way more than a study rooom</h2>
                   <div className='perks-container'>
                        <div>
                        <img src="/assets/svgs/p3.svg" alt="home hero" />
                        <h2 className="t-hs">It's motivating & scientifically proven</h2>
                        <p className='t-body1 t-light-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                        <div>
                        <img src="/assets/svgs/p16.svg" alt="home hero" />
                        <h2 className="t-hs">It's a 24/7 supportive community</h2>
                        <p className='t-body1 t-light-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                        <div>
                        <img src="/assets/svgs/p14.svg" alt="home hero" />
                        <h2 className="t-hs">It's more than effective - it's fun</h2>
                        <p className='t-body1 t-light-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                   </div>

                </motion.div>
                
                
            </div>
        </section>
    )
}