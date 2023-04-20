import { BlockQualifiedSubgraph } from "@bq-core/data";
import { TestCredential } from "@bq-core/lib";
import { useToast } from '@chakra-ui/react'
import { Identity } from "@semaphore-protocol/identity";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import OpenAnswerQuestion from "./OpenAnswerQuestion";
import { 
    ButtonWrapper,
    Description,
    EligibleInfo,
    QuestionTitle,
    QuestionWrapper,
    QuizButton,
    QuizWrapper,
    Title,
    Toast,
    ToastDescription,
    ToastTitle
} from "./components";
import { CREDENTIAL_IDS_TO_QUIZ_NUMBER } from "../../constants/chain";

export default function QuizPage ({ quiz }) {
    const identitySecret = useSelector(state => state.identitySecret.identitySecret);
    const toast = useToast();

    const [testCredential, setTestCredential] = useState({ requiredCredential: 0 })
    const [eligibleIdentities, setEligibleIdentities] = useState([])
    const [isEligible, setIsEligible] = useState(false)
    const [buttonAwaiting, setButtonAwaiting] = useState(false)
    const [answers, setAnswers] = useState({
        multipleChoiceAnswers: new Array(quiz.multipleChoiceQuestions.length).fill(0),
        openAnswers: new Array(quiz.openAnswerQuestions.length).fill("")
    })
    
    useEffect(() => {
        const fetchData = async () => {
            const _testCredential = await TestCredential.init(
                quiz.credentialId,
                { provider: "alchemy", apiKey: process.env.REACT_APP_ALCHEMY_API_KEY },
                "maticmum",
                quiz.openAnswerQuestions.map( question => { return question.answerHash })
            )

            if ( _testCredential.requiredCredential !== 0 ) {
                const subgraph = new BlockQualifiedSubgraph("maticmum")
                const _eligibleIdentities = await subgraph.getGroupMembers(_testCredential.requiredCredential, "credentials")
                setEligibleIdentities(_eligibleIdentities)
            } else {
                setEligibleIdentities(false)
            }
            
            setTestCredential(_testCredential)
        }

        fetchData()
    }, [])

    useEffect(() => {
        if (eligibleIdentities) {
            setIsEligible(eligibleIdentities.includes((new Identity(identitySecret)).commitment.toString()))
        } else {
            setIsEligible(identitySecret !== undefined)
        }
    }, [eligibleIdentities, identitySecret])

    const setToast = (title, description, kind='info') => {
        toast({
            position: 'top',
            render: () => (
                <Toast success={kind==='success'}>
                    <ToastTitle>{title}</ToastTitle>
                    <ToastDescription>{description}</ToastDescription>
                </Toast>
            )
        })
    }

    const handleGrade = () => {
        answers.openAnswers = answers.openAnswers.map( (openAnswer) => { return openAnswer.toLowerCase() } )

        const results = testCredential.gradeSolution(answers)

        setToast(
            `You scored ${results.grade}/100`,
            `which would place you inside the ${results.pass ? 'credentials' : 'no-credentials'} group`
        )
    }

    const handleSubmit = async () => {
        setButtonAwaiting(true)

        setToast(
            `Generating proof`,
            `hang tight, this might take a while`
        )

        const results = testCredential.gradeSolution(answers)

        const proof = await testCredential.generateSolutionProof(
            new Identity(identitySecret),
            answers
        )

        /* // sanity check
        const isValid = await testCredential.verifySolutionProof(proof)
        console.log(isValid) */

        setToast(
            `Sending transaction`,
            `do not worry about gas, the relayer takes care of it`
        )

        const response = await testCredential.sendSolutionTransaction(proof)
        
        // TODO: show tx hash from relayer inside the toast
        setToast(
            `Transaction sent!`,
            `You were placed inside the ${results.pass ? 'credentials' : 'no-credentials'} group`
        )
        
        setAnswers({
            multipleChoiceAnswers: new Array(quiz.multipleChoiceQuestions.length).fill(0),
            openAnswers: new Array(quiz.openAnswerQuestions.length).fill("")
        })

        setButtonAwaiting(false)
    }

    const setMultipleChoiceAnswers = (questionIndex, answer) => {
        setAnswers( prevState => {
            return {
                ...prevState,
                multipleChoiceAnswers: [
                    ...prevState.multipleChoiceAnswers.slice(0, questionIndex),
                    answer,
                    ...prevState.multipleChoiceAnswers.slice(questionIndex + 1)
                ]
            }
        })
    }

    const setOpenAnswers = (questionIndex, answer) => {
        setAnswers( prevState => {
            return {
                ...prevState,
                openAnswers: [
                    ...prevState.openAnswers.slice(0, questionIndex),
                    answer,
                    ...prevState.openAnswers.slice(questionIndex + 1)
                ]
            }
        })
    }

    const multipleChoiceQuestions = quiz.multipleChoiceQuestions.map( (question, index) => {
        return(
            <QuestionWrapper key={index}>
                <QuestionTitle>
                    Question #{index + 1}: {question.title}
                </QuestionTitle>
                <MultipleChoiceQuestion 
                    questionIndex={index}
                    answers={question.answers}
                    selectedAnswer={answers.multipleChoiceAnswers[index]}
                    setMultipleChoiceAnswers={setMultipleChoiceAnswers}
                />
            </QuestionWrapper>
        )
    })

    const openAnswerQuestions = quiz.openAnswerQuestions.map( (question, index) => {
        return(
            <QuestionWrapper key={index}>
                <QuestionTitle>
                    Question #{quiz.multipleChoiceQuestions.length + index + 1}: {question.title}
                </QuestionTitle>
                <OpenAnswerQuestion 
                    questionIndex={index}
                    selectedAnswer={answers.openAnswers[index]}
                    setOpenAnswers={setOpenAnswers}
                />
            </QuestionWrapper>
        )
    })

    return(
        <QuizWrapper>
            <Title>
                {quiz.title}
            </Title>
            <Description>
                {quiz.description}
            </Description>
            {multipleChoiceQuestions}
            {openAnswerQuestions}
            <ButtonWrapper>
                <QuizButton 
                    disabled={
                        !(
                            answers.multipleChoiceAnswers.filter(x => x !== 0).length === quiz.multipleChoiceQuestions.length 
                            &&
                            answers.openAnswers.filter(x => x !== "").length === quiz.openAnswerQuestions.length
                        )
                    }
                    onClick={handleGrade}
                >
                    Grade
                </QuizButton>
                <QuizButton 
                    disabled={
                        !(
                            answers.multipleChoiceAnswers.filter(x => x !== 0).length === quiz.multipleChoiceQuestions.length 
                            &&
                            answers.openAnswers.filter(x => x !== "").length === quiz.openAnswerQuestions.length
                        ) 
                        ||
                            !isEligible
                        ||
                            buttonAwaiting
                    }
                    onClick={handleSubmit}
                >
                    Submit
                </QuizButton>
            </ButtonWrapper>
            {
                ( testCredential && !isEligible && testCredential.requiredCredential !== 0 ) ?   
                    <EligibleInfo>
                        You need to solve Quiz #{CREDENTIAL_IDS_TO_QUIZ_NUMBER[testCredential.requiredCredential]} first
                    </EligibleInfo>
                :
                    <></>
            }
        </QuizWrapper>
    )
}