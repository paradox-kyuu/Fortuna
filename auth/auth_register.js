import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const auth = FIREBASE_AUTH;

const register = async () => {
try{
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);

} catch (error){
  console.log(error);   

}


}

