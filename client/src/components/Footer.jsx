import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="pink.500" color="white" py={4} px={{ base: 4, md: 8 }}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Flex align="center" mb={{ base: 4, md: 0 }}>
          <Image src="https://www.statxo.com/wp-content/uploads/2022/04/Logo.png" alt="Statxo Logo" h={8} mr={2} />
          <Text fontSize="lg" fontWeight="bold">Statxo</Text>
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
