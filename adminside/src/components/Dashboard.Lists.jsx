import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import "@fontsource/roboto";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const lists = [
  "Rings",
  "Bracelets",
  "Mangalsutras",
  "Chains",
  "Ankelets",
  "Ear-rings",
  "Shit",
];
export default function Lists() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  const isName = name === "";

  return (
    <>
      <Box
        width="80%"
        margin="auto"
        marginTop={["40px", "60px", "80px"]}
        marginBottom="80px"
      >
        <Box textAlign="center" marginBottom="50px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Heading as="h3" fontSize={["18px", "20px", "25px", "30px"]}>
              Karat listings!
            </Heading>
            <Button
              fontSize={["12px", "12px", "14px", "16px"]}
              padding={["5px 12px", "5px 12px", "10px 15px", "15px"]}
              bg="#c55388"
              color="white"
              _hover={{ bg: "#ac3a6f" }}
              onClick={onOpen}
            >
              New
            </Button>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={["1fr", "repeat(2,1fr)", "repeat(3,1fr)"]}
          gap="15px"
        >
          {lists.map((el, i) => {
            return (
              <Link key={i} to={`/category/${el}`}>
                <Box
                  bg="pink.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={["15vh", "20vh", "25vh", "30vh"]}
                  borderRadius="10px"
                  cursor="pointer"
                  _hover={{
                    transition: "0.45s",
                    bg: "pink.300",
                  }}
                >
                  <Heading
                    as="h4"
                    fontSize={["14px", "14px", "18px", "22px"]}
                    color="rgb(137, 0, 75)"
                  >
                    {el}
                  </Heading>
                </Box>
              </Link>
            );
          })}
          <Box
            bg="gray.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={["15vh", "20vh", "25vh", "30vh"]}
            borderRadius="10px"
            cursor="pointer"
            onClick={() => {
              onOpen();
              setName("");
            }}
            _hover={{
              transition: "0.45s",
              bg: "gray.300",
            }}
          >
            <Heading
              as="h4"
              fontSize={["14px", "14px", "18px", "22px"]}
              color="black"
            >
              New+
            </Heading>
          </Box>
        </Box>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay zIndex="1000000">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Add Category
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                  Product name
                </FormLabel>
                <Input
                  name="name"
                  onChange={(e) => inputHandler(e)}
                  value={name}
                  variant="filled"
                  type="text"
                  placeholder="Add content"
                  fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                />
                {isName ? (
                  <FormHelperText
                    color="red"
                    fontSize={{ base: "10px", md: "12px", lg: "14px" }}
                  >
                    Add category name
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bg="rgb(137, 0, 75)"
                isDisabled={isName ? true : false}
                color="white"
                onClick={() => {
                  lists.push(name);
                  setName("");
                  onClose();
                  navigate(`/category/${name}`);
                }}
                ml={3}
              >
                Add
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
