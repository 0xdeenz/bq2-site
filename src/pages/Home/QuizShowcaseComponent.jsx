import { FaLongArrowAltRight } from "react-icons/fa"

import fundamentalsQuiz from "../../quizes/fundamentals.json"
import ethereumQuiz from "../../quizes/ethereum.json"
import smartContractsQuiz from "../../quizes/smart-contracts.json"
import {
    TestsShowcase, 
    TitleTest,
    TestsWrapper,
    TestWrapper,
    TestTitle,
    TestData,
    TestWarning,
    TestButton
} from "./components";

export default function QuizShowcaseComponent () {
    return(
        <TestsShowcase>
            <TitleTest>
                Demo Case: ZK-Learning
            </TitleTest>
            <TestsWrapper>
                <TestWrapper>
                    <TestData>
                        <TestTitle>Quiz #1: {fundamentalsQuiz.title}</TestTitle>
                        <TestWarning>&nbsp;</TestWarning>
                    </TestData>
                    <TestButton to="/quiz/1">Quiz&nbsp;<FaLongArrowAltRight /></TestButton>
                </TestWrapper>
                <TestWrapper>
                    <TestData>
                        <TestTitle>Quiz #2: {ethereumQuiz.title}</TestTitle>
                        <TestWarning>*requires you solve Quiz #1 first</TestWarning>
                    </TestData>
                    <TestButton to="/quiz/2">Quiz&nbsp;<FaLongArrowAltRight /></TestButton>
                </TestWrapper>
                <TestWrapper>
                    <TestData>
                        <TestTitle>Quiz #3: {smartContractsQuiz.title}</TestTitle>
                        <TestWarning>*requires you solve Quiz #2 first</TestWarning>
                    </TestData>
                    <TestButton to="/quiz/3">Quiz&nbsp;<FaLongArrowAltRight /></TestButton>
                </TestWrapper>
            </TestsWrapper>
        </TestsShowcase>
    )
}