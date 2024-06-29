// import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post('https://statxo-assign.onrender.com/users/logout');
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <Box>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
};

export default Logout;