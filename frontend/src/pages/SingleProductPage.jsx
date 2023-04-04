import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDatabracelet,
  getDataRing,
  getDataearings,
  getDatamangalsutra,
} from "../redux/getdata/action";
import { addDataCart } from "../redux/getdata/addcartdataaction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const { id } = useParams();
  console.log(id);
  const toast = useToast();
  const dispatch = useDispatch();
  const [prod, setProd] = useState({});
  const ringdata = useSelector((store) => store.datareducer.data1);
  const isloading = useSelector((store) => store.datareducer.isLoading);
  const braceletdata = useSelector((store) => store.datareducer2.data2);
  const earringsdata = useSelector((store) => store.datareducer3.data3);
  const mangalsutradata = useSelector((store) => store.datareducer4.data4);

  useEffect(() => {
    dispatch(getDataRing(id));
    dispatch(getDatabracelet(id));
    dispatch(getDataearings(id));
    dispatch(getDatamangalsutra(id));
    if (ringdata && ringdata.Data && ringdata.Data.length == 1) {
      console.log(ringdata);
      setProd(ringdata.Data[0]);
    } else if (
      braceletdata &&
      braceletdata.Data &&
      braceletdata.Data.length === 1
    ) {
      console.log(braceletdata);
      setProd(braceletdata.Data[0]);
    } else if (
      earringsdata &&
      earringsdata.Data &&
      earringsdata.Data.length === 1
    ) {
      console.log(earringsdata);
      setProd(earringsdata.Data[0]);
    } else if (
      mangalsutradata &&
      mangalsutradata.Data &&
      mangalsutradata.Data.length === 1
    ) {
      console.log(mangalsutradata);
      setProd(mangalsutradata.Data[0]);
    }
    return () => {
      setProd({});
    };
  }, []);
  console.log(prod && prod);
  const handlePayment = () => {
    const newobj = { ...prod, quantity: 1 };
    dispatch(addDataCart(newobj)).then((res) => {
      toast({
        position: "top",
        title: "Product added into cart",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };
  const [state, setState] = useState(1);

  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <Box width="100%">
        <Box
          width="100%"
          background="white"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
        >
          <Navbar />
        </Box>
        <Box
          display={["block", "block", "flex", "flex"]}
          width="100%"
          marginTop="1%"
        >
          <Box
            width={["100%", "100%", "50%", "50%"]}
            height={["250px", "250px", "500px", "500px"]}
            padding="4%"
          >
            <Image src={prod.img1} width="100%" height="100%" />
          </Box>
          <Box
            width={["100%", "100%", "40%", "40%"]}
            textAlign="left"
            padding="2%"
          >
            <Box width="100%">
              <Heading as="h2" color="violet">
                {prod.name}
              </Heading>
              <Box
                width="100%"
                height="300px"
                marginTop="2%"
                padding="3%"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              >
                <Box marginTop="4%" className="order_summary_box">
                  <p>MRP : {prod.MRP}</p>
                </Box>
                <Box marginTop="4%" className="order_summary_box">
                  <p>Details : {prod.details} </p>
                </Box>
                <Box marginTop="4%" className="order_summary_box">
                  <p>Purity : {prod.purity} </p>
                </Box>
                <Box marginTop="4%" className="order_summary_box">
                  <p>Weight: {prod.weight} </p>
                </Box>
              </Box>
              <Button
                onClick={() => handlePayment()}
                width="100%"
                marginTop="2%"
                backgroundColor="violet"
                color="white"
                disabled={isloading}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default CartPage;
