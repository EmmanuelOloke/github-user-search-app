import React from 'react';
import { Box, Text, Input, Button, Image, Icon, Link } from '@chakra-ui/react';

import {
  FaMoon,
  FaSearch,
  FaMapMarkerAlt,
  FaLink,
  FaTwitter,
  FaBuilding,
} from 'react-icons/fa';

import octocat from './image/octocat.png';

function App() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#f4f7ff"
    >
      <Box w={700}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          mb={8}
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
          display="flex"
          alignItems="center"
          gap={3}
          backgroundColor="#ffffff"
          p={3}
          borderRadius="lg"
          mb={5}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <FaSearch color="blue" fontSize="30px" fontWeight="normal" />
          <Input placeholder="Search GitHub username..." py="" />
          <Button colorScheme="blue" color="white" px="7" py="6" type="submit">
            Search
          </Button>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          px="10"
          py="6"
          borderRadius="lg"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          backgroundColor="#ffffff"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Image src={octocat} w="7rem" borderRadius="50%" mr={10} />

            <Box display="flex" flexDirection="column">
              <Box display="flex" flexDirection={{ lg: 'row' }} mb={5}>
                <Box
                  mr={{
                    sm: '25',
                    md: '28',
                    lg: '35',
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

              <Text>This profile has no bio.</Text>

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                backgroundColor="#f4f7ff"
                borderRadius="lg"
                px={10}
                py={5}
                mt={10}
              >
                <Box display="flex" flexDirection="column">
                  <Text fontSize="sm">Repo</Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    8
                  </Text>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Text fontSize="sm">Followers</Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    6433
                  </Text>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Text fontSize="sm">Following</Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    9
                  </Text>
                </Box>
              </Box>

              <Box display="flex" flexDirection="row" gap={10} mt={10}>
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={5}
                  >
                    <Icon as={FaMapMarkerAlt} />
                    <Text>San Francisco</Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={5}
                  >
                    <Icon as={FaLink} />
                    <Link>https://github.blog</Link>
                  </Box>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={5}
                  >
                    <Icon as={FaTwitter} />
                    <Text>Not Available</Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={5}
                  >
                    <Icon as={FaBuilding} />
                    <Text>@github</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
