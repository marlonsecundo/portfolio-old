// eslint-disable-next-line no-unused-vars
import styled, { keyframes } from 'styled-components';

const float = keyframes`
0% {
    transform: translatey(-10px);
}

50% {
    transform: translatey(10px);
}

100% { 
    transform: translatey(-10px);
}
`;

export default { float };
