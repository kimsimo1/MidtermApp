import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const addGuests = async ({ userId, guest, city }) => {
  try {
    await addDoc(collection(db, "guests"), {
      user: userId,
      guest: guest,
      city: city,
      
    });
  } catch (err) { }
};

const deleteGuests = async (docId) => {
  try {
    const guestsRef = doc(db, "guests", docId);
    await deleteDoc(Ref);
  } catch (err) {
    console.log(err);
  }
};
export { addGuests, deleteGuests };

