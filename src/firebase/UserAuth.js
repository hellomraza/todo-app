import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, getDocs } from "firebase/firestore";
import { Navigate } from "react-router";
import { auth, collectionRef } from ".";

const UserAuthentication = {
  getUsers: async () => {
    let allUsers = [];
    await getDocs(collectionRef).then((res) => {
      res.docs.forEach((i) => {
        allUsers.push(i.data());
      });
    });
    return allUsers;
  },

  SigninUser: async ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
        addDoc(collectionRef, {
          uid: user.uid,
          email: user.email,
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  },
  LoginUser: async ({ email, password }) => {
    console.log("login");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
        console.log("User Logged In");
        return <Navigate to="/  " />;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  },
};

export default UserAuthentication;
