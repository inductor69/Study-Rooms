import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomeHero() {
    return (
        <section className="home-hero">
            <div className="container container--home">
                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{
                        opacity: 1, y: 0,
                        transition: {
                            type: "spring"
                        }
                    }}
                    transition={{ duration: 0.5 }}
                    className="home-hero__content">
                    <h1 className="t-h1 home-hero__content__heading">Boost Your Focus</h1>
                    <p className="t-body1 t-light-gray home-hero__content__body">Join our 24/7 virtual Focus Rooms and study with the world's most productive community of students.</p>
                    <Link href="/signup">
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
                    transition={{ duration: 0.5 }}
                    className="home-hero__image">
                    <img src="/assets/home/illustration-charts-v2.svg" alt="home hero" />
                </motion.div>
            </div>
        </section>
    )
}