import { Box, HStack, Image, Stack, Text, Button, Link, useColorModeValue } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function Meetups({title, location, member, organisasi, link}) {
    return (
        <Box p={4} m={4} pl={8} pr={8} borderWidth='1px' shadow='md' overflow='hidden'>
            <HStack spacing={5}>
                <Image boxSize='250px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                <Stack spacing={4}>
                    <Text fontSize='2xl'>
                        <b>{title}</b>
                    </Text>
                    <HStack spacing={10}>
                        <Text fontSize='lg'>Location</Text>
                        <Text fontSize='lg'>{location}</Text>
                    </HStack>
                    <HStack spacing={10}>
                        <Text fontSize='lg'>Member</Text>
                        <Text fontSize='lg'>{member}</Text>
                    </HStack>
                    <HStack spacing={6}>
                        <Text fontSize='lg'>Organizers</Text>
                        <Text fontSize='lg'>{organisasi}</Text>
                    </HStack>
                    <Button to={link}>Join Us</Button>
                </Stack>
            </HStack>
        </Box>
    )
}