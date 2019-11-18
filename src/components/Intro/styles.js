import styled from "styled-components"
import mediaQuery from "../../utils/mediaQuery"

export const TextContainer = styled.div`
    z-index: 40px;
    justify-content: center;
    width: 100%;
    -webkit-perspective: 608px;
    perspective: 608px;
    -webkit-transform: rotateX(.001deg) rotateY(0) rotateZ(0);
    transform: rotateX(.001deg) rotateY(0) rotateZ(0);
    font-size: 45px;
    line-height: 80px;
    font-family: "e2-Raleway",sans-serif;
    font-weight: 300;
    ${mediaQuery.maxTablet} {
        font-size: 20px;
        line-height: 40px;
        max-width: 500px;
        margin-right: 20px;
        margin-left: 20px;
      }


      
`

export const IntroContainer = styled.div`
    position: relative;
    bottom: auto;
    z-index: 9;
    overflow: hidden;
    width: 100%;
    color: white !important;
    background-image: linear-gradient(180deg,#000,#000032);
    padding: calc(10px + 5vw) calc(20px + 10vw);
    font-size: 27px;
    line-height: 45px;
    display: inline-flex;
    min-height: 175vh;

    justify-content: center;
    a {
        color: #0fdde8;
        :hover {
            color: yellowgreen;
        }
    }
     ${mediaQuery.maxTablet} {
        min-height: auto;
        padding: calc(10px + 5vw) calc(5px + 8vw);
    } 

    
`