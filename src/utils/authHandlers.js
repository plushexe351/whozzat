import { signOut } from "firebase/auth";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  updateProfile,
  db,
  doc,
  setDoc,
  getDoc,
} from "../firebase";

import { useToast } from "../Context/ToastContext";

// Google Sign In
export const handleGoogleSignIn = async (
  setUser,
  navigate,
  setError,
  setLoading,
  addToast
) => {
  try {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    setUser({ displayName, email, profileURL: photoURL, uid });
    addToast(`Welcome, ${displayName}!`, "success");
    navigate("/home");
  } catch (err) {
    setError(err.message);
    addToast("Error Signing in with Google", "error");
  } finally {
    setLoading(false);
  }
};

// Email/Password Sign In
export const handleEmailSignIn = async (
  e,
  email,
  password,
  setUser,
  navigate,
  setError,
  setLoading,
  addToast
) => {
  e.preventDefault();

  try {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    const { uid, email: userEmail } = result.user;
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);
    let displayName = "";
    let profileURL = "";
    if (userDocSnap.exists()) {
      const data = userDocSnap.data();
      displayName = data.username || "";
      profileURL = data.profileURL || "";
    }
    setUser({ displayName, email: userEmail, profileURL, uid });
    addToast(`Welcome, ${displayName}!`, "success");

    navigate("/home");
  } catch (err) {
    setError(err.message);
    addToast("Error Signing in with email and password", "error");
  } finally {
    setLoading(false);
  }
};

// Sign Up
export const handleSignUp = async (
  e,
  email,
  password,
  username,
  profileImage,
  setUser,
  navigate,
  setError,
  setLoading,
  addToast
) => {
  e.preventDefault();
  setLoading(true);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    let photoURL = null;
    if (profileImage) {
      const imageRef = ref(storage, `profileImages/${userCredential.user.uid}`);
      await uploadBytes(imageRef, profileImage);
      photoURL = await getDownloadURL(imageRef);
    }
    await updateProfile(userCredential.user, {
      displayName: username,
      photoURL: photoURL || undefined,
    });
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email,
      profileURL: photoURL,
      username,
      createdAt: new Date().toISOString(),
    });
    setUser({
      displayName: username,
      email,
      profileURL: photoURL,
      uid: userCredential.user.uid,
    });
    addToast(`Welcome, ${displayName}!`, "success");

    navigate("/home");
  } catch (err) {
    setError(err.message);
    addToast("Error Signing Up", "error");
  } finally {
    setLoading(false);
  }
};

// Image Change
export const handleImageChange = (e, setProfileImage, setProfilePreview) => {
  const file = e.target.files[0];
  if (file) {
    setProfileImage(file);
    setProfilePreview(URL.createObjectURL(file));
  }
};

// Sign Out
export const handleSignOut = async (addToast) => {
  try {
    await signOut(auth);
    addToast("Logged out successfully !", "success");
  } catch (error) {
    console.log("Sign out error:", error);
    addToast("Error logging out", "error");
  }
};
