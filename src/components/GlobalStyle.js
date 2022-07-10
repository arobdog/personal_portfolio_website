import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 2800px) {
            font-size: 145%;
        }
        @media (max-width: 2400px) {
            font-size: 125%;
        }
        @media (max-width: 2000px) {
            font-size: 100%;
        }
        @media (max-width: 1600px){
            font-size: 80%;
        }
        
    }
    body{
        background: #212121;
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #14ffec;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: "Inter", sans-serif;
        margin-top: 2rem;
        &:hover{
            background-color: #14ffec;
            color: #212121;
        }
        
    }
    h2{
            font-weight: lighter;
            font-size: 4rem;
    }
    h3{
            color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #14ffec;
    }
    p{
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;
    }
`;

export default GlobalStyle;
