import { Box, Heading } from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Category() {
  const { type } = useParams();

  return (
    <Box>
      <Heading as="h1">{type}</Heading>
    </Box>
  );
}
