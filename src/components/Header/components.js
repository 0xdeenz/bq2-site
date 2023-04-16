import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.div`
    position: sticky;
    width: 95%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    border-radius: 5px;
    padding: 5px 15px 5px 15px;
    margin: 10px 10px 30px 10px;
    box-shadow: 2px 2px 2px 1px var(--main);
    border: 1px solid var(--main);
    background-color: var(--light-blue);
`

export const Title = styled(NavLink)`
    /* padding-top: 5px;
    font-family: "Boeotia"; */
    font-size: 1.7rem;
    user-select: none;
`

export const ConnectButton = styled.button`
    width: 170px;
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
    ${(props) => props.wrongChain ? WrongChain : RightChain}
    ${(props) => props.connected ? Connected : null}
`

export const StyledIdenticon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    ${ConnectButton}:hover & {   
        display: none;
    }
`;

const WrongChain = css`
    background-color: var(--error);
`

const RightChain = css`
    background-color: var(--blue);
    color: var(--box);
`

const Connected = css`
    &:hover {   
        font-size: 0;
    }
    &:hover::after {   
        content: "Disconnect";
        font-size: 1rem;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    padding-right: 10px;
`