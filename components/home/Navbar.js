import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
export const Navbar = () => {

const path= useRouter().pathname;
function fun1(ps){
    if(ps==path){
        return "menu-link is-active"
    }
    else return "menu-link"
}
    return (

        <div className="container container--home header app">
        <Link className='logo' href='/'>LOGO</Link>
        <div className="header-menu">
            <Link className={fun1('/apps')} href='/apps' >About</Link>
            <Link className={fun1('/discover')} href='/discover'>Discover</Link>
            <Link className={fun1('/pricing')} href='/pricing'>Pricing</Link>
            <Link className={fun1('/signup')} href='/signup'>Signup</Link>

        </div>

      </div>
    )
}


