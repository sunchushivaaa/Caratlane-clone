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
import { useRef, useState } from "react";

import { Link, useParams } from "react-router-dom";

const Data = [];

//name, details, MRP, MRPx

export default function CategoryComponent() {
  const { type } = useParams();
  const [name, setName] = useState({});
  const [update, setUpdate] = useState({});
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

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const isName = update.name === "";
  const isDetails = update.details === "";
  const isMRP = update.MRP === "";
  const isMRPx = update.MRPx === "";

  console.log(update);
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
        {Data.length === 0 ? (
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
            <Heading color="gray.300" as="h4" fontSize={["10px", "15px", "20px", "25px"]}>
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
                {Data.map((el) => {
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
              <Button colorScheme="red" onClick={deleteOnClose} ml={3}>
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
// [
//   {
//     _id: "6423f6e83c9eebb5b593bfe0",
//     id: 1,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_1_lar.jpg",
//     name: "Emma Flora Diamond Ring",
//     details: "Set in 18 KT White Gold(3.210 g) with diamonds (0.460 ct ,IJ-SI)",
//     MRP: 67905,
//     MRPx: 73114,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfea",
//     id: 11,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_1_lar.jpg",
//     name: "Pearly Twig Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 45467,
//     MRPx: 50498,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_4_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_5_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_7_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe6",
//     id: 7,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_1_lar.jpg",
//     name: "Interwind Shimmer Diamond Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 22499,
//     MRPx: 24999,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_4_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_5_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_6_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe3",
//     id: 4,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_1_lar.jpg",
//     name: "Pearly Twig Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 45467,
//     MRPx: 50498,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_4_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_5_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07508-1YP6P0_7_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe4",
//     id: 5,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_1_lar.jpg",
//     name: "Romeo Gold Band for Men",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 50105,
//     MRPx: 50498,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe2",
//     id: 3,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_1_lar.jpg",
//     name: "Meher Pearl Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 64520,
//     MRPx: 71229,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfed",
//     id: 14,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_1_lar.jpg",
//     name: "Interwind Shimmer Diamond Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 22499,
//     MRPx: 24999,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_4_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_5_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03768-YGP600_6_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe7",
//     id: 8,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_1_lar.jpg",
//     name: "Emma Flora Diamond Ring",
//     details: "Set in 18 KT White Gold(3.210 g) with diamonds (0.460 ct ,IJ-SI)",
//     MRP: 67902,
//     MRPx: 73114,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03126-WGP900_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     "setting-type": "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfeb",
//     id: 12,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_1_lar.jpg",
//     name: "Romeo Gold Band for Men",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 50105,
//     MRPx: 50498,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfef",
//     id: 16,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_1_lar.jpg",
//     name: "Meher Pearl Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 64520,
//     MRPx: 71229,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe5",
//     id: 6,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_1_lar.jpg",
//     name: "Claire Cluster Diamond Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 30200,
//     MRPx: 31938,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe1",
//     id: 2,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_1_lar.jpg",
//     name: "Mutyaa Pearl Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 36839,
//     MRPx: 39089,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe9",
//     id: 10,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_1_lar.jpg",
//     name: "Meher Pearl Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 64520,
//     MRPx: 71229,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07312-1YP6P0_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfec",
//     id: 13,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_1_lar.jpg",
//     name: "Claire Cluster Diamond Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 30200,
//     MRPx: 31938,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03397-YGP600_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfe8",
//     id: 9,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_1_lar.jpg",
//     name: "Mutyaa Pearl Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 36839,
//     MRPx: 39089,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
//   {
//     _id: "6423f6e83c9eebb5b593bfee",
//     id: 15,
//     imglink:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_1_lar.jpg",
//     name: "Mutyaa Pearl Ring",
//     details:
//       "Set in 14 KT Yellow Gold(2.680 g) with diamonds (0.163 ct ,GH-SI)",
//     MRP: 36839,
//     MRPx: 39089,
//     brand: "Ring",
//     video:
//       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_16_video.mp4",
//     img1: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_3_lar.jpg",
//     img2: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_4_lar.jpg",
//     img3: "https://cdn.caratlane.com/media/catalog/product/J/R/JR07311-1YP6P0_5_lar.jpg",
//     dimension: "Width - 6.3 mm, Height - 10.4 mm, Size - 12 (51.8 mm)",
//     weight: "Gross 3.302 g",
//     purity: "18KT",
//     diamondtype: "IJ-SI",
//     settingtype: "Plate Prong",
//     totalnum: "29",
//     totalweight: "0.345 ct",
//   },
// ]
