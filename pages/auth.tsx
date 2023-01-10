import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp"
import { Box, Center, Flex, Text } from "@chakra-ui/react"

// Configure FirebaseUI
const uiConfig = {
	// Redirect to / after sign in is successful
	signInSuccessUrl: "/",
	// Auth Providers
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
}

export default function SignInScreen() {
	return (
		<Box w="100%" h="100vh">
			<Center h="100%">
				<Flex flexDirection="column">
					<Text fontSize={"xxx-large"} mb="5">
						Pineapple Login
					</Text>
					<StyledFirebaseAuth
						uiConfig={uiConfig}
						firebaseAuth={firebase.auth()}
					/>
				</Flex>
			</Center>
		</Box>
	)
}