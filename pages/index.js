// note from Ethan: import '@/' not working properly in replit workspaces
import {
    Container,
  } from '@chakra-ui/react'
 


import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import ContactsList from "../components/ContactsList";
import AddContacts from "../components/AddContacts";
import EventList from "../components/EventList";
import AddEvent from "../components/AddEvent";







export default function Home() {
return (
<Container maxW="7xl">
<Auth />
<TodoList />
<ContactsList />
<EventList />
</Container>
);
}






























































































































