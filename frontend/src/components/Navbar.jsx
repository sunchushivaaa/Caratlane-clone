import React from "react";
import {
  VStack,
  Box,
  Image,
  Input,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  PopoverTrigger,
  Portal,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Popover,
  PopoverFooter,
  PopoverContent,
} from "@chakra-ui/react";
import "../style/Navbar.css";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaUser,
  FaHeart,
  FaShoppingBasket,
  FaHome,
  FaStore,
  FaShopify,
  FaGoodreadsG,
} from "react-icons/fa";
const metal_data = [
  {
    img: "https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png",
    name: "GEMSTONE",
  },
  {
    img: "https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png",
    name: "SOLITAIRS",
  },
  {
    img: "https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png",
    name: "DIMOND",
  },
  {
    img: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
    name: "GOLD",
  },
  {
    img: "https://banner.caratlane.com/live-images/67d8830039e64bab9a993f203cb82208.png",
    name: "YELLOW GOLD",
  },
  {
    img: "https://banner.caratlane.com/live-images/84581eae59b34f48bffbef0d8d3fc892.png",name:"SILVER SHAYA"
  },
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div style={{ width: "100%", height: "150px", borde: "1px solid" }}>
      <VStack>
        <Box bg="#4f3267" py="3px" w="100%" color="white">
          <Text fontSize="xs">
            Introducing CaratLane PoP! Plan your purchase here
          </Text>
        </Box>
        <Flex
          w="100%"
          bg="#f6f4ff"
          min="max-content"
          alignItems="center"
          h="65px"
          gap="20px"
        >
          <div className="nav_left">
            <img
              id="logo"
              src="data:image/jpeg;base64,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"
              alt="logo"
            />
          </div>
          <div className="nav_left">
            <Flex>
              <FaHome />
              <Text ml="5px" fontSize="xs">
                FREE TRY AT HOME
              </Text>
            </Flex>
          </div>
          <div className="nav_left">
            <Flex>
              <FaStore />
              <Text ml="5px" fontSize="xs">
                FIND STORE
              </Text>
            </Flex>
          </div>
          <div className="nav_left">
            <Flex>
              <FaShopify />
              <Text ml="5px" fontSize="xs">
                PLAN OF PURCHASE
              </Text>
            </Flex>
          </div>
          <div className="nav_left">
            <Flex>
              <FaGoodreadsG />
              <Text ml="5px" fontSize="xs">
                BUY DIGITAL GOLD
              </Text>
            </Flex>
          </div>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Input p={1} borderColor="#b55cef" placeholder="Search" size="sm" />
            <Button bg="#b55cef" size="sm">
              <FaSearch />
            </Button>
            <Menu isOpen={isOpen}>
              <MenuButton
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <Flex>
                  <FaMapMarkerAlt /> <Text fontSize="xs">PINCODE</Text>
                </Flex>
              </MenuButton>
              <MenuList w="100px" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <Image
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMwxHCcoYJ75isaa6LYZUsoa3aWeH4a_P9InqoaB2HzK6sfiaE"
                  alt="map"
                />
                <Text fontSize="14px">ENTER YOUR PINCODE</Text>
                <Text m="auto" mb={5} w="90%" fontSize="12px" pt="5px">
                  To know more about fast delivery, availability of COD, Free
                  Try at Home and stores near you.
                </Text>
                <InputGroup marginLeft={10} w="90%">
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <Flex ml="10px" m="auto" borderColor="#b55cef">
                        <FaMapMarkerAlt ml="10px" />{" "}
                        <Text fontSize="xs">PINCODE</Text>
                      </Flex>
                    }
                  />
                  <Input w="70%" mb="10px" />
                </InputGroup>

                <Button bg="#b55cef" w="90%" color="white">
                  Submit
                </Button>
                <Text my="5px">or</Text>
                <Button mt="10px" bg="gray.100" w="50%" color="b55cef">
                  <Flex ml="10px" m="auto" borderColor="ghost">
                    <FaMapMarkerAlt ml="10px" />{" "}
                    <Text fontSize="xs">Locate me</Text>
                  </Flex>
                </Button>
              </MenuList>
            </Menu>
          </Box>
          <Flex gap="28px">
            <Image
              w="40px"
              borderRadius={"100%"}
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9iwAeRmirx-w3xoVP3IZ7pFZ-9OSaPv8jWWFDWBwm6ylH_FI0"
              alt="flag"
            />
            <Popover>
              <PopoverTrigger>
                <FaUser />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Your Account</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Button colorScheme="blue">Button</Button>
                  </PopoverBody>
                  <PopoverFooter>This is the footer</PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Button>
              <FaHeart />
            </Button>
            <Button>
              <FaShoppingBasket />
            </Button>
          </Flex>
        </Flex>
        <div className="nav-menu">
          <ul>
            <li className="dropdowns">
              NEW ARRIVALS
              <div className="submenu">
                <div className="subCat"></div>
              </div>
            </li>
            <li className="dropdowns">
              RINGS
              <div className="submenu">
                <div className="sub-left">
                  <div className="sub-col">
                    <Text>SHOP BY STYLE</Text>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/3e52030aaf3c4b59b34f7825aaefd475.jpg"
                        alt="eng"
                      />
                      <Text size="xs">ENGAGEMENT</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/3eec2a8167b54bd096102e07f0cb6d3e.jpg"
                        alt="casula"
                      />
                      <Text size="xs">COUPLE RINGS</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg"
                        alt="casula"
                      />
                      <Text size="xs">CASUAL</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/3aa8d1ca304e40d2bc21b6eccac7318e.jpg"
                        alt="casula"
                      />
                      <Text size="xs">ADJUSTABLE RINGS</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/c58e3254626a46b398608e1f0e86c725.jpg"
                        alt="casula"
                      />
                      <Text size="xs">SILVER STATMENT RING</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/4Block/27/CL_Menu_Block_Img01234.jpg"
                        alt="casula"
                      />
                      <Text size="xs">SILVER RING</Text>
                    </div>
                  </div>
                  <div className="sub-col">
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg"
                        alt="casula"
                      />
                      <Text size="xs">PLATINUM RING</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/94329809fcdf408eb7487e69abd78d21.jpg"
                        alt="casula"
                      />
                      <Text size="xs">COCKTAIL</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                        alt="casula"
                      />
                      <Text size="xs">BANDS</Text>
                    </div>
                    <div className="sub-cat">
                      <img
                        className="cat-img"
                        src="https://banner.caratlane.com/live-images/b127d70ba53c4dbe9fcb2e56553fc911.jpg"
                        alt="casula"
                      />
                      <Text size="xs">PROMISE RINGS</Text>
                    </div>
                  </div>
                {/* {
                  metal_data.map((i)=>
               
                    <div  key={i.name}>
                    <div><div/>
                    <div/>
                 
                
                  )
                } */}
                  <div className="sub-col"></div>
                </div>
                <img
                  className="sub-img"
                  src="https://banner.caratlane.com/live-images/ddb6596303814dd7a618df6c0ee4cd1c.jpg"
                  alt="eng"
                />
              </div>
            </li>
            <li className="dropdowns">
              EARRINGS
              <div className="submenu">
                <div className="subCat">
                  EARRINGS........................................................
                </div>
              </div>
            </li>
            <li className="dropdowns">
              BRACELETS & BANGLES
              <div className="submenu">
                <div className="subCat"></div>
              </div>
            </li>
            <li className="dropdowns">
              SOLITAIRES
              <div className="submenu">
                <div className="subCat"></div>
              </div>
            </li>
            <li className="dropdowns">
              MANGALSUTRA
              <div className="submenu">
                <div className="subCat"></div>
              </div>
            </li>
            <li className="dropdowns">
              OTHER JEWELLERY
              <div className="submenu">
                <div className="subCat"></div>
              </div>
            </li>
            <li className="dropdowns">
              GIFTING
              <div className="submenu">
                <div className="subCat"></div>
              </div>
            </li>
            <li className="dropdowns">
              BEST SELLERS
              <div className="submenu">
                <div className="subCat"></div>
              </div>
            </li>
          </ul>
        </div>
      </VStack>
    </div>
  );
};

export default Navbar;
