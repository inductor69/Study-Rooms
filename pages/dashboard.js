import { ChakraProvider } from '@chakra-ui/react'
import Layout1 from '../components/Layout1'
import theme from '../styles/theme'

function Dashboard({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout1>
        <Component {...pageProps} />
      </Layout1>
    </ChakraProvider>
  )
}

export default Dashboard