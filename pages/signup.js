import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SignUpCountDown from '../components/signup/SignUpCountDown'
import SignUpForm from '../components/signup/SignUpForm'
import SignUpHero from '../components/signup/SignUpHero'
import SignupSideBg from '../components/signup/SignupSideBg'

import { supabase } from '../utils/supabaseClient'

export default function signup() {
      
    const [session, setSession] = useState(null)
  
    useEffect(() => {
      setSession(supabase.auth.session())
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
    return (
        <Layout isSignUp={true} >   
            <SignUpHero />
            <SignUpCountDown isStatic={false} />
            <SignUpForm />
            <SignupSideBg />
           
        </Layout>
    )
}