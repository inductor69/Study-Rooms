
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function HomeHero() {
    return (
        <section className="home-hero">
            <div className='containerr'
>         <div className='glass-rect'>
            <div className="container container--home">
                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{
                        opacity: 1, y: 0,
                        transition: {
                            type: "spring"
                        }
                    }}
                    transition={{ duration: 0.3 }}
                    className="home-hero__content">
                    <h1 className="t-h1 home-hero__content__heading">Boost Your Focus</h1>
                    <p className="t-body1 t-light-gray home-hero__content__body">Join our 24/7 virtual Focus Rooms and study with the world's most productive community of students.</p>
                    <Link href="/dashboard">
                        <a className="btn btn--blue btn-shadow-blue">Get Started</a>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -90 }}
                    animate={{
                        opacity: 1, y: 0,
                        transition: {
                            type: "spring"
                        }
                    }}
                    transition={{ duration: 0.3 }}
                    className="home-hero__image">
                    <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_gqn5t2x3/lf30_editor_wowxxd0p.json"
                        className='lolol'
                    >
                    </Player>

                </motion.div>
            </div>
            </div>
            </div>
        </section>
    )
}