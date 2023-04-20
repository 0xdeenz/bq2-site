import { OpenAnswerInput } from "./components"


export default function OpenAnswerQuestion ({ questionIndex, selectedAnswer, setOpenAnswers }) {
    return(
        <OpenAnswerInput
            type="text"
            onChange={(event) => {setOpenAnswers(questionIndex, event.target.value)}}
            placeholder="Enter your answer"
            value={selectedAnswer}
        />
    )
}