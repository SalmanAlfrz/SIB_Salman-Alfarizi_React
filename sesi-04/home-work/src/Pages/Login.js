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
import Navbar from '../Components/Navbar';
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
            <Navbar />
            <Box p={4} m={4} pl={8} pr={8} borderWidth='1px' shadow='md' overflow='hidden'>
                <Center>
                    <Text fontSize='xl'>Form Login</Text>
                </Center>
            </Box>
        </>
    );
}