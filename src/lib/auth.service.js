// src/lib/auth.service.js

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

/* ======================
   HELPERS
====================== */

const formatAuthError = (error) => {
  return error?.message || "Authentication failed";
};

/* ======================
   EMAIL LOGIN
====================== */

export const loginWithEmail = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(formatAuthError(error));
  }
};

/* ======================
   EMAIL SIGNUP
   (FORCE LOGOUT AFTER)
====================== */

export const signupWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // 🔒 Force logout after signup
    await signOut(auth);

    return userCredential;
  } catch (error) {
    throw new Error(formatAuthError(error));
  }
};

/* ======================
   GOOGLE LOGIN
====================== */

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const loginWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    throw new Error(formatAuthError(error));
  }
};

/* ======================
   LOGOUT (PUBLIC API)
====================== */

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(formatAuthError(error));
  }
};

// ✅ Clean public export
export const logout = logoutUser;
