import Image from "next/image";
import React from "react";

type QuestionProps = {
    question: string;
    choice: string[];
    quizNumber: number;
    choicesSelected: number[];
    setChoicesSelected: React.Dispatch<React.SetStateAction<number[]>>;
    setQuizNumber: React.Dispatch<React.SetStateAction<number>>;
    totalQuizNumber: number;
}

const Question = ({
    question, 
    choice, 
    quizNumber, 
    setQuizNumber, 
    totalQuizNumber, 
    choicesSelected, 
    setChoicesSelected
}: QuestionProps) => {
    const handleSelected = (idx: number) => {
        const tmp = [...choicesSelected];
        tmp[quizNumber] = idx;
        setChoicesSelected(tmp);
    }
    return (
        <div className="max-h-screen w-full">
            <div 
                className="relative mt-20 mx-auto w-[320px] h-[200px] bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: "url('/images/cloud.png')"}}
            >
                <div className="absolute top-1/3 -translate-y-1/2 mx-10 text-black text-2xl ">{question}</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 text-md">
                {choice.map((c, idx) => (
                    <div 
                        key={idx}
                        onClick={() => handleSelected(idx)}
                        className="relative button"
                    >
                        <Image 
                            src={(idx === choicesSelected[quizNumber] ? "/images/SelectedCard.png" : "/images/Card.png")}
                            alt="card"
                            width={320}
                            height={20}
                        />
                        <div className="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {c} 
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-evenly items-center mt-5 w-full ">
                <Image 
                    src={"/images/left.png"}
                    alt="left"
                    width={150}
                    height={150}
                    className="button"
                    onClick={() => setQuizNumber(Math.max(0,quizNumber-1))}
                />
                <div className="text-2xl text-center flex-grow">
                    {quizNumber + 1} / {totalQuizNumber}
                </div>
                <Image 
                    src={"/images/right.png"}
                    alt="left"
                    width={150}
                    height={150}
                    className="button"
                    onClick={() => setQuizNumber(Math.min(totalQuizNumber-1, quizNumber+1))}
                />
            </div>
        </div>
    )
}

export default Question