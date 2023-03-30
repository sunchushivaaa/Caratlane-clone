import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import Grandmenu from './Grandmenu'

const Submenu = ({title}) => {

    const submenu = ["Topwear","Indian","Bottomwear","Footwear"]
  return (<Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} >
      {
        submenu.map(ele=><Grandmenu title={ele}/>)
      }
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default Submenu
