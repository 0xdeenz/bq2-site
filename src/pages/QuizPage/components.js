import styled, { css } from "styled-components"

export const QuizWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.div`
    width: 100%;
    text-align: start;
    font-size: 1.5rem;
    color: var(--blue);
`

export const Description = styled.div`
    font-size: 1rem;
    width: 100%;
    text-align: justify;
    padding: 15px 0;
    color: var(--light-blue);
`

export const QuestionWrapper = styled.div`
    width: 100%;
    border-top: 1px solid var(--light-blue);
    padding: 5px 0;
`

export const QuestionTitle = styled.div`
    font-size: 1.1rem;
    text-align: justify;
    padding-bottom: 15px;
    padding-top: 5px;
    color: var(--blue);
`

export const AnswerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0px 0;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const AnswerButtonsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding-right: 10px;
    @media (max-width: 1000pxpx) {
        padding-bottom: 15px;
        width: 100%;
        flex-direction: row;
    }
`

export const AnswerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center; 
    user-select: none;
    
    width: 50px;
    height: 25px;
    border-radius: 5px;
    padding: 5px 15px 5px 15px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin: ${({disabled}) => (disabled ? `2px 0px 8px 0px` : `0px 0px 10px 0px`)};
    border: 1px solid var(--main);
    box-shadow: ${({disabled}) => (disabled ? `0 0 0 white` : `2px 2px 2px 1px var(--main)`)};
    background-color: ${({disabled}) => (disabled ? `var(--success)` : `transparent`)};
    color: var(--main);
    @media (max-width: 1000pxpx) {
        margin: ${({disabled}) => (disabled ? `2px 10px -2px 0px` : `0px 10px 0px 0px`)};
    }
`

export const RenderAnswerWrapper = styled.div`
    height: 100%;
    max-width: 100%;
    padding: 0px 10px 25px 10px;
    text-align: justify;
    word-wrap: break-word;
`

export const OpenAnswerInput = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 4px 0px 15px 0px;
    box-shadow: 2px 2px 2px 1px var(--main);
    border: 1px solid var(--main);
    transition: all 0.1s ease-in-out;
    user-select: none;
    text-align: start;
    
    &:focus {
        outline: 0;
        border: 1px solid var(--blue);
        box-shadow: 0 0 0 white;
        margin: 6px 0px 13px 0px;
    }
`

export const ButtonWrapper = styled.div`
    width: 30%;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        width: 70%;
    }
`

export const QuizButton = styled.button`
    width: 110px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 5px 10px;
    margin: 4px 0px 4px 0px;
    border-radius: 5px;
    font-size: 16px;
    user-select: none;
    border: 1px solid var(--main);
    cursor: not-allowed;
    
    ${(props) => props.disabled ? DisabledButton : EnabledButton}
`

const EnabledButton = css`
    cursor: pointer;
    background-color: var(--success);
    color: var(--box);
    transition: box-shadow, margin 0.2s ease-in-out;
    box-shadow: 2px 2px 2px 1px var(--main);

    &:hover {
        box-shadow: 0 0 0 white;
        margin: 6px 0px 2px 0px;
    }
`

const DisabledButton = css`
    background-color: var(--box);
    color: var(--main);
`

export const EligibleInfo = styled.div`
    padding: 10px 0;
    color: var(--error);
    font-size: 0.9rem;
`

export const Toast = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: justify;

    background-color: ${(props) => props.success ? `var(--success)` : `var(--light-blue)`};
    color: var(--main);

    border-radius: 5px;
    padding: 10px;
    margin-top: 12px;
    box-shadow: 2px 2px 2px 1px var(--main);
    border: 1px solid var(--main);
`

export const ToastTitle = styled.div`
    font-size: 1.1rem;
    padding-bottom: 5px;
`

export const ToastDescription = styled.div`
    font-size: 0.8rem;
`
