import styled from "styled-components";
import { backgroundColor, textColor, backgroundColorDim, backgroundColorUltraDim, backgroundColorHeaderAndButton, backgroundColorUltraDimAlt, backgroundColorCardDim, backgroundColorCardDimAlt } from "./theme";

export const MainBody = styled.div.attrs({className: "h-full h-screen leading-normal"})`
 height: 100%; 
background-color:${backgroundColor};
`;


export const Container = styled.main.attrs({ className: " mx-auto flex flex-col flex-1" })`
height: 100%;
  background-color:${backgroundColor};

`;

export const StyledHeader = styled.header.attrs({className : "mb-4 md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4"})` 

background-color :${backgroundColorHeaderAndButton};

`


export const Flex1 = styled.div.attrs({className: "flex-1"})``;


export const Text = styled.p.attrs({
  className: ""
})`

color: ${textColor};

`;


export const StyledUl = styled.ul.attrs({className : (props) => `absolute ${props.margin}   p-2 rounded-lg shadow-lg  z-10  `})` 

  background-color:${backgroundColorUltraDimAlt};


`
export const Modal = styled.div.attrs({className: "rounded-lg shadow-lg bg-gray-900 py-10 pr-10 pl-10"}) `   

background-color: ${backgroundColorCardDimAlt};

`


export const Svg = styled.svg`

fill: ${textColor};

 &:hover {
        fill:#F9F871;
        color: #000;
    };
    &:after {
        
        fill: #b8b852;
    }


`