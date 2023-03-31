import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import Filter from '../components/filter'
import Rangeslider from '../components/Rangeslider'
import { getData } from '../redux/getdata/action'
import Singleproduct from './Singleproduct'

const ProductPage = () => {
  const data = useSelector(store => store.datareducer.data)
  console.log(data)
  const [serachparams] = useSearchParams()
  const location = useLocation()

  const dispatch = useDispatch()
  useEffect(() => {

    const filterdata = {
      params: {
        category: serachparams.getAll("category")
      }
    }

    dispatch(getData())
  }, [location.search])
  return (
    <Box width="100%" display={["block","block","flex","flex"]} padding="5%">
      <Box display={["none","none","block","block"]} width="25%">
        <Filter />
        <Rangeslider mi={500} ma={1000} />
        <Rangeslider mi={1001} ma={2000} />
        <Rangeslider mi={2001} ma={3000} />
      </Box>
      <Box>
        { data.Data && data.Data.length>0 && data.Data.map(ele=><Singleproduct key={ele.id} {...ele}/>)}
      </Box>
    </Box>
  );
}

export default ProductPage
