import { Box, HStack, Image, Stack, Text, Button, Link, useColorModeValue } from "@chakra-ui/react"

export default function PastMeetUp({ date, value, footer, link}) {
    return (
        <>
            <Box w='100%' p={4} shadow='md' borderWidth='1px'>
                <Stack spacing={3}>
                    <Text fontSize='lg'>
                        {date}
                        <hr></hr>
                    </Text>
                    <Text fontSize='lg'>
                        {value}
                    </Text>
                    <Text fontSize='lg'>
                        {footer}
                    </Text>
                    <Button to={link}>
                        View
                    </Button>
                </Stack>
            </Box>
        </>
    )
}