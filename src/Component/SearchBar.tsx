import {
    AspectRatio,
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    Heading,
    Image,
    Input,
    Stack, Text,
    useColorMode
} from "native-base";
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
                setPosts(await getHotelWithFilter(enteredCity, enteredDateIn, enteredDateOut,enteredPeople))
            }
        );
    };

    localStorage.removeItem("posts");

    return (
        <><Box
            bg={colorMode === "light" ? "coolGray.200" : "coolGray.200"}
            p="3"
            _text={{fontSize: 'md', fontWeight: 'bold'}} color={colorMode === "light" ? "coolGray.900" : "coolGray.900"}
        >
            <Flex direction="row" p="3" mb="3">
                <Center width="200" mr="20">
                    <FormControl>
                        <FormControl.Label>Destination</FormControl.Label>
                        <Input onChangeText={value => setCity(value)}/>
                    </FormControl>
                </Center>
                <Center width="100" mr="20">
                    <FormControl>
                        <FormControl.Label>Date Début</FormControl.Label>
                        <Input onChangeText={value => setDateIn(value)}/>
                    </FormControl>
                </Center>
                <Center width="100" mr="20">
                    <FormControl>
                        <FormControl.Label>Date Fin</FormControl.Label>
                        <Input onChangeText={value => setDateOut(value)}/>
                    </FormControl>
                </Center>
                <Center mr="10">
                    <FormControl>
                        <FormControl.Label>Personne</FormControl.Label>
                        <Input onChangeText={value => setPeople(value)}/>
                    </FormControl>
                </Center>
                <Center mt="7">
                    <Button size="sm" variant="ghost" colorScheme={colorMode === "light" ? "primary" : "primary"}
                            onPress={onSubmit}>
                        Search
                    </Button>
                </Center>
            </Flex>
        </Box>
            {posts && (
                <Center width="450" mb="10" colorScheme="black">
                    <Text fontSize="xl" _light={{
                        color: "violet.500"
                    }} _dark={{
                        color: "violet.400"
                    }}>
                        Search Result
                    </Text>
                </Center>
            )}
            <Flex direction="row" wrap="wrap" mt="50" maxW="950">
            {posts && posts.content?.map((post) => (
                <Center width="450" mb="10">
                    <Box alignItems="center">
                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                             _dark={{
                                 borderColor: "coolGray.600",
                                 backgroundColor: "gray.700"
                             }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                            <Box>
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{
                                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                    }} alt="image"/>
                                </AspectRatio>
                                <Center bg="violet.500" _dark={{
                                    bg: "violet.400"
                                }} _text={{
                                    color: "warmGray.50",
                                    fontWeight: "700",
                                    fontSize: "xs"
                                }} position="absolute" bottom="0" px="3" py="1.5">
                                    PHOTOS
                                </Center>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        {post.name}
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        {post.address} {post.city} {post.country}
                                    </Text>
                                </Stack>
                                <Text fontWeight="200" fontSize="12">
                                    {post.description}
                                </Text>
                            </Stack>
                        </Box>
                    </Box>
                </Center>
            ))}
        </Flex>
            {posts && (
                <Center width="450" mb="10" colorScheme="black">
                    <Text fontSize="xl" _light={{
                        color: "violet.500"
                    }} _dark={{
                        color: "violet.400"
                    }}>
                        ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
                    </Text>
                </Center>
            )}
        </>
    );
}


export default SearchBar;