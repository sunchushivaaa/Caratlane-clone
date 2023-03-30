import { Box, Stack } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Slider = () => {

        const data = [
                { image: "https://i.pinimg.com/564x/83/5b/5b/835b5b43e5bc2a2acdf680812eb2c7df.jpg" },
                { image: "https://imgix.bustle.com/rehost/2016/11/10/066ad65a-82e8-471e-a797-1a9d6b89692a.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress", caption: "Elijah Mikaleson 2" },
                { image: "https://w0.peakpx.com/wallpaper/250/771/HD-wallpaper-elijah-mikaelson-the-originals.jpg", caption: "Elijah Mikaleson 3" }
        ]
        const divStyle = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
              }
        return (<Stack width={{ base: "100%", md: "70%" }} margin="auto"  className="slide-container" height={{base:"200px",md:"400px"}}>
                <Slide width="100%" height="100%" border="1px solid purple">
         {data.map((slideImage, index)=> (
            <Box key={index} className="each-slide" style={divStyle}  height={{base:"100%",md:"100%"}}>
             <img src={slideImage.image} width="100%" height="100%"/>
              </Box>
          ))} 
        </Slide>
        </Stack>


        )
}


export default Slider