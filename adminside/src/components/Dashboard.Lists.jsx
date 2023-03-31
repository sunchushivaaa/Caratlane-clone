import { Box, Heading } from "@chakra-ui/react";
import "@fontsource/roboto";
import { Link } from "react-router-dom";

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
  return (
    <Box marginTop="40px" marginBottom="80px">
      <Box textAlign="center" marginBottom="50px">
        <Heading as="h3" size="lg">
          Here are your listings!
        </Heading>
      </Box>
      <Box
        width="80%"
        margin="auto"
        display="grid"
        gridTemplateColumns="repeat(3,1fr)"
        gap="15px"
      >
        {lists.map((el, i) => {
          return (
            <Link key={i} to={`/category/${el}`}>
              <Box
                bg="pink.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="30vh"
                borderRadius="10px"
                cursor="pointer"
                _hover={{
                  transition: "0.45s",
                  bg: "pink.200",
                }}
              >
                <Heading as="h5" size="md" color="rgb(137, 0, 75)">
                  {el}
                </Heading>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
