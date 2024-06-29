// src/components/Home.js
// import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/datavideo.mp4';

const Home = () => {
  const direction = useBreakpointValue({ base: 'column-reverse', md: 'row' });
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  return (
    <Stack minH={'100vh'} direction={direction}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Taskopia
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
            Efficient Task Management made easier.
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          This is a powerful and intuitive task management tool designed to streamline your business operations. Whether you need to manage large volumes of tasks, track financial metrics, or ensure timely updates, it has you covered. With real-time editing, detailed tracking, and a user-friendly interface, It helps you stay organized and in control.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={handleLoginClick}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Login
            </Button>
            <Button onClick={handleSignUpClick} rounded={'full'}>SignUp</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'} p={8}>
        <video
          width="100%"
          height="auto"
          controls
          autoPlay
          muted
          loop
          style={{ borderRadius: '15px', maxWidth: '600px', maxHeight: '400px' }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Flex>
    </Stack>
  );
};

export default Home;
