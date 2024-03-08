import {Center, Container, Heading} from "native-base";
import SearchBar from "./SearchBar";
import AllHotel from "./AllHotel";
import {readHotelWithFilter} from "../Service/hotel.service";

function FrontContainer() {

    return (
        <Center mt="10">
            <Container>
                <Heading>
                    <SearchBar />
                </Heading>
                {!readHotelWithFilter() &&
                    <AllHotel />
                }
            </Container>
        </Center>
    );
}


export default FrontContainer;
