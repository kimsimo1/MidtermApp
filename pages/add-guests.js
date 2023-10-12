import { Container } from "@chakra-ui/react";
import Auth from "../components/Auth";
import AddGuests from "../components/AddGuests";

export default function AddTheGuests() {
  return (
    <Container maxW="7xl">
      <Auth />
      <AddGuests />
    </Container>
  )
};

