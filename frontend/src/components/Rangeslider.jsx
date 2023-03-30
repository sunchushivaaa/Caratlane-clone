import React from 'react'
import { Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react";
const Rangeslider = ({mi,ma}) => {
  return (
    <div>
         <RangeSlider aria-label={['min', 'max']} defaultValue={[mi, ma]} onChangeEnd={(val) => console.log(val)}>
                <RangeSliderTrack bg='red.100'>
                    <RangeSliderFilledTrack bg='tomato' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0}>
                    <Box color='tomato'  />
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={6} index={1}>
                    <Box color='tomato'  />
                </RangeSliderThumb>
            </RangeSlider>
    </div>
  )
}

export default Rangeslider
