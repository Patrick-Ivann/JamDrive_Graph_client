import styled from 'styled-components';
import { backgroundColor, textColor, backgroundColorInput } from './theme';

export const SkinnyInput = styled.input.attrs({ className: "bg-white mx-auto max-w-sm shadow-lg rounded-lg" })`
  outline: none;
  background-color: ${backgroundColorInput}

    
`;

export const RoundedInput = styled.input.attrs({ className: "rounded-lg text-center" })`
    color: ${textColor};
    background-color: ${backgroundColorInput};
    outline: none;

    
`;
export const RoundedInputAlt = styled.input.attrs({ className: "rounded-full py-2 px-4" })`

    color: ${textColor};
    background-color: ${backgroundColorInput};
    outline: none;

    
    
`;