import {Box, Button, Center, Flex, HStack, Switch, Text, useColorMode,} from "native-base";
import { GestureResponderEvent } from "react-native/types";
import Login from "../Form/Login";
import {getCurrentUser, logout} from "../Service/auth.service";
import {getHotelWithFilter} from "../Service/hotel.service";

function Navbar() {
    const {colorMode} = useColorMode();

    const onSubmit = () => {
        window.location.reload()
    };

    return (
        <Box
            bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
            p="3"
            _text={{fontSize: 'md', fontWeight: 'bold'}} color={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
        >
            <Flex direction="row" >
                <Center size="16" mr="250">
                    SupHotel
                </Center>
                <Center size="16" mr="5">
                    <Button size="sm" variant="ghost" colorScheme={colorMode === "light" ? "primary" : "secondary"} onPress={onSubmit}>
                        Index
                    </Button>
                </Center>
                {!getCurrentUser() && (
                <Center size="16" mr="5">
                    <Login />
                </Center>
                )}
                {getCurrentUser() && (
                    <>
                        <Center size="16" mr="5">
                            <Button size="sm" variant="ghost" colorScheme={colorMode === "light" ? "primary" : "secondary"}>
                                My Profile
                            </Button>
                        </Center>
                        <Center size="16" mr="5">
                            <Button size="sm" variant="ghost" onPress={logout} colorScheme={colorMode === "light" ? "primary" : "secondary"}>
                                Logout
                            </Button>
                        </Center>
                    </>
                )}
                <Center size="16" ml={getCurrentUser() ? ("800") : ("900")}>
                    <ToggleDarkMode/>
                </Center>
            </Flex>

        </Box>
    );
}

function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack space={2}>
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}

export default Navbar;
