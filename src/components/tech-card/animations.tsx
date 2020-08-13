import styled, { keyframes } from 'styled-components';

const float = keyframes`
0% {
    transform: translatey(0px);
}
50% {
    transform: translatey(-20px);
}

100% { 
    transform: translatey(0px);
}
`;

export default { float };
