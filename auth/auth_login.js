import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
const auth = FIREBASE_AUTH;

const login = async () => {
try{
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log(response);
  
} catch (error){
  console.log(error);   

}


}

