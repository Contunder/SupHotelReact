import {Center, Container, Heading} from "native-base";
import SearchBar from "./SearchBar";
import AllHotel from "./AllHotel";

function FrontContainer() {

    return (
        <Center mt="10">
            <Container>
                <Heading>
                    <SearchBar />
                </Heading>
                <AllHotel />
            </Container>
        </Center>
    );
}


export default FrontContainer;
