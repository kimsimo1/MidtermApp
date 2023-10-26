import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const addContacts = async ({ userId, name, phone, email, city }) => {
  try {
    await addDoc(collection( db, "contacts"), {
      user: userId,
      name: name,
      phone: phone,
      email: email,
      city: city,
      
    });
  } catch (err) { }
};



const deleteContacts = async (docId) => {
  try {
    const contactsRef = doc(db, "contacts", docId);
    await deleteDoc(contactsRef);
  } catch (err) {
    console.log(err);
  }
};
export { addContacts, deleteContacts };




