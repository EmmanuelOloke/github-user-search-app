import React, { useEffect } from 'react';

import { useState } from 'react';

import {
  Box,
  Text,
  Input,
  Button,
  Image,
  Icon,
  IconButton,
  Link,
  useColorMode,
  HStack,
  useToast,
} from '@chakra-ui/react';

import {
  FaMoon,
  FaSun,
  FaSearch,
  FaMapMarkerAlt,
  FaLink,
  FaTwitter,
  FaBuilding,
} from 'react-icons/fa';

import moment from 'moment';

// import octocat from './image/octocat.png';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();

  const [inputContent, setInputContent] = useState('');

  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputContent) {
      toast({
        title: 'Please enter a GitHub username',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    fetchUser(inputContent);
  };

  const fetchUser = async (inputContent = 'octocat') => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputContent}`
      );
      const user = await response.json();
      if (response.status === 200) {
        setUser(user);
        console.log(user);
      }
    } catch (error) {
      console.log('Something went wrong while fetching user.', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor=""
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
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            onClick={toggleColorMode}
          >
            <Text fontWeight="bold" mr={2} cursor="pointer">
              {colorMode === 'light' ? 'DARK' : 'LIGHT'}
            </Text>
            <IconButton
              backgroundColor="none"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              fontSize="20"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={3}
          backgroundColor=""
          p={3}
          borderRadius="lg"
          mb={5}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <form onSubmit={handleSubmit}>
            <HStack
              width="2xl"
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
            >
              <FaSearch color="blue" fontSize="30px" fontWeight="normal" />
              <Input
                placeholder="Search GitHub username..."
                py=""
                border="none"
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
              />
              <Button
                colorScheme="blue"
                color="white"
                px="7"
                py="6"
                type="submit"
              >
                Search
              </Button>
            </HStack>
          </form>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          px="10"
          py="10"
          borderRadius="lg"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          backgroundColor=""
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Image src={user.avatar_url} w="7rem" borderRadius="50%" mr={5} />

            <Box display="flex" flexDirection="column">
              <Box
                display="flex"
                flexDirection={{ lg: 'row' }}
                mb={5}
                justifyContent="space-between"
              >
                <Box mr={{}}>
                  <Text fontWeight="bold" fontSize="2xl">
                    {user.name}
                  </Text>
                  <Text color="blue">@{user.login}</Text>
                </Box>

                <Box
                  mt={{ sm: '1', lg: '1', xl: '1', base: '1' }}
                  fontSize="sm"
                >
                  Joined {moment(user?.created_at).format('D MMMM YYYY')}
                </Box>
              </Box>

              <Text>{user.bio || 'This user has no bio'}</Text>

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
                    {user.public_repos}
                  </Text>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Text fontSize="sm">Followers</Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    {user.followers}
                  </Text>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Text fontSize="sm">Following</Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    {user.following}
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
                    <Text>{user.location}</Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={5}
                  >
                    <Icon as={FaLink} />
                    <Link>{user.blog}</Link>
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
                    <Text>{user.twitter_username || 'Not Available'}</Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={5}
                  >
                    <Icon as={FaBuilding} />
                    <Text>{user.company || 'No Company'}</Text>
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
