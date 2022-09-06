import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    Text,
    Heading,
    Grid
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children, to }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={to}>
        {children}
    </Link>
);

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box p={4} m={4} pl={8} pr={8} borderWidth='1px' shadow='md' overflow='hidden'>
                <HStack spacing={5}>
                    <Image boxSize='250px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Stack spacing={4}>
                        <Text fontSize='2xl'>
                            <b>Hacktiv8 Meetup</b>
                        </Text>
                        <HStack>
                            <Text fontSize='lg' mr={10}>Location</Text>
                            <Text fontSize='lg'>Jakarta, Indonesia</Text>
                        </HStack>
                        <HStack>
                            <Text fontSize='lg' mr={10}>Member</Text>
                            <Text fontSize='lg'>1,078</Text>
                        </HStack>
                        <HStack>
                            <Text fontSize='lg' mr={10}>Organizers</Text>
                            <Text fontSize='lg'>Andy Wiranata</Text>
                        </HStack>
                        <Button>Join Us</Button>
                    </Stack>
                </HStack>
            </Box>
            <Text pl={4} pt={4} fontSize='2xl'>
                <b>Next Meetup</b>
            </Text>
            <Box p={4} ml={10}  mb={4} mt={4} mr={10} pl={8} pr={8} shadow='md' borderWidth='1px'>
                <Heading fontSize='lg'>Awesome meetup and event!</Heading>
                <Text mt={4}>
                    25 January 2019
                </Text>
                <Text mt={4}>
                    Hello, JavaScript & Node.js Ninjas! <br />
                    Get ready for our montly meetup JakartaJS! This wil be our fifth meetup of 2018!<br />
                    The meetup format will contain some short stories and technical talks.<br />
                    If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
                    <br />
                    Remember 1o bring a photo ID to get through building security.
                    <br />
                    -----
                    <br />
                    See you there!
                    BestHengki, Giovanni, Sofian, Riza, Agung The JakartaJs Organizers
                </Text>
            </Box>
            <Text pl={4} pt={4} fontSize='2xl'>
                <b>About Meetup</b>
            </Text>
            <Stack ml={10} mr={10} mb={4} spacing={2}>
                <Text >
                    Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area.
                </Text>
                <Text>
                    Twitter: @JakartaJS and we use the hashtag #jakartajs
                </Text>
            </Stack>
            <Text pl={4} pt={4} fontSize='2xl'>
                <b>Member</b>
            </Text>
            <Box p={4} ml={10} mt={4} mb={4} mr={10} pl={8} pr={8} shadow='md' borderWidth='1px'>
                <HStack spacing={5}>
                    <Image borderRadius='full'
                        boxSize='100px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov' />
                    <Stack spacing={4}>
                        <Text fontSize='lg' mr={10}>Organizers</Text>
                        <HStack spacing={5}>
                            <Text fontSize='lg'>Andy Wiranata</Text>
                            <Text fontSize='lg'>4 others</Text>
                        </HStack>
                    </Stack>
                </HStack>
            </Box>
            <Text pl={4} pt={4} fontSize='2xl'>
                <b>Past Meetups</b>
            </Text>
            <Grid ml={10} mt={4} mr={10} mb={4} templateColumns='repeat(3, 1fr)' gap={20}>
                <Box w='100%' p={4} shadow='md' borderWidth='1px'>
                    <Stack spacing={3}>
                        <Text fontSize='lg'>
                            27 November 2017
                            <hr></hr>
                        </Text>
                        <Text fontSize='lg'>
                            #39 JakartaJS April Meetup with
                            kumparan
                        </Text>
                        <Text fontSize='lg'>
                            139 went
                        </Text>
                        <Button>
                            View
                        </Button>
                    </Stack>
                </Box><Box w='100%' p={4} shadow='md' borderWidth='1px'>
                    <Stack spacing={3}>
                        <Text fontSize='lg'>
                            27 November 2017
                            <hr></hr>
                        </Text>
                        <Text fontSize='lg'>
                            #39 JakartaJS April Meetup with
                            BliBli
                        </Text>
                        <Text fontSize='lg'>
                            113 went
                        </Text>
                        <Button>
                            View
                        </Button>
                    </Stack>
                </Box><Box w='100%' p={4} shadow='md' borderWidth='1px'>
                    <Stack spacing={3}>
                        <Text fontSize='lg'>
                            27 November 2017
                            <hr></hr>
                        </Text>
                        <Text fontSize='lg'>
                            #39 JakartaJS April Meetup with
                            Hacktiv8
                        </Text>
                        <Text fontSize='lg'>
                            110 went
                        </Text>
                        <Button>
                            View
                        </Button>
                    </Stack>
                </Box>
            </Grid>
        </>
    );
}