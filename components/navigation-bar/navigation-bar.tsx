import {
	Avatar,
	Box,
	Center,
	Flex,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react"
import { FC } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { GiPineapple } from "react-icons/gi"
import NextLink from "next/link"
import firebase from "../../firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth"

export const NavigationBar: FC = () => {
	const [user, loading, error] = useAuthState(firebase.auth() as any)
	return (
		<Box
			as="section"
			zIndex={9999}
			top={0}
			position="sticky"
			mb="10"
			backgroundColor="teal.300"
		>
			<Box
				as="nav"
				bg="bg-surface"
				boxShadow={"sm"}
				py={1}
				px={{ base: 4, lg: 10 }}
			>
				<Flex justify="space-between">
					<Center>
						<Link as={NextLink} href="/" textDecoration="none">
							<Text color="white" fontSize="5xl">
								🍍
							</Text>
						</Link>
					</Center>
					<Center>
						<Menu>
							<MenuButton
								as={IconButton}
								background="none"
								variant="none"
								_hover={{ bg: "none" }}
								_expanded={{ bg: "none" }}
								_focus={{ bg: "none" }}
								icon={
									user ? (
										<Avatar bg="gray.600" boxSize="10" icon={<GiPineapple />} />
									) : (
										<Avatar
											bg="gray.600"
											boxSize="10"
											icon={<AiOutlineUser />}
										/>
									)
								}
								aria-label="Open Menu"
							/>
							<MenuList>
								<Link href="/">
									<MenuItem>Home</MenuItem>
								</Link>
								<Link href="/about">
									<MenuItem>About</MenuItem>
								</Link>
								{!user ? (
									<Link href={"/auth"}>
										<MenuItem>Sign-in</MenuItem>
									</Link>
								) : (
									<Link onClick={() => firebase.auth().signOut()}>
										<MenuItem>Logout</MenuItem>
									</Link>
								)}
							</MenuList>
						</Menu>
					</Center>
				</Flex>
			</Box>
		</Box>
	)
}
