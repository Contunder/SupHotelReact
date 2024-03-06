import React, {useState} from "react";
import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    HStack,
    Input,
    Link,
    VStack,
    Text,
    Modal,
    useColorMode
} from "native-base";
import {login} from "../Service/auth.service";
import Register from "./Register";


function Login() {
    const [modalVisible, setModalVisible] = useState(false);
    const {colorMode} = useColorMode();

    const [enteredEmail, setEmail] = useState({});
    const [enteredPassword, setPassword] = useState({});

    const onSubmit = () => {
        login(enteredEmail, enteredPassword).then(
            () => {
                setModalVisible(false);
                window.location.reload();
            }
        );
    };

    return (
        <>
            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg" mt="350">
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Body>
                        <Center w="100%">
                            <Box safeArea p="2" py="8" w="90%" maxW="290">
                                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                                    color: "warmGray.50"
                                }}>
                                    Welcome
                                </Heading>
                                <Heading mt="1" _dark={{
                                    color: "warmGray.200"
                                }} color="coolGray.600" fontWeight="medium" size="xs">
                                    Sign in to continue!
                                </Heading>

                                <VStack space={3} mt="5">
                                    <FormControl>
                                        <FormControl.Label>Email ID</FormControl.Label>
                                        <Input onChangeText={value => setEmail(value) } />
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="password" onChangeText={value => setPassword(value) } />
                                        <Link _text={{
                                            fontSize: "xs",
                                            fontWeight: "500",
                                            color: "indigo.500"
                                        }} alignSelf="flex-end" mt="1">
                                            Forget Password?
                                        </Link>
                                    </FormControl>
                                    <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
                                        Sign in
                                    </Button>
                                    <HStack mt="6" justifyContent="center">
                                        <Text fontSize="sm" color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }}>
                                            I'm a new user.{" "}
                                        </Text>
                                        <Link _text={{
                                            color: "indigo.500",
                                            fontWeight: "medium",
                                            fontSize: "sm"
                                        }} href="#">
                                            <Register />
                                        </Link>
                                    </HStack>
                                </VStack>
                            </Box>
                        </Center>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
            <VStack space={8} alignItems="center">
                <Button size="sm" variant="ghost" colorScheme={colorMode === "light" ? "primary" : "secondary"} onPress={() => {
                    setModalVisible(!modalVisible);
                }}>
                    Login
                </Button>
            </VStack>
        </>
    );
}


export default Login;