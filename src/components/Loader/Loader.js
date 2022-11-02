import styled, { keyframes } from 'styled-components'
import { CgSpinner } from 'react-icons/cg';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(1turn);
}
`;

export const Loader = styled(CgSpinner)`
  animation: ${spin} 0.85s linear infinite;
`;

Loader.defaultProps = {
  size: 40,
};