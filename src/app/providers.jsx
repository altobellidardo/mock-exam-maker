'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    prim: '#f97316'
  }
})

function providers ({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default providers
