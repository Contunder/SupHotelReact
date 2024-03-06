import {Box, Button, Center, FormControl, Input, Modal, useColorMode, VStack} from "native-base";
import React, {useState} from "react";
import {register} from "../Service/auth.service";


function Register() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const {colorMode} = useColorMode();

    const [enteredName, setName] = useState({});
    const [enteredLastName, setLastName] = useState({});
    const [enteredBirthday, setBirthday] = useState({});
    const [enteredAddress, setAddress] = useState({});
    const [enteredZipCode, setZipCode] = useState({});
    const [enteredCity, setCity] = useState({});
    const [enteredEmail, setEmail] = useState({});
    const [enteredPassword, setPassword] = useState({});

    const onSubmit = () => {
        register(enteredName,
            enteredLastName,
            enteredBirthday,
            enteredAddress,
            enteredZipCode,
            enteredCity,
            enteredEmail,
            enteredPassword).then(

            () => {
                setModalVisible(false);
            }
        );
    };
    return (
        <>
            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg" mt="350">
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Register</Modal.Header>
                    <Modal.Body>
                        <Center>
                            <Box safeArea p="2" py="8" w="90%" maxW="290">
                                <VStack space={3}>
                                    <FormControl>
                                        <FormControl.Label>Name</FormControl.Label>
                                        <Input onChangeText={value => setName(value) }/>
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Last Name</FormControl.Label>
                                        <Input onChangeText={value => setLastName(value) }/>
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Birthday</FormControl.Label>
                                        <Input onChangeText={value => setBirthday(value) }/>
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Address</FormControl.Label>
                                        <Input onChangeText={value => setAddress(value) }/>
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Zip Code</FormControl.Label>
                                        <Input onChangeText={value => setZipCode(value) }/>
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>City</FormControl.Label>
                                        <Input onChangeText={value => setCity(value) }/>
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Email</FormControl.Label>
                                        <Input onChangeText={value => setEmail(value) }/>
                                    </FormControl>
                                    <FormControl>
                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="password" onChangeText={value => setPassword(value) }/>
                                    </FormControl>
                                    <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
                                        Register
                                    </Button>

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
                    Register
                </Button>
            </VStack>
        </>
    );
}


export default Register;