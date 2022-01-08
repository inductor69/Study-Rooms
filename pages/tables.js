import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Layout1 from '../components/Layout1'
import { BasicTable, StripeTable } from '../components/Tables'
export default function tables() {
  return (
    <Layout1>
      <Box h='100vh'>
        <Flex
          color='dark'
          margin='0 auto'
          direction='column'
          maxW={1280}
          px={[5, 8, 8]}
          py={5}>
          <Heading as='h2'>Tables</Heading>

          <Flex flexDirection='column' mt={5}>
            <BasicTable />
            <StripeTable />
          </Flex>
        </Flex>
      </Box>
    </Layout1>
  )
}
