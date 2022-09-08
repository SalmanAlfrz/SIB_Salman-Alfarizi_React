import { Box, Heading, Image, Stack, Text, Button, Link, useColorModeValue } from "@chakra-ui/react"

export default function NextMeetups({ title, date, value}) {
    return (
        <>
            <Text pl={4} pt={4} fontSize='2xl'>
                <b>Next Meetup</b>
            </Text>
            <Box p={4} ml={10} mb={4} mt={4} mr={10} pl={8} pr={8} shadow='md' borderWidth='1px'>
                <Heading fontSize='lg'>{title}</Heading>
                <Text mt={4}>
                    {date}
                </Text>
                <Text mt={4}>
                    {value}
                </Text>
            </Box>
        </>
    )
}