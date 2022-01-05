import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { Auth, Typography, Button } from '@supabase/ui'
const SignupSchema = Yup.object({
    name: Yup.string().required('Required'),
    emailAddress: Yup.string().email('Invalid email address').required('Required'),
    phoneNumber: Yup.string().required('Required'),
    companyName: Yup.string().required('Required')
});
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}
export default function SignUpForm() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
  
    const handleLogin = async (email) => {
      try {
        setLoading(true)
        const { error } = await supabase.auth.signIn({ email })
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        setLoading(false)
      }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: -90 }}
            animate={{
                opacity: 1, y: 0,
                transition: {
                    type: "spring",
                    delay: 0.5
                }
            }}
            className="signup-form-wrap">
            <Formik
                initialValues={{
                    name: '',
                    emailAddress: '',
                    plan: 'Basic Pack',
                    phoneNumber: '',
                    companyName: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="signup-form">
                      
                          <Auth.UserContextProvider supabaseClient={supabase}  >
                            
        <Auth supabaseClient={supabase} providers={['google', 'facebook', 'github']} socialColors={true}  />
    </Auth.UserContextProvider>
                    </Form>
                    
                )}
            </Formik>
        </motion.section>
    )
}