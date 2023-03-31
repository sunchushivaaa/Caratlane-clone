
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const CartPage = () => {
  return (
    <Box marginTop="5%">
        <Box display={["block","block","flex","flex"]} border="1px solid red" width="100%">
            <Box width={["100%","100%",'40%',"40%"]}>
              <Image src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06497-1RP600_1_lar.jpg" width="100%"/>
            </Box>
            <Box width={["100%","100%",'60%',"60%"]}>

            </Box>
        </Box>
    </Box>
  )
}

export default CartPage
