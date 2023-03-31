import { Text, Box } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%" padding="10px" bg="white">
      <Text
        textAlign="center"
        fontSize={{ base: "10px", md: "12px", lg: "14px" }}
      >
        <Text as="b">Karat</Text> is an Indian physical and online jewelry
        retailer, headquartered in Chennai, India.{" "}
      </Text>
    </Box>
  );
}
