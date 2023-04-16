import fundamentalsQuiz from "./fundamentals.json"
import ethereumQuiz from "./ethereum.json"
import smartContractsQuiz from "./smart-contracts.json"

export const getQuiz = ( quizId ) => {
    if ( quizId === "1" ) {
        return fundamentalsQuiz
    } else if ( quizId === "2" ) {
        return ethereumQuiz
    } else if ( quizId === "3" ) {
        return smartContractsQuiz
    } else {
        return null
    }
}