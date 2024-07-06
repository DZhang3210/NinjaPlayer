"use client"
import GameList from "@/components/Home/GameList";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import Image from "next/image";
import Posts from '@/components/Home/Posts'
import app from '@/shared/FirebaseConfig'
import { getFirestore, doc, setDoc, getDoc, 
  collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([])
  const db = getFirestore(app)

  useEffect(()=>{
    getPosts()
  },[])

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const querySnapshot  = await getDocs(collectionRef);
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setPosts(posts => [...posts, doc.data()])
    });
  }

  return (
    <div className="px-5 sm:px-7 md:px-10 mt-7">
      <Hero/>
      <Search/>
      <GameList/>
      {posts && <Posts posts = {posts}/>}
    </div>
  );
}
