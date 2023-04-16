import styled from 'styled-components'

export const Background = styled.div`
    min-height: 100vh;
    /* min-width: 100vw; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-size: 50px 50px;
    background-image: linear-gradient(to bottom, transparent 96%, var(--alt-background) 4%),
    linear-gradient(to right, var(--background) 96%, var(--alt-background) 4%);

    -webkit-animation: bg-scrolling-reverse 1.92s infinite;
    /* Safari 4+ */
    -moz-animation: bg-scrolling-reverse 2.5s infinite;
    /* Fx 5+ */
    -o-animation: bg-scrolling-reverse 2.5s infinite;
    /* Opera 12+ */
    animation: bg-scrolling-reverse 2.5s infinite;
    /* IE 10+ */
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;

    @-webkit-keyframes bg-scrolling-reverse {
        100% {
            background-position: 50px 50px;
        }
    }
    @-moz-keyframes bg-scrolling-reverse {
        100% {
            background-position: 50px 50px;
        }
    }
    @-o-keyframes bg-scrolling-reverse {
        100% {
            background-position: 50px 50px;
        }
    }
    @keyframes bg-scrolling-reverse {
        100% {
            background-position: 50px 50px;
        }
    }
    @-webkit-keyframes bg-scrolling {
        0% {
            background-position: 50px 50px;
        }
    }
    @-moz-keyframes bg-scrolling {
        0% {
            background-position: 50px 50px;
        }
    }
    @-o-keyframes bg-scrolling {
        0% {
            background-position: 50px 50px;
        }
    }
    @keyframes bg-scrolling {
        0% {
            background-position: 50px 50px;
        }
    }
`
