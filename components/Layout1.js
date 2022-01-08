import { Box, Flex, Container, ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Sidebar from './Sidebar'
import { ResponsiveSidebar } from '../components/Drawer'
const Layout1 = ({ children }) => {
  return (
<div style={{fontSize:"160%"}}>
 <ChakraProvider resetCSS theme={theme}>
      <Flex h='100vh'>
        <Container
          m={0}
          py={5}
          maxW='256px'
          h='100vh'
          display={['none', 'none', 'none', 'flex', 'flex']}>
          <Sidebar />
        </Container>

        <Container
          p={['0', '0', '0', '1.5rem', '1.5rem']}
          m='0 auto'
          maxW='container.xl'>
          <Box bg='background2' borderRadius='md' h='100%' overflowY='auto'>
            <Flex
              maxW={1280}
              px={[5, 8, 8]}
              py={5}
              display={['flex', 'flex', 'flex', 'none', 'none']}>
              <ResponsiveSidebar />
            </Flex>
            {children}
          </Box>
        </Container>
      </Flex>
    </ChakraProvider>
    </div>

  )
}

export default Layout1
