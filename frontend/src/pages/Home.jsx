import {
  Text,
  Image,
  Flex,
  Input,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import Crausal_home from "../components/Crausal_home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/home.css";

const Home = () => {
  const [value, setValue] = React.useState("1");
  return (
    <div className="home-con">
      <Navbar />
      <img
        className="banner-img"
        src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Offer/08/Desktop_1920x560_toplisting.jpg"
        alt="banner"
      />
      <div className="con2">
        <img
          className="con2-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/ResponsiveBanner/30/Responsive_Banner001.jpg"
          alt="shaya"
        />
        <div className="con2-right">
          <img
            className="con2-right-img"
            id="kal-img"
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/NEWIN/04/1X.jpg"
            alt="img"
          />
          <img
            className="con2-right-img"
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/Store/05/2XCityBannerKolkataLakeMall.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="con3">
        <img
          className="con3-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_1.jpg"
          alt="con3-img"
        />
        <img
          className="con3-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_2.jpg"
          alt="con3-img"
        />
        <img
          className="con3-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/HP-Banner/6tile/01/Desktop_3.jpg"
          alt="con3-img"
        />
        <img
          className="con3-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_4.jpg"
          alt="con3-img"
        />
        <img
          className="con3-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/08/Desktop_9.jpg"
          alt="con3-img"
        />
        <img
          className="con3-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_7.jpg"
          alt="con3-img"
        />
      </div>
      <div className="con4">
        <div className="con4-img">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/Collection/Collection_Harry_potter_1.jpg"
            alt="img"
          />
        </div>
        <div id="mid4-img" className="con4-img">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Envogue/01/Collection_ENVOUE.jpg"
            alt="img"
          />
          <button className="mid-btn">View All Collections</button>
        </div>
        <div className="con4-img">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/Collection/Collection_Blaze.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="con5">
        <img
          className="con5-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Personal/04/2X.gif"
          alt="img"
        />
        <img
          className="con5-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Runway/01/1X.jpg"
          alt="img"
        />
        <img
          className="con5-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif"
          alt="img"
        />
        <img
          className="con5-img"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Bestsellers/02/2x.jpg"
          alt="img"
        />
      </div>
      <div className="con6">
        <div className="con6-div">
          <img
            src="https://banner.caratlane.com/live-images/79a051bec38941a2a055387f502579a9.jpg"
            alt="img"
          />
        </div>
        <div className="con6-div">
          <img
            src="https://banner.caratlane.com/live-images/bdd989ae1f2549ae9f8e8d41c144221e.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="con7">
        <div>
          <h1
            style={{
              color: "#9a60f7",
              fontSize: "120px",
              fontFamily: "-moz-initial",
            }}
          >
            GOLD
          </h1>
          <h1
            style={{
              color: "#d159F9",
              fontSize: "30px",
              fontFamily: "-moz-initial",
            }}
          >
            EXCHANGE PROGRAM
          </h1>
        </div>
        <div>
          <h1
            style={{
              fontSize: "30px",
              fontFamily: "-moz-initial",
              fontWeight: "100",
            }}
          >
            Your precious gold. Our new designs!
          </h1>
          <p
            style={{
              marginTop: "24px",
              marginBottom: "24px",
              textAlign: "left",
            }}
          >
            Gold Exchange Your precious gold. Our new designs! - A Gold Exchange
            Program that lets you preserve your memories and make new ones!
            Please note: The old gold doesn’t have to be from only CaratLane, it
            can be any gold jewellery you have.
          </p>
          <button className="know-btn">Know More</button>
        </div>
      </div>
      <div className="crausal-con">
        <Crausal_home />
      </div>
      <div className="con8">
        <div className="con8-div">
          <img
            src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png"
            alt="tanish"
          />
          <p style={{ color: "#dbbf83" }}>
            The highest quality of craftsmanship and innovation, that brings you
            modern, everyday designs.
          </p>
          <button className="tanishq-btn">Know More</button>
        </div>
      </div>
      <Text ml="4%" py="30px" textAlign="left" fontSize="25px">
        Shop Our Instagram
      </Text>
      <div className="con9">
        <div className="con9-left">
          <Image
            src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image1.jpg"
            alt="LEFT-IMG"
          />
        </div>
        <div className="con9-right">
          <div className="con9-div">
            <img
              className="con9-img"
              src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image2.jpg"
              alt="con9-img"
            />
          </div>
          <div className="con9-div">
            <img
              className="con9-img"
              src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image4.jpg"
              alt="con9-img"
            />
          </div>
          <div className="con9-div">
            <img
              className="con9-img"
              src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image5.jpg"
              alt="con9-img"
            />
          </div>
          <div className="con9-div">
            <img
              className="con9-img"
              src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image3.jpg"
              alt="con9-img"
            />
          </div>
          <div className="con9-div">
            <img
              className="con9-img"
              src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image6.jpg"
              alt="con9-img"
            />
          </div>
          <div className="con9-div">
            <img
              className="con9-img"
              src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image7.jpg"
              alt="con9-img"
            />
          </div>
        </div>
      </div>
      <div className="con10">
        <div className="con10-div">
          <Text fontSize="x-large" mt="30px" color="white">
            Sign up to be a CaratLane Insider
          </Text>
          <Flex>
            <Input p={5} borderColor="#b55cef" placeholder="Search" size="sm" />

            <Button size="md" colorScheme="purple" variant="solid">
              SUBMIT
            </Button>
          </Flex>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio colorScheme="white" value="1">
                Female
              </Radio>
              <Radio color="white" value="2">
                Male
              </Radio>
              <Radio value="3">Other</Radio>
            </Stack>
          </RadioGroup>
          <Button colorScheme="purple" variant="link">
            Know more
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
