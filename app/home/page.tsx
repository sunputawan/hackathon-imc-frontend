"use client"

import { useState,useEffect } from "react";
import { useFooter } from "@/components/FooterContext";
import Image from "next/image";
import PlayerStats from "@/components/PlayerStats";

type userData = {
  username: string;
  level: number;
  image: string;
  progress: number;
  coin: number;
  gacha: number;
}

const Home = () => {
  const {setShowFooter} = useFooter();
  const [userData, setUserData] = useState<userData>({
    username: "Jirayu",
    level: 32,
    image: "/images/avatar/1.png",
    progress: 76,
    coin: 74,
    gacha: 15,
  });
    useEffect(() => {
        setShowFooter(true);
  }, []);
  return (
    <div className="h-screen w-full relative">
      <div className="mt-10 mx-4">
          <PlayerStats 
            username={userData.username}
            level={userData.level}
            progress={userData.progress}
            image={userData.image}
            coin={userData.coin}
            gacha={userData.gacha}
          />
          <Image
            src={"/images/avatar/1.png"}
            alt="avatar.png"
            width={300}
            height={300} 
            className="absolute bottom-40 left-1/2 -translate-x-1/2 mx-auto"
          />
      </div>
    </div>
  )
}

export default Home