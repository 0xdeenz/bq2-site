import styled from 'styled-components'

export const Wrapper = styled.div`
    position: sticky;
    width: 95%;
    max-width: 1000px;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    box-shadow: 2px 2px 2px 1px var(--main);
    border: 1px solid var(--main);
    background-color: var(--box);
`

export default function ContentWrapper ({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

