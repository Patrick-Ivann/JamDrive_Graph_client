import styled from 'styled-components';
import { textColor, textColorDim, backgroundColorDim, backgroundColorCardDim, backgroundColorCard } from './theme';


export const Chip = styled.span.attrs({
    className:
      "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-6"
  })`
  
  color: ${textColor};
  background-color: #1a1b21; 


  `;
  
  export const MainCard = styled.main.attrs({
    className: "w-full container max-w-xl mx-auto p-6 mb-2 mt-6"
  })`
      color: ${textColor};
background-color: ${backgroundColorCardDim}; 

  `;
  
  export const TitleCard = styled.main.attrs({
    className:
      "max-w-sm max-w-full lg:flex  rounded-t"
  })`
  
  color: ${textColorDim};
background-color: ${backgroundColorCard}; 


  
  `;
  
  export const ContentCard = styled.div.attrs({
      className  : "max-w-sm max-w-full lg:flex  rounded-b"
  })`

    color: ${textColor};
    background-color:${backgroundColorDim};

  /* background-color: #1a1b21;  */
  `