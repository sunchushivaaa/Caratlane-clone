import { Box } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Box
      // bgGradient="radial(gray.200, yellow.400, purple.200)"
      // bg="tomato"
    >
      <Box marginTop={["60px", "80px", "100px"]}>
        <LoginForm />
      </Box>
    </Box>
  );
}
