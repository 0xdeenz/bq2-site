import styled from "styled-components";

const ErrorText = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--error);
    user-select: none;
`

export default function NotFound () {
    return(
        <ErrorText>
            404: Not Found
        </ErrorText>
    )
}
