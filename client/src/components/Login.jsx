import { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useToast,
  VStack,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://statxo-assign.onrender.com/users/login",
        { email, password }
      );
      const { accessToken, data } = response.data;

      // Save token and user details to local storage
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(data));

      toast({
        title: "Login successful",
        description: "You have been logged in successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/tasks");
    } catch (error) {
      console.error("Login error", error);

      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast({
        title: "Login error",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      if (error.response?.status === 400 && error.response?.data?.errors) {
        error.response.data.errors.forEach((err) => {
          if (err.param === "email") setEmailError(err.msg);
          if (err.param === "password") setPasswordError(err.msg);
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  function handlenaviagte() {
    navigate("/signup");
  }
  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <VStack spacing={4}>
        <Heading as="h2" size="lg">
          Login
        </Heading>
        <FormControl isInvalid={!!emailError}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!emailError ? (
            <FormHelperText>Enter your email address.</FormHelperText>
          ) : (
            <FormErrorMessage>{emailError}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!passwordError}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!passwordError ? (
            <FormHelperText>Enter your password.</FormHelperText>
          ) : (
            <FormErrorMessage>{passwordError}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          rounded={"full"}
          bg={"pink.600"}
          color={"white"}
          onClick={handleLogin}
          isLoading={isLoading}
          width="100%"
          _hover={{
            bg: "pink.400",
          }}
        >
          Login
        </Button>
        <Button
          rounded={"full"}
          bg={"pink.600"}
          color={"white"}
          onClick={handlenaviagte}
          isLoading={isLoading}
          width="100%"
          _hover={{
            bg: "pink.400",
          }}
        >
          Signup
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
