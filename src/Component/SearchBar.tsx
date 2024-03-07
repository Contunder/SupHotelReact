import {Box, Button, Center, Flex, FormControl, Input, useColorMode} from "native-base";
import {useState} from "react";
import {getAllHotel, getHotelWithFilter} from "../Service/hotel.service";
import PostType from "../Type/post.type";

function SearchBar() {

    const {colorMode} = useColorMode();
    let [posts, setPosts] = useState<PostType>();
    const [enteredCity, setCity] = useState({});
    const [enteredDateIn, setDateIn] = useState({});
    const [enteredDateOut, setDateOut] = useState({});
    const [enteredPeople, setPeople] = useState({});

    const onSubmit = () => {
        getHotelWithFilter(enteredCity, enteredDateIn, enteredDateOut, enteredPeople).then(
            async () => {
                setPosts(await getAllHotel())
                window.location.reload()
            }
        );
    };


    return (
        <Box
            bg={colorMode === "light" ? "coolGray.200" : "coolGray.200"}
            p="3"
            _text={{fontSize: 'md', fontWeight: 'bold'}} color={colorMode === "light" ? "coolGray.900" : "coolGray.900"}
        >
            <Flex direction="row" p="3" mb="3">
                <Center width="200" mr="20">
                    <FormControl>
                        <FormControl.Label>Destination</FormControl.Label>
                        <Input onChangeText={value => setCity(value) }/>
                    </FormControl>
                </Center>
                <Center width="100" mr="20">
                    <FormControl>
                        <FormControl.Label>Date Début</FormControl.Label>
                        <Input onChangeText={value => setDateIn(value) }/>
                    </FormControl>
                </Center>
                <Center width="100" mr="20">
                    <FormControl>
                        <FormControl.Label>Date Fin</FormControl.Label>
                        <Input onChangeText={value => setDateOut(value) }/>
                    </FormControl>
                </Center>
                <Center mr="10">
                    <FormControl>
                        <FormControl.Label>Personne</FormControl.Label>
                        <Input onChangeText={value => setPeople(value) }/>
                    </FormControl>
                </Center>
                <Center mt="7">
                    <Button size="sm" variant="ghost" colorScheme={colorMode === "light" ? "primary" : "primary"} onPress={onSubmit}>
                        Search
                    </Button>
                </Center>
            </Flex>
        </Box>

    );
}


export default SearchBar;