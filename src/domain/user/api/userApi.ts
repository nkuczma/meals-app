import { auth } from '../../../firebaseConfig';
import firebase from "firebase";

export function signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function login(email: string, password: string): Promise<firebase.auth.UserCredential> {
  return auth.signInWithEmailAndPassword(email, password);
}

export function logout(): Promise<void> {
  return auth.signOut();
}