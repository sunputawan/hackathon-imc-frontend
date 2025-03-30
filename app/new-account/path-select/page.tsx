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
            question: "Do you set long-term goals and work towards them?",
            choices: [
                "I set clear long-term goals and actively work towards them.",
                "I set long-term goals but struggle to follow through.",
                "I focus more on short-term tasks than long-term goals.",
                "I rarely set long-term goals, as I find them overwhelming."
            ]
        },
        {
            question: "How comfortable are you with expressing your thoughts or ideas in front of a group?",
            choices: [
                "Very comfortable; I’m confident speaking in public.",
                "I can do it, but I get nervous sometimes.",
                "I can speak in front of small groups but struggle in larger settings.",
                "I avoid speaking in public or in large groups."
            ]
        },
        {
            question: "How do you prefer to communicate with others?",
            choices: [
                "Verbally, through conversations and discussions.",
                "Through written communication (email, messages, etc.).",
                "I prefer non-verbal communication (body language, gestures, etc.).",
                "I prefer not to communicate too often and keep things minimal."
            ]
        },
        {
            question: "When faced with a problem, how do you usually react?",
            choices: [
                "I analyze the situation from all angles before making a decision.",
                "I look for patterns and think of creative solutions.",
                "I rely on others for advice and guidance.",
                "I act quickly without thinking too much, hoping things will work out."
            ]
        },
        {
            question: "How comfortable are you with questioning assumptions or conventional wisdom?",
            choices: [
                "Very comfortable; I often challenge what I hear.",
                "I do it occasionally if I feel strongly about something.",
                "I rarely question assumptions but can if needed.",
                "I tend to accept things as they are without questioning."
            ]
        },
        {
            question: "When working in a team, what role do you usually take?",
            choices: [
                "I naturally take the lead and organize others.",
                "I actively contribute and help coordinate the team’s efforts.",
                "I collaborate but prefer to follow the lead of others.",
                "I prefer working alone rather than in a team."
            ]
        },
        {
            question: "How do you handle disagreements or conflicts in a team setting?",
            choices: [
                "I address the issue directly and work toward a resolution.",
                "I try to mediate and ensure everyone’s opinions are heard.",
                "I avoid confrontation and let others handle it.",
                "I get frustrated and struggle to work through the disagreement."
            ]
        },
        {
            question: "How well do you manage your emotions when facing stressful situations?",
            choices: [
                "I stay calm and composed, even under pressure.",
                "I manage most of the time but can get stressed at times.",
                "I struggle to keep my emotions in check when stressed.",
                "I get overwhelmed and have difficulty managing stress."
            ]
        },
        {
            question: "How empathetic are you toward others when they share personal challenges or emotions?",
            choices: [
                "I’m very empathetic and can easily connect with others' feelings.",
                "I can empathize but find it difficult to express it.",
                "I try to understand but often struggle with showing empathy.",
                "I find it hard to relate to others’ emotions."
            ]
        },
        {
            question: "How do you manage tasks and deadlines?",
            choices: [
                "I plan ahead, prioritize tasks, and stick to deadlines.",
                "I try to manage my tasks but sometimes fall behind.",
                "I work best under pressure and often leave tasks until the last minute.",
                "I often struggle with managing my time effectively."
            ]
        },
        {
            question: "How often do you find yourself multitasking?",
            choices: [
                "I regularly multitask and manage several tasks at once.",
                "I multitask occasionally but prefer focusing on one task at a time.",
                "I rarely multitask, as it’s difficult for me to juggle tasks.",
                "I prefer to focus on one task without any interruptions."
            ]
        },
        {
            question: "How do you approach solving a difficult problem?",
            choices: [
                "I break the problem into smaller parts and analyze each one.",
                "I brainstorm creative solutions and pick the best one.",
                "I ask others for help and discuss different approaches.",
                "I try different solutions and adjust along the way."
            ]
        },
        {
            question: "How do you approach tasks that require creative thinking or new ideas?",
            choices: [
                "I come up with ideas easily and enjoy exploring new possibilities.",
                "I can be creative but sometimes need time to think things through.",
                "I struggle to generate ideas but try to find inspiration.",
                "I prefer to follow structured methods rather than creating something new."
            ]
        }
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