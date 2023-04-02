import React from 'react'
import "../style/footer.css"
import store from "../images/store.png";
import payment from "../images/payment.png";
import { FaPhoneAlt, FaWhatsapp, FaWeixin } from "react-icons/fa";
import { Flex,Button, Image } from '@chakra-ui/react';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="top-col">
          <div className="col">
            <h1 className="col-header">Know Your Jewellery</h1>
            <button className="btn-tag">JEWELLERY GUIDE</button>
            <button className="btn-tag">GEMSTONES GUIDE</button>
            <button className="btn-tag">GOLD RATE</button>
            <button className="btn-tag">DIGITAL GOLD</button>
          </div>
          <div className="col">
            <h1 className="col-header">CaratLane Advantage</h1>
            <button className="btn-tag">15-DAY RETURNS</button>
            <button className="btn-tag">FREE SHIPPING</button>
            <button className="btn-tag">FINANCING OPTIONS</button>
            <button className="btn-tag">OLD GOLD EXCHANGE</button>
          </div>
          <div className="col">
            <h1  id='customer-col' className="col-header">Customer Service</h1>
            <button className="btn-tag">RETURN POLICY</button>
            <button className="btn-tag">ORDER STATUS</button>
          </div>
          <div className="col">
            <h1 className="col-header">About Us</h1>
            <button className="btn-tag">OUR STORY</button>
            <button className="btn-tag">PRESS</button>
            <button className="btn-tag">BLOG</button>
            <button className="btn-tag">CAREERS</button>
          </div>
          <div className="col">
            <h1 className="col-header">Contact Us</h1>
            <Flex mt="10px" mb="10px" gap="8px">
              <FaPhoneAlt />
              <FaWhatsapp />
              <FaWeixin />
            </Flex>
            <button className="btn-tag">
              24X7 Enquiry Support ( ALL Days )
            </button>
            <Button py="4px" size="xs" colorScheme="purple" variant="outline">
              FIND A STORE
            </Button>
          </div>
        </div>
        <div className="footer-top2">
          <div>
        
            <Image w="100%" src={store} alt="STORE" />
          </div>
          <div>
          
            <Image w="100%" src={payment} alt="PAY" />
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}
export default Footer
