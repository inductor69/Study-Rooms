import { motion } from 'framer-motion'

export default function Institutions() {
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
               
            </motion.div>
            
            
        </div>
    </section>
    )
}
