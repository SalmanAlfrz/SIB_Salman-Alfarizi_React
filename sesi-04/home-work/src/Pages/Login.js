import {
    Box,
    Center,
    Text,
} from '@chakra-ui/react';
import Navbar from '../Components/Navbar';


export default function Login() {
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