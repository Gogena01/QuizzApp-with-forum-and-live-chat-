import firebase from "firebase/compat/app";
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import "firebase/compat/auth";

const db = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const auth = firebase.auth();
export default firebase;

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }

    window.location = '/'
  } catch (err) {
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    window.location = '/';
  } catch (err) {
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};