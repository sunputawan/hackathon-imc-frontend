import InputBox from "@/components/InputBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center bg-[url('/images/country.png')] bg-cover bg-no-repeat bg-center h-screen w-full flex flex-col justify-center items-center">
      <InputBox />
    </div>
  );
}
