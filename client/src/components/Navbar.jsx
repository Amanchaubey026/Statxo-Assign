// import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useToast, HStack, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
// import logo from './path-to-your-logo/statxo.png'; // Add your logo image path here

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = JSON.parse(localStorage.getItem('user'));
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(userData);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate('/login');
  };

  return (
    <Box bg="white" px={4} position="sticky" top={0} zIndex={1}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: !isOpen ? 'none' : 'inherit' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>
            <Link to={'/'}>
              <Image src={`https://www.statxo.com/wp-content/uploads/2022/04/Logo.png`} alt="Statxo" boxSize="150px" objectFit="contain" />
            </Link>
          </Box>
        </HStack>
        <Flex alignItems="center">
          <Menu>
            <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
              <Avatar size="sm" src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-flat-user-pattern-round-avatar-pattern-image_1200096.jpg" />
            </MenuButton>
            <MenuList>
              {isLoggedIn ? (
                <>
                  <MenuItem>{user?.email}</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
              ) : (
                <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Flex as="nav" spacing={4}>
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
