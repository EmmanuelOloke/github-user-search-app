import React from 'react';
import { Box, Text, Input, Button, Image, Icon } from '@chakra-ui/react';

import { FaMoon, FaSearch } from 'react-icons/fa';

import octocat from './image/octocat.png';

function App() {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w={700} border="1px" borderColor="red.200">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          mb={4}
        >
          <Text fontWeight="bold" fontSize="2xl">
            devfinder
          </Text>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Text fontWeight="bold" mr={2}>
              DARK
            </Text>
            <Icon as={FaMoon} fontSize="20" />
          </Box>
        </Box>

        <Box
          borderColor="red"
          border="1px"
          display="flex"
          alignItems="center"
          gap={3}
          backgroundColor="#ffffff"
          p={3}
          borderRadius="lg"
        >
          <FaSearch color="blue" fontSize="30px" fontWeight="normal" />
          <Input placeholder="Search GitHub username..." py="" />
          <Button colorScheme="blue" color="white" px="7" py="6" type="submit">
            Search
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" px="6" py="6">
          <Box display="flex" flexDirection="row" alignItems="flex-start">
            <Image src={octocat} w="7rem" borderRadius="50%" mr={10} />

            <Box display="flex" flexDirection={{}}>
              <Box
                mr={{
                  sm: '25',
                  md: '28',
                  lg: '30',
                  xl: '28',
                  base: '25',
                }}
              >
                <Text fontWeight="bold" fontSize="2xl">
                  The Octocat
                </Text>
                <Text color="blue">@octocat</Text>
              </Box>

              <Box mt={{ lg: '1' }}>Joined 25 Jan 2011</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
