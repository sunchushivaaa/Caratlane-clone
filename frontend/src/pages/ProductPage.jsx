import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Filter from '../components/filter'
import Rangeslider from '../components/Rangeslider'
import { getData } from '../redux/getdata/action'
import Singleproduct from './SingleCartproduct'
import Slider from '../components/Carasul'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  const data = useSelector(store => store.datareducer.data)
  console.log(data)



  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <Box width="100%" display={["block","block","flex","flex"]} padding="5%">
      <Box display={["none","none","block","block"]} width="25%">
        <Filter />
        <Rangeslider mi={500} ma={1000} />
        <Rangeslider mi={1001} ma={2000} />
        <Rangeslider mi={2001} ma={3000} />
      </Box>
      <Box width="70%">
        { data.Data && data.Data.length>0 && data.Data.map(ele=><Link to={`/productpage/${ele._id}`}><Slider key={ele._id} {...ele} /></Link>)}
      </Box>
    </Box>
  );
}

export default ProductPage
