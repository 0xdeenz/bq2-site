import { AnswerButton, AnswerButtonsWrapper, AnswerWrapper, RenderAnswerWrapper } from "./components"

export const answerIndexToLetter = (index) => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return alphabet[index]
}

export default function MultipleChoiceQuestion ({ questionIndex, answers, selectedAnswer, setMultipleChoiceAnswers }) {
    return(
        <>
            {
                answers.map((answer, index) => {
                    return(
                        <AnswerWrapper key={index}>
                            <AnswerButtonsWrapper>
                                <AnswerButton
                                    disabled={selectedAnswer === index + 1}
                                    onClick={() => {setMultipleChoiceAnswers(questionIndex, index + 1)}}
                                >
                                    {answerIndexToLetter(index)}
                                </AnswerButton>
                            </AnswerButtonsWrapper>
                            <RenderAnswerWrapper>
                                {answer}
                            </RenderAnswerWrapper>
                        </AnswerWrapper>
                    )
                })
            }
        </>
    )
}