import { useEffect } from "react"
import { getQuiz } from "../../quizes/getQuiz"
import { useState } from "react"
import NotFound from "../NotFound"


export default function QuizPage () {
    const [quiz, setQuiz] = useState(undefined) 

    useEffect(() => {
        const _quiz = getQuiz(window.location.pathname.split('/quiz/')[1])
        setQuiz(_quiz)
    // eslint-disable-next-line
    }, [])

    return(
        <>
            {
                quiz ?
                    <>{quiz.title}</>
                :
                    <NotFound />
            }
        </>
    )
}