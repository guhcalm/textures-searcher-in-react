import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }

    body,
    #root {
        width: 100vw;
        min-height: 100vh;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

`
