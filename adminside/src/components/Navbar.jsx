import {
  Heading,
  Box,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Icon from "react-icons-kit";
import { user } from "react-icons-kit/ikons/user";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUTUSERCALL } from "../redux/actions";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { token, user: name } = useSelector((store) => store);

  const cancelRef = useRef();
  return (
    <>
      <Box
        bg="rgb(137, 0, 75)"
        color="white"
        padding={["15px 20px", "15px 30px", "25px 50px"]}
        position="sticky"
        top="0"
        width="100%"
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        zIndex="1000000"
      >
        <Box display="flex" alignItems="flex-end">
          <Heading as="h1" fontSize={["28px", "30px", "35px"]} marginRight="1">
            Karat
          </Heading>
          <Text fontSize={["15px", "18px", "20px"]}> Admin</Text>
        </Box>
        <Box
          width={["40%", "35%", "30%", "25%", "20%", "15%"]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{ display: token ? "flex" : "none" }}
        >
          <Box>
            <Button
              fontSize={["12px", "12px", "14px", "16px"]}
              padding={["5px 12px", "5px 12px", "10px 15px", "15px"]}
              bg="#f1c4d8"
              cursor="pointer"
              color="black"
            >
              Main Website
            </Button>
          </Box>
          <Box cursor="pointer">
            <Icon onClick={onOpen} size="25px" icon={user} />
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
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>
              <b>{name.name}</b>, Do you want to logout?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                  LOGOUTUSERCALL(dispatch);
                }}
                ml={3}
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
