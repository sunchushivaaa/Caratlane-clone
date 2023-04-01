import { Box, Image, Stack } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Slider = (prod) => {

        const data = [
                { image: prod.img1 },
                { image: prod.img2 },
                { image: prod.img3 },
                {image:prod.video}
        ]
        const divStyle = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
              }
        return (<Stack width={{ base: "100%", md: "70%" }} margin="auto"  className="slide-container" height={{base:"200px",md:"400px"}} border="1px solid red">
                <Slide width="100%" height="100%" border="1px solid purple">
         {data.map((slideImage, index)=> (
            <Box key={index} className="each-slide" style={divStyle}  height={{base:"100%",md:"100%"}}>
             <Image src={slideImage.image} width="100%" height="100%"/>
              </Box>
          ))} 
        </Slide>
        </Stack>


        )
}


export default Slider