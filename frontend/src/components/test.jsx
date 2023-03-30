import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  Button,
  MenuList,
  useColorModeValue,
  Image,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input
} from "@chakra-ui/react";
import {FaMapMarkerAlt} from "react-icons/fa"

 const Test= ()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
        w="60%"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMwxHCcoYJ75isaa6LYZUsoa3aWeH4a_P9InqoaB2HzK6sfiaE"
          alt="map"
        />
        <Text fontSize="14px">ENTER YOUR PINCODE</Text>
        <Text m="auto" mb={5} w="90%" fontSize="12px" pt="5px">
          To know more about fast delivery, availability of COD, Free Try at
          Home and stores near you.
        </Text>
        <InputGroup marginLeft={10} w="90%">
          <InputLeftElement
            pointerEvents="none"
            children={
              <Flex ml="10px" m="auto" borderColor="#b55cef">
                <FaMapMarkerAlt ml="10px" /> <Text fontSize="xs">PINCODE</Text>
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
            <FaMapMarkerAlt ml="10px" /> <Text fontSize="xs">Locate me</Text>
          </Flex>
        </Button>
      </MenuList>
    </Menu>
  );
}
export default Test