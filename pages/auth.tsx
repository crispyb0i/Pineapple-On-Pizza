import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp"
import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { NavigationBar } from "../components/navigation-bar/navigation-bar"

// Configure FirebaseUI
const uiConfig = {
	// Redirect to / after sign in is successful
	signInSuccessUrl: "/",
	// Auth Providers
	signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
}

export default function SignInScreen() {
	return (
		<>
			<NavigationBar />
			<Box w="100%" h="80vh">
				<Center h="100%">
					<Flex flexDirection="column" w="90%">
						{/* <Text fontSize={"xxx-large"} mb="8" mx="auto">
							Pineapple on Pizza?
						</Text> */}
						{/* <Text fontSize={"xx-large"} mx="auto" mb="10">
						Login
					</Text> */}
						<StyledFirebaseAuth
							uiConfig={uiConfig}
							firebaseAuth={firebase.auth()}
						/>
					</Flex>
				</Center>
			</Box>
		</>
	)
}
