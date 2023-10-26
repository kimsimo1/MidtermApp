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
import { addContacts } from "../api/contacts";
const AddContacts = () => {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [city, setCity] = React.useState("");


    const [isLoading, setIsLoading] = React.useState(false);
    const toast = useToast();
    const { isLoggedIn, user } = useAuth();
    const handleContactsCreate = async () => {
        if (!isLoggedIn) {
            toast({
                title: "You must be logged in to add a contact",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        setIsLoading(true);
        const contacts = {
            name,
            phone,
            email,
            city,
        
            userId: user.uid,
        };
        await addContacts(contacts);
        setIsLoading(false);
        setName("");
        setPhone("");
        setEmail("");
        setCity("");

        toast({ title: "Contact created successfully", status: "success" });
    };
    return (
        <Box w="40%" margin={"0 auto"} display="block" mt={5}>
            <Stack direction="column">
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />







                <Button
                    onClick={() => handleContactsCreate()}
                    disabled={name.length < 1 || phone.length < 1 || email.length < 1 || city.length < 1 || isLoading}
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
export default AddContacts;