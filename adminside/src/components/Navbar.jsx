import { Heading, Box, Text, Button } from "@chakra-ui/react";
import Icon from "react-icons-kit";
import { user } from "react-icons-kit/ikons/user";

export default function Navbar() {
  return (
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
    >
      <Box display="flex" alignItems="flex-end">
        <Heading as="h1" fontSize={["28px", "30px", "35px"]} marginRight="1">
          Karat
        </Heading>
        <Text fontSize={["15px", "18px", "20px"]}> Admin</Text>
      </Box>
      <Box
        width="15%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Button
            // isLoading={true}
            bg="blackAlpha.100"
            cursor="pointer"
            color="black"
          >
            Return to Main
          </Button>
        </Box>
        <Box>
          <Icon color="grey" size="25px" icon={user} />
        </Box>
      </Box>
    </Box>
  );
}
