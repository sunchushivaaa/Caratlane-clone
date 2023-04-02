import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDatatoCart } from "../redux/getdata/addcartdataaction";
import { Box } from "@chakra-ui/react";

const Singleproduct = (prod) => {
  const [state, setState] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState(e.target.value);
    prod.handlePrice(prod._id, e.target.value);
  };

  return (
    <Box
      width={["100%", "100%", "70%", "70%"]}
      padding="2%"
      margin="auto"
      display="flex"
      flexWrap="wrap"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
      fontSize="75%"
    >
      <Box width={["40%", "40%", "30%", "30%"]}>
        <Image src={prod.img1} width="100%" />
      </Box>

      <Box
        width={["55%", "55%", "30%", "30%"]}
        textAlign="left"
        marginLeft="1%"
      >
        <h2>{prod.name}</h2>
        <p style={{ marginTop: "3%" }}>{prod.details}</p>
        <Box
          display="flex"
          justifyContent="space-around"
          style={{ marginTop: "2%" }}
        >
          <p>Rs.{state * prod.MRP} </p>
          <h6 style={{ textDecoration: "line-through" }}>{prod.MRPx}</h6>
        </Box>
        <Box marginTop="5%">
          <p>
            Quantity:{" "}
            <select onChange={handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </p>
        </Box>
      </Box>
      <Box
        width={["55%", "55%", "30%", "30%"]}
        display="flex"
        alignItems="center"
        marginLeft="5%"
      >
        <Button width="100%">Remove</Button>
      </Box>
    </Box>
  );
};

export default Singleproduct;
