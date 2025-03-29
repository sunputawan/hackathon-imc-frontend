"use client"

import { useEffect } from "react";
import { useFooter } from "@/components/FooterContext";

const Home = () => {
  const {setShowFooter} = useFooter();
    useEffect(() => {
        setShowFooter(true);
  }, []);
  return (
    <div>
        
    </div>
  )
}

export default Home