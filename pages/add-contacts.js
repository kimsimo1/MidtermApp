import { Container } from "@chakra-ui/react";
import Auth from "../components/Auth";
import AddContacts from "../components/AddContacts";

export default function AddTheContacts() {
  return (
    <Container maxW="7xl">
      <Auth />
      <AddContacts />
    </Container>
  )
};

