// :root {
//   --white: #fff;
//   --black: #000;
//   /* --bgColor: rgb(147, 147, 242); */
//   --bgColor: #8c70ff;
//   --purple: #c78eff;
//   --purpled: #6753ff;
//   --yellow: yellow;
// }

// import styled, {createGlobalStyle} from 'styled-components'

import styled from "styled-components"

// export const GlobalStyle = createGlobalStyle`
// body {
//     font-family: 'Work Sans', sans-serif;
//     -webkit-font-smoothing: antialiased;
//     text-rendering: optimizeLegibility;
//     background-color:#c78eff;
//     color: #222;
//     font-size: 1rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100vw;
//     height: 100vh;
// }`



export const Container = styled.div`
    padding: 20px;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`

export const Button = styled.button`
    /* background: linear-gradient(to bottom, #3633f3, #120fb9); */
    background: rgb(182,99,82);
    background: radial-gradient(circle, rgba(182,99,82,1) 0%, rgba(105,82,182,1) 100%); 
    border: none;
    outline: none;
    border-radius: 16px;
    color: #f6f6f6;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    /* text-align: center; */
    /* margin-top: 10px; */
    padding: 12px 80px;
    transition: all 0.3s ease-in;
    margin: 10px auto;
    width: 100%
`

export const H2 = styled.h2`
    /* text-align: center; */
    color: #6952b6;
    background: transparent;
    /* border: none; */
    outline: none;
    /* border: 1px solid #6952b6; */
    padding: 5px 4px 5px 0px;
    /* margin: 15px; */
    border-radius: 10px;
    font-size: 16px;
`
export const H3 = styled.h3`
font-size: 14px;
color: #FFF;
font-weight: 400;
/* margin: 10px; */
`

export const Results = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* justify-content: space-between; */
    align-items: center;
    padding: 20px 0;
`