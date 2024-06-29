import { useState } from 'react';
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
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const toast = useToast();

  const handleSignup = async () => {
    setNameError('');
    setEmailError('');
    setPasswordError('');

    if (!name) {
      setNameError('Name is required');
      return;
    }
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('https://statxo-assign.onrender.com/users/register', { name, email, password });
      toast({
        title: 'Signup successful',
        description: response.data.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      navigate('/login');
    } catch (error) {
      console.error('Signup error', error);
      toast({
        title: 'Signup error',
        description: error.response?.data?.message || 'An error occurred. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  function handlenaviagte(){
    navigate('/login')
  }

  return (
    <Box maxW="md" mx="auto" mt={10} p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <VStack spacing={4}>
        <Heading as="h2" size="lg">Signup</Heading>
        <FormControl isInvalid={!!nameError}>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {!nameError ? (
            <FormHelperText>Enter your full name.</FormHelperText>
          ) : (
            <FormErrorMessage>{nameError}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!emailError}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {!emailError ? (
            <FormHelperText>Enter your email address.</FormHelperText>
          ) : (
            <FormErrorMessage>{emailError}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!passwordError}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {!passwordError ? (
            <FormHelperText>Choose a secure password.</FormHelperText>
          ) : (
            <FormErrorMessage>{passwordError}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          rounded={"full"}
          bg={"pink.600"}
          color={"white"}
          onClick={handleSignup}
          isLoading={isLoading}
          width="100%" 
          _hover={{
            bg: "pink.400",
          }}
        >
          SignUp
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
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Signup;
