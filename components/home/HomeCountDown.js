import React from 'react'
import Link from 'next/link'
import StaticCountDown from '../StaticCountDown'
import DynamicCountDown from '../DynamicCountDown'
import DashBoard from '../dashboard/dashboard'

export default function HomeCountDown({ isStatic }) {
    const comingDate = new Date(Date.now() + 32 * 24 * 57 * 60 * 1000)

    return (
        <section className="home-countdown">
            <h2 className="sr-only">home count down</h2>
            <div className="container container--countdown">
                <div className="countdown__info">
                    <p className="t-coming"><span className="t-white">Coming</span> <span className="t-white">{comingDate.getDay()} {comingDate.toLocaleString('default', { month: 'short' })} {comingDate.getFullYear()}</span></p>
                    {isStatic ? <StaticCountDown isDark={true} /> : <DynamicCountDown isDark={true} />}
                </div>
                <Link href="/dashboard">
                    <a className="btn btn--blue">Get Started</a>
                </Link>
            </div>
        </section>
    )
}