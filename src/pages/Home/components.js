import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    > * {
        /* height: 33%; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
    }
`

export const ExternalResources = styled.div`

`

export const ResourceList = styled.div`
    padding: 15px 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ResourceLink = styled.a`
    cursor: pointer;
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    &:hover{
        text-decoration: underline;
    }

    > * {
        margin: 5px;
    }
`

export const TestsShowcase = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
`

export const TestsWrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TestWrapper = styled.div`
    width: 100%;
    text-align: start;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px 0;

    &:not(:last-of-type) {
        border-bottom: 1px solid var(--main);
    }
`

export const TestData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`

export const TestTitle = styled.div`
    width: 100%;
    text-align: start;
    font-size: 1.2rem;
`

export const TestWarning = styled.div`
    font-size: 0.7rem;
    color: var(--error);
`

export const TestButton = styled(NavLink)`
    width: 110px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 5px 10px;
    margin: 4px 0px 4px 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
    transition: box-shadow, margin 0.2s ease-in-out;
    
    box-shadow: 2px 2px 2px 1px var(--main);
    border: 1px solid var(--main);
    &:hover {
        box-shadow: 0 0 0 white;
        margin: 6px 0px 2px 10px;
    }
`

export const MintBurnerToken = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
`

export const MintWrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const MintText = styled.div`
    width: 100%;
    text-align: justify;
    font-size: 0.9rem;
    padding: 15px 0;
`

export const MintComponents = styled.div`
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
        
    width: 30%;
        height: 70px;
    }
`

export const MintInput = styled.input`
    width: 160px;
    height: 30px;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 4px 0px 4px 0px;
    border: 1px solid var(--main);
    user-select: none;
    
    ${(props) => props.disabled ? DisabledInput : EnabledInput}
`

const EnabledInput = css`
    color: var(--blue);
    transition: all 0.1s ease-in-out;
    box-shadow: 2px 2px 2px 1px var(--main);

    &:focus {
        outline: 0;
        border: 1px solid var(--blue);
        box-shadow: 0 0 0 white;
        margin: 6px 0px 2px 0px;
    }
`

const DisabledInput = css`
    cursor: not-allowed;
    background-color: var(--box);
    color: var(--main);
`

export const MintButton = styled.button`
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
    
    ${(props) => props.disabled ? DisabledButton : EnabledButton}
    
    @media (max-width: 1000px) {
        width: 160px;
    }
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
    cursor: not-allowed;
    background-color: var(--box);
    color: var(--main);
`

export const TitleTest = styled.div`
    width:100%;
    text-align: start;
    font-size: 1.5rem;
`