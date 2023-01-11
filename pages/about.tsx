import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react"
import { NavigationBar } from "../components/navigation-bar/navigation-bar"
import profilePicture from "../assets/profile.jpeg"

export default function About() {
	return (
		<>
			<NavigationBar />
			<Box mx="auto" w="300px">
				<Center>
					<Flex flexDir="column">
						<Text fontSize="xx-large" mx="auto" fontWeight="bold">
							ABOUT
						</Text>
						<Center>
							<Image
								src={profilePicture.src}
								alt="profile picture"
								w="200px"
								borderRadius="50%"
								my="10"
							/>
						</Center>
						<Text fontSize="lg" mb="10">
							Have you ever wondered what the general consensus of the age old
							question, &quot;Pineapple on Pizza?&quot; is? You&apos;ve come to
							the right place! Every vote matters so spread the word and vote
							today!
						</Text>
						<Text mx="auto">Created by: David Shin</Text>
						<Link href="https://www.david-sh.in" mx="auto">
							david-sh.in
						</Link>
					</Flex>
				</Center>
			</Box>
		</>
	)
}
