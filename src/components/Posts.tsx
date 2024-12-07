import React from "react";
import { app } from "../firebase";
import {
  getFirestore,
  query,
  collection,
  orderBy,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import Post from "./Post";

// Define the structure of a post
interface PostData {
  id: string;
  timestamp: Date; // Adjust this based on Firestore's format
  title: string;
  content: string;
  username: string;
  image: string;
  profileImg: string;
  caption: string;
}

const Posts = async () => {
  const db = getFirestore(app);
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);

  // Properly type and structure data
  const data: PostData[] = querySnapshot.docs.map(
    (doc: QueryDocumentSnapshot<DocumentData>) => {
      const docData = doc.data() as Omit<PostData, "id">; // Everything except `id`
      return {
        id: doc.id,
        ...docData,
      };
    }
  );

  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
