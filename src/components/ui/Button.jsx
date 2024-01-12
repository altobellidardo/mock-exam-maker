import { Button as ChakraButton } from '@chakra-ui/react'

function Button ({ children, ...props }) {
  return (
    <ChakraButton {...props} bg='prim' color='white' paddingX='4' opacity={0.7} _hover={{ opacity: 1 }} variant='solid'>
      {children}
    </ChakraButton>
  )
}

export default Button
