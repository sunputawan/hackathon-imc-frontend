"use client"

import React, { useEffect, useState } from 'react'
import Question from './components/Question'
import { useFooter } from '@/components/FooterContext';
import { useRouter } from 'next/navigation';

type QuestionType = {
    question: string;
    choices: string[]; 
}

const page = () => {
    const {setShowFooter} = useFooter();
    const router = useRouter();
    useEffect(() => {
        setShowFooter(false);
    }, []);
    const [questions, setQuestions] = useState<QuestionType[]>([
        {
            question: "1) How Well Do You Know Yourself? How Well Do ", 
            choices: [
                "I know some of my ",
                "I know some of my strengths strengths strengths",
                "I know some of my strengths",
                "I know some of my strengths",
            ],
        },
        {
            question: "2) How Well Do You Know Yourself? How Well Do ", 
            choices: [
                "I know some of my strengths strengths strengths",
                "I know some of my ",
                "I know some of my strengths",
                "I know some of my strengths",
            ],
        },
        {
            question: "3) How Well Do You Know Yourself? How Well Do ", 
            choices: [
                "I know some of my ",
                "I know some of my strengths",
                "I know some of my strengths",
                "I know some of my strengths strengths strengths",
            ],
        },
        {
            question: "4) How Well Do You Know Yourself? How Well Do ", 
            choices: [
                "I know some of my ",
                "I know some of my strengths strengths strengths",
                "I know some of my strengths",
                "I know some of my strengths",
            ],
        },
    ]);
    const [quizNumber, setQuizNumber] = useState<number>(0);
    const [selectedChoices, setSelectedChoices] = useState(new Array(questions.length).fill(-1));
    const [showSubmit, setShowSubmit] = useState(false);


    useEffect(() => {
        // if(selectedChoices.includes(-1)) {
        //     console.log(selectedChoices);
        // }
        setShowSubmit(selectedChoices.includes(-1));
    }, [selectedChoices]);

    useEffect(() => {
        //fetch GET PATH SELECT QUESTION ...
    }, []);

    const handleSubmit = () => {
        // fetch POST ANS ...


        router.push("/new-account/path-select/completed");
    }
    return (
        <div>
            <Question 
                question={questions[quizNumber].question}
                choice={questions[quizNumber].choices}
                quizNumber={quizNumber}
                setQuizNumber={setQuizNumber}
                choicesSelected={selectedChoices}
                setChoicesSelected={setSelectedChoices}
                totalQuizNumber={questions?.length ?? 0}
            />
            <div 
                onClick={() => handleSubmit()}
                className={`button mt-10 mx-auto w-[40%] text-center text-3xl bg-red-800 p-3 rounded-full text-white ${
                    showSubmit && "hidden"
                }`}
            >
                SUBMIT
            </div>
        </div>
    )
}

export default page