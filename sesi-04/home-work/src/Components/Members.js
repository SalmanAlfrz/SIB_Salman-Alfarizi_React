import { Box, HStack, Image, Stack, Text, Button, Link, useColorModeValue } from "@chakra-ui/react"

export default function Members({ title, name, other}) {
    return (
        <>
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
                        <Text fontSize='lg' mr={10}>{title}</Text>
                        <HStack spacing={5}>
                            <Text fontSize='lg'>{name}</Text>
                            <Text fontSize='lg'>{other}</Text>
                        </HStack>
                    </Stack>
                </HStack>
            </Box>
        </>
    )
}