import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { deleteContacts } from "../api/contacts";

const ContactsList = () => {
    const [contacts, setContacts] = React.useState([]);
    const { user } = useAuth();
    const toast = useToast();
    const refreshData = () => {
        if (!user) {
            setContacts([]);
            return;
        }
        const q = query(collection(db, "contacts"), where("user", "==", user.uid));
        onSnapshot(q, (querySnapchot) => {
            let ar = [];
            querySnapchot.docs.forEach((doc) => {
                ar.push({ id: doc.id, ...doc.data() });
            });
            setContacts(ar);
        });
    };
    useEffect(() => { 




        refreshData();
        // eslint-disable-next-line
    }, [user]);
    const handleContactsDelete = async (id) => {
        if (confirm("Are you sure you wanna delete this contact?")) {
            deleteContacts(id);
            toast({ title: "Contact deleted successfully", status: "success" });
        }
    
   
    };
    return (
        <Box mt={5}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {contacts &&
                    contacts.map((contacts) => ( // eslint-disable-next-line
                        <Box
                            p={3}
                            boxShadow="2xl"
                            shadow={"dark-lg"}
                            transition="0.2s"
                            _hover={{ boxShadow: "sm" }}
                        >
                            <Heading as="h3" fontSize={"xl"}>
                                {contacts.name}{" "}
                                <Badge
                                    color="red.500"
                                    bg="inherit"
                                    transition={"0.2s"}
                                    _hover={{
                                        bg: "inherit",
                                        transform: "scale(1.2)",
                                    }}
                                    float="right"
                                    size="xs"
                                    onClick={() => handleContactsDelete(contacts.id)}
                                >
                                    <FaTrash />
                                </Badge>
                               
                             
                            </Heading>
                            <Text>{contacts.phone}</Text>
                            <Text>{contacts.email}</Text>
                            <Text>{contacts.city}</Text>
                        </Box>
                    ))}
            </SimpleGrid>
        </Box>
    );
};
export default ContactsList;





