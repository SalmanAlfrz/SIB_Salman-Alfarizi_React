import {
    Text,
    Grid
} from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import Meetups from '../Components/MeetUp';
import NextMeetups from '../Components/NextMeetUp';
import AboutMeetups from '../Components/AboutMeetUp';
import Members from '../Components/Members';
import PastMeetUp from '../Components/PastMeetUp';

export default function Home() {
    return (
        <>
            <Navbar />
            <Meetups title='Hacktiv8 Meetup' location='Jakarta, Indonesia' member='1,078' organisasi='Andy Wiranata' />
            <NextMeetups title='Awesome meetup and event!' date='25 January 2019' value="Hello, JavaScript & Node.js Ninjas!
                    Get ready for our montly meetup JakartaJS! This wil be our fifth meetup of 2018!
                    The meetup format will contain some short stories and technical talks.
                    If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
                    Remember 1o bring a photo ID to get through building security.
                    -----
                    See you there!
                    BestHengki, Giovanni, Sofian, Riza, Agung The JakartaJs Organizers"/>
            <AboutMeetups value='Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area.' hastag='Twitter: @JakartaJS and we use the hashtag #jakartajs' />
            <Members title='Organizers' name='Andy Wiranata' other='4 Others' />
            <Text pl={4} pt={4} fontSize='2xl'>
                <b>Past Meetups</b>
            </Text>
            <Grid ml={10} mt={4} mr={10} mb={4} templateColumns='repeat(3, 1fr)' gap={20}>
                <PastMeetUp date='27 November 2017' value='#39 JakartaJS April Meetup with kumparan' footer='139 went'/>
                <PastMeetUp date='27 November 2017' value='#39 JakartaJS April Meetup with BliBli' footer='113 went'/>
                <PastMeetUp date='27 November 2017' value='#39 JakartaJS April Meetup with Hacktiv8' footer='110 went'/>
            </Grid>
        </>
    );
}