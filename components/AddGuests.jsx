import React from "react";
import {
    Box,
    Input,
    Button,
    Textarea,
    Stack,
    Select,
    useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addGuests } from "../api/guests";
const AddGuests = () => {
    const [guest, setGuest] = React.useState("");
    const [city, setCity] = React.useState("");

    const [isLoading, setIsLoading] = React.useState(false);
    const toast = useToast();
    const { isLoggedIn, user } = useAuth();
    const handleGuestsCreate = async () => {
        if (!isLoggedIn) {
            toast({
                title: "You must be logged in to add a guest",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        setIsLoading(true);
        const guests = {
            guest,
            city,
        
            userId: user.uid,
        };
        await addGuests(guests);
        setIsLoading(false);
        setGuest("");
        setCity("");

        toast({ title: "Guest created successfully", status: "success" });
    };
    return (
        <Box w="40%" margin={"0 auto"} display="block" mt={5}>
            <Stack direction="column">
                <Input
                    placeholder="Guest"
                    value={guest}
                    onChange={(e) => setGuest(e.target.value)}
                />
                <Textarea
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />



                <Button
                    onClick={() => handleGuestsCreate()}
                    disabled={guest.length < 1 || city.length < 1 || isLoading}
                    colorScheme="pink"
                    size="lg"
                    variant="solid"
                >
                    Add
                </Button>
            </Stack>
        </Box >
    );
};
export default AddGuests;
