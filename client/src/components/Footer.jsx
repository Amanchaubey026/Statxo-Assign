import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="pink.500" color="white" py={4} px={{ base: 4, md: 8 }}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Flex align="center" mb={{ base: 4, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold">Statxo</Text>
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Link href="#" mx={2} my={{ base: 2, md: 0 }} _hover={{ textDecoration: 'underline' }}>About Us</Link>
          <Link href="#" mx={2} my={{ base: 2, md: 0 }} _hover={{ textDecoration: 'underline' }}>Services</Link>
          <Link href="#" mx={2} my={{ base: 2, md: 0 }} _hover={{ textDecoration: 'underline' }}>Contact</Link>
        </Flex>
      </Flex>
      <Text textAlign="center" mt={4} fontSize="sm">
        &copy; {new Date().getFullYear()} Statxo. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
