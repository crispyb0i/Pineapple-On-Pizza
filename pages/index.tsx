import firebase from "../firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { Box, Button, Center, Flex, Link, Text } from "@chakra-ui/react"
import "firebase/compat/auth"
import { useState, useEffect } from "react"
import { NavigationBar } from "../components/navigation-bar/navigation-bar"

export default function Home() {
	const db = firebase.firestore()
	const [option, setOption] = useState("")
	const [user, loading, error] = useAuthState(firebase.auth() as any)
	const [votes, votesLoading, votesError] = useCollection(
		firebase.firestore().collection("votes") as any
	)

	//Create document function
	const addVoteDocument = async (vote: string) => {
		if (!user) return
		await db.collection("votes").doc(user.uid).set({
			vote,
		})
	}

	return (
		<>
			<NavigationBar />
			<Box h="80vh">
				<Center h="100%">
					<Flex flexDirection="column">
						<Center>
							<Flex flexDir="column">
								<Text fontSize="4xl" fontWeight="bold" mb="8">
									Pineapple on Pizza?
								</Text>
								<Box mb="5">
									<Button
										fontSize="5xl"
										w="100%"
										h="110px"
										onClick={() => addVoteDocument("yes")}
										border="2px solid lightgray"
									>
										✅🍍🍕
									</Button>
									<Text fontSize="2xl" fontWeight="bold">
										Pineapple Lovers:{" "}
										{
											votes?.docs?.filter((doc) => doc.data().vote === "yes")
												.length
										}
									</Text>
								</Box>
								<Box>
									<Button
										fontSize="5xl"
										w="100%"
										h="110px"
										onClick={() => addVoteDocument("no")}
										border="2px solid lightgray"
									>
										❌🍍🍕
									</Button>
									<Text fontSize="2xl" fontWeight="bold">
										Pineapple Haters:{" "}
										{
											votes?.docs?.filter((doc) => doc.data().vote === "no")
												.length
										}
									</Text>
								</Box>
								<Center>
									<Box mt="10">
										{user ? (
											<Link
												onClick={() => firebase.auth().signOut()}
												fontSize="xl"
											>
												Logout
											</Link>
										) : (
											<Link href={"/auth"} fontSize="xl">
												Login to vote!
											</Link>
										)}
									</Box>
								</Center>
							</Flex>
						</Center>
					</Flex>
				</Center>
			</Box>
		</>
	)
}
