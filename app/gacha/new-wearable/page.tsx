"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

type NewWearable = {
  image: string;
  name: string;
  description: string;
}

const NewItem = () => {
  const router = useRouter();
  const [animated, setAnimated] = useState(false);
  const [newWearable, setNewWearable] = useState<NewWearable>({
    image: "/",
    name: "SWORD-1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero placeat sit?",
  });

  const handleEquiped = () => {
    // handle equiping wearable

    router.push("/home");
  }

  useEffect(() => {
    // fetch random wearable ....
  }, []);

  useEffect(() => {
    // animation
    setTimeout(() => {
      setAnimated(true);
    }, 400)
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Image 
        src={newWearable.image}
        alt="new-wearable"
        width={280}
        height={280}
        className={`bg-white mx-auto mt-32 ${
          animated ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } transition-all duration-[3s] ease-out`}
      />
      <section className="mt-10 mx-10 space-y-3">
        <h1 className="text-4xl">
          {newWearable.name}
        </h1>
        <p className="text-xl">
          {newWearable.description}
        </p>
      </section>
      <div 
        className="button mt-7 text-5xl text-center bg-custom-blue w-[50%] mx-auto p-3 rounded-full"
        onClick={handleEquiped}
      >
        equip
      </div>
    </div>
  )
}

export default NewItem