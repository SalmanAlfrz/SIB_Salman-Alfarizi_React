import { Box, Heading, Image, Stack, Text, Button, Link, useColorModeValue } from "@chakra-ui/react"

export default function AboutMeetups({ value, hastag}) {
    return (
        <>
            <Text pl={4} pt={4} fontSize='2xl'>
                <b>About Meetup</b>
            </Text>
            <Stack ml={10} mr={10} mb={4} spacing={2}>
                <Text >
                    {value}
                </Text>
                <Text>
                    {hastag}
                </Text>
            </Stack>
        </>
    )
}