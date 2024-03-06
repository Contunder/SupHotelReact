import {Box, Button, Center, Flex, FormControl, Input, useColorMode} from "native-base";

function SearchBar() {

    const {colorMode} = useColorMode();

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
                        <Input />
                    </FormControl>
                </Center>
                <Center width="100" mr="20">
                    <FormControl>
                        <FormControl.Label>Date Début</FormControl.Label>
                        <Input />
                    </FormControl>
                </Center>
                <Center width="100" mr="20">
                    <FormControl>
                        <FormControl.Label>Date Fin</FormControl.Label>
                        <Input />
                    </FormControl>
                </Center>
                <Center mr="10">
                    <FormControl>
                        <FormControl.Label>Personne</FormControl.Label>
                        <Input />
                    </FormControl>
                </Center>
                <Center mt="7">
                    <Button size="sm" variant="ghost" colorScheme={colorMode === "light" ? "primary" : "primary"}>
                        Search
                    </Button>
                </Center>
            </Flex>
        </Box>

    );
}


export default SearchBar;