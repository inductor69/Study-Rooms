import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { AccountSettings, SignIn } from '../components/Forms'
import Layout1 from '../components/Layout1'

export default function forms() {
  return (
    <Layout1>
      <Box h='100%'>
        <Flex
          color='dark'
          margin='0 auto'
          direction='column'
          maxW={1280}
          px={[5, 8, 8]}
          py={5}>
          <Heading as='h2'>Forms</Heading>

          <Flex flexDirection='column' mt={5}>
            <AccountSettings />
            <SignIn />
          </Flex>
        </Flex>
      </Box>
    </Layout1>
  )
}
