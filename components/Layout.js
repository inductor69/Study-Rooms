import Head from 'next/head'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import { Navbar } from './home/Navbar'

export default function Layout({
    children,
    isSignUp = false,
    isHomepage = false,
    title = 'Study Group'
}) {
    const mainClasses = clsx({
        'main': true,
        'home': isHomepage,
        'signup': isSignUp
    })
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet" />
            </Head>
            <Navbar/>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Header />
                <main className={mainClasses}>
                    {children}
                </main>
            </motion.div>
        </>
    )
}