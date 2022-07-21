import React from 'react';
import { Box, Text, IconButton, Input, Button } from '@chakra-ui/react';

import { FaMoon, FaSearch } from 'react-icons/fa';

function App() {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w={800} border="1px" borderColor="red.200">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          my={8}
        >
          <Text fontWeight="bold" fontSize="2xl">
            devfinder
          </Text>
          <IconButton icon={<FaMoon />} isRound="true" />
        </Box>

        <Box display="flex">
          <FaSearch />
          <Input
            pos="relative"
            placeholder="Search GitHub username..."
            py="6"
          />
          <Button pos="absolute" right colorScheme="blue" px="8" type="submit">
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
