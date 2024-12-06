// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-5aaa3.firebaseapp.com",
  projectId: "insta-next-5aaa3",
  storageBucket: "insta-next-5aaa3.firebasestorage.app",
  messagingSenderId: "477199444061",
  appId: "1:477199444061:web:cdcc294bd842b7c914c5b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// rules_version = '2';

// // Craft rules based on data in your Firestore database
// // allow write: if firestore.get(
// //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write: if
//       request.resource.size < 2 * 1024 * 1024 &&
//       request.resource.contentType.matches('image/.*')
//     }
//   }
// }
