import styled from 'styled-components';

export const StyledSpan = styled.span`
  font-weight: bold;
  position: relative;
  line-height: 1.3em;
  &::after {
    content: '';
    position: absolute;
    top: 1.2em;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: currentColor;
    border-radius: 8px;
  }
`;