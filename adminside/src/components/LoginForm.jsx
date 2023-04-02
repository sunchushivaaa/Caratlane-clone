import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Center,
  Heading,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USERCALL } from "../redux/actions";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};
export default function LoginForm() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    USERCALL(dispatch, form).then(() => navigate("/dashboard"));
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const isEmail = form.email === "";
  const isPassword = form.password === "";

  // useEffect(() => {}, []);

  return (
    <Center>
      <Box margin="auto" width={["70%", "60%", "55%", "40%"]}>
        <Heading
          as="h3"
          fontSize={["22px", "23px", "28px", "30px"]}
          textAlign="center"
          marginBottom={{ base: "18px", md: "20px", lg: "30px" }}
        >
          User Login
        </Heading>
        <form onSubmit={(e) => submitHandler(e)}>
          <FormControl isRequired>
            <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
              Email Address
            </FormLabel>
            <Input
              name="email"
              onChange={(e) => inputHandler(e)}
              value={form.email}
              variant="filled"
              type="email"
              placeholder="Email address"
              fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            />
            {isEmail ? (
              <FormHelperText
                color="red"
                fontSize={{ base: "10px", md: "12px", lg: "14px" }}
              >
                Email is required
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
              Password
            </FormLabel>
            <Input
              name="password"
              onChange={(e) => inputHandler(e)}
              value={form.password}
              variant="filled"
              type="password"
              placeholder="Password"
              fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            />
            {isPassword ? (
              <FormHelperText
                color="red"
                fontSize={{ base: "10px", md: "12px", lg: "14px" }}
              >
                Enter password
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
          <br />
          <Input
            type="submit"
            cursor="pointer"
            fontSize={{ base: "14px", md: "16px", lg: "17px" }}
            disabled={form.email === "" && form.password === ""}
            bg="rgb(137, 0, 75)"
            border="none"
            color="white"
          />
        </form>
      </Box>
    </Center>
  );
}
