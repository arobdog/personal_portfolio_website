import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media screen and (max-width: 2800px) {
            font-size: 125%;
        }
        @media screen and (max-width: 2400px) {
            font-size: 115%;
        }
        @media screen and (max-width: 2000px) {
            font-size: 100%;
        }
        @media screen and (max-width: 1600px){
            font-size: 80%;
        }
        @media screen and (max-width: 1200px){
            font-size: 120%;
        }
        @media screen and (max-width: 800px){
            font-size: 80%;
        }
        @media screen and (max-width: 500px){
            font-size: 75%;
        }
        
    }
    body{
        overflow-x: hidden;
        position: relative;
        background: #212121;
        font-family: "Inter", sans-serif;
        
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
            @media screen and (max-height: 850px){
                font-size: 4.5rem;
            }
            @media screen and (max-height: 700px){
                font-size: 3.5rem;
            }
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
        @media screen and (max-width: 1200px){
            font-size: 1.8rem;
            max-width: 50rem;
            display: block;
            position: relative;
            margin: auto;
        }
        @media screen and (max-width: 800px){
            font-size: 2.1rem;
        }
        @media screen and (max-width: 500px){
            font-size: 2.1rem;
        }
        @media screen and (max-height: 850px){
            font-size: 1.6rem;
        }
        @media screen and (max-height: 700px){
            font-size: 1.3rem;
        }
    }
`;

export default GlobalStyle;
