import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Image,
  Text,
  Tr,
  Th,
  Td,
  TableContainer,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

import { Link, useParams } from "react-router-dom";
import {
  DATACALL,
  DATACLEARCALL,
  DATADELETECALL,
  DATAUPDATECALL,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CategoryComponent() {
  const { type } = useParams();
  const [name, setName] = useState({});
  const [update, setUpdate] = useState({});
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store);
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();
  const {
    isOpen: updateIsOpen,
    onOpen: updateOnOpen,
    onClose: updateOnClose,
  } = useDisclosure();
  const cancelRef = useRef();
  const cancelRef2 = useRef();

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdate({ ...update, [name]: value });
  };

  // console.log(update);
  const submitHandler = (e) => {
    e.preventDefault();
    DATAUPDATECALL(dispatch, { id: update._id, data: update });
  };

  const isName = update.name === "";
  const isDetails = update.details === "";
  const isMRP = update.MRP === "";
  const isMRPx = update.MRPx === "";

  useEffect(() => {
    DATACALL(dispatch, type);
    return () => {
      DATACLEARCALL(dispatch);
    };
  }, []);

  return (
    <>
      <Box
        width="80%"
        margin="auto"
        marginTop={["30px", "40px", "50px"]}
        marginBottom="80px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={["20px", "30px", "50px"]}
        >
          <Button
            fontSize={["12px", "12px", "14px", "16px"]}
            padding={["5px 12px", "5px 12px", "10px 15px", "15px"]}
          >
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Heading
            fontSize={["18px", "20px", "25px", "30px"]}
            textDecoration="underline"
            color="pink.800"
            textTransform="capitalize"
          >
            {type}
          </Heading>
          <Button
            fontSize={["12px", "12px", "14px", "16px"]}
            padding={["5px 12px", "5px 12px", "10px 15px", "15px"]}
          >
            Add
          </Button>
        </Box>
        {products?.length === 0 && !isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={["20vh", "30vh", "40vh"]}
          >
            <WarningIcon
              color="red.300"
              fontSize={["18px", "20px", "25px", "30px"]}
              marginRight={["5px", "8px", "10px"]}
            />
            <Heading
              color="gray.300"
              as="h4"
              fontSize={["10px", "15px", "20px", "25px"]}
            >
              No items found!
            </Heading>
          </Box>
        ) : (
          <TableContainer>
            <Table variant="simple" colorScheme="pink">
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Update</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products?.map((el) => {
                  return (
                    <Tr key={el._id}>
                      <Td>
                        <Image
                          boxSize={["80px", "90px", "100px"]}
                          objectFit="contain"
                          src={el.imglink}
                          alt={el.name}
                        />
                      </Td>
                      <Td>
                        <Heading
                          letterSpacing="0.8px"
                          fontSize={["12px", "14px", "20px"]}
                          marginBottom={["5px", "8px", "10px"]}
                        >
                          {el.name}
                        </Heading>
                        <Text
                          letterSpacing="0.6px"
                          fontSize={["10px", "12px", "14px"]}
                        >
                          <b>MRP</b>: - {el.MRP}
                        </Text>
                        <Text
                          letterSpacing="0.6px"
                          fontSize={["10px", "12px", "14px"]}
                        >
                          <b>After discount</b>: - {el.MRPx}
                        </Text>
                      </Td>
                      <Td>
                        <Button
                          fontSize={["12px", "12px", "14px", "16px"]}
                          padding={[
                            "5px 12px",
                            "5px 12px",
                            "10px 15px",
                            "15px",
                          ]}
                          onClick={() => {
                            updateOnOpen();
                            setUpdate(el);
                          }}
                        >
                          Update
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          bg="red.600"
                          color="white"
                          fontSize={["12px", "12px", "14px", "16px"]}
                          padding={[
                            "5px 12px",
                            "5px 12px",
                            "10px 15px",
                            "15px",
                          ]}
                          onClick={() => {
                            deleteOnOpen();
                            setName(el);
                          }}
                          _hover={{
                            bg: "#E53E3E",
                          }}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <AlertDialog
        isOpen={deleteIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={deleteOnClose}
      >
        <AlertDialogOverlay zIndex="1000000">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Item
            </AlertDialogHeader>

            <AlertDialogBody>
              <b>{name.name}</b>, want to delete it?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={deleteOnClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteOnClose();
                  DATADELETECALL(dispatch, name._id);
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <AlertDialog
        isOpen={updateIsOpen}
        leastDestructiveRef={cancelRef2}
        onClose={updateOnClose}
      >
        <AlertDialogOverlay zIndex="1000000">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Update Item
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                  Product name
                </FormLabel>
                <Input
                  name="name"
                  onChange={(e) => inputHandler(e)}
                  value={update.name}
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
                    Add Product name
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                  Details
                </FormLabel>
                <Input
                  name="details"
                  onChange={(e) => inputHandler(e)}
                  value={update.details}
                  variant="filled"
                  type="text"
                  placeholder="Add content"
                  fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                />
                {isDetails ? (
                  <FormHelperText
                    color="red"
                    fontSize={{ base: "10px", md: "12px", lg: "14px" }}
                  >
                    Add Product details
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                  Maximum Retail Price
                </FormLabel>
                <Input
                  name="MRP"
                  onChange={(e) => inputHandler(e)}
                  value={update.MRP}
                  variant="filled"
                  type="number"
                  placeholder="Add content"
                  fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                />
                {isMRP ? (
                  <FormHelperText
                    color="red"
                    fontSize={{ base: "10px", md: "12px", lg: "14px" }}
                  >
                    Add MRP
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                  Discount price
                </FormLabel>
                <Input
                  name="MRPx"
                  onChange={(e) => inputHandler(e)}
                  value={update.MRPx}
                  variant="filled"
                  type="number"
                  placeholder="Add content"
                  fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                />
                {isMRPx ? (
                  <FormHelperText
                    color="red"
                    fontSize={{ base: "10px", md: "12px", lg: "14px" }}
                  >
                    Add Discount
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
              <br />
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef2} onClick={updateOnClose}>
                Cancel
              </Button>
              <Button
                bg="rgb(137, 0, 75)"
                color="white"
                onClick={(e) => {
                  updateOnClose();
                  submitHandler(e);
                }}
                ml={3}
              >
                Update
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
