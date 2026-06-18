import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function createUserIfNotExists(user) {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      name: user.displayName || "New User",
      email: user.email,
      photoURL: user.photoURL || "",

      role: "buyer", // default

      isSeller: false,

      skillsCount: 0,

      rating: 0,

      createdAt: new Date()
    });
  }
}