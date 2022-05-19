import styled, { css } from 'styled-components';

export const ButtonStyle = css`
  display: block;
  background-color : ${props => (props.theme && props.theme.colors && props.theme.colors.primary) || '#00bcd4' };
  color: ${props => (props.theme && props.theme.colors && props.theme.colors.lightText) || '#fff' };
  padding: 1rem 1.2rem;
  border-radius:12px;
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
`;

export const LinkStyle = css`
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  text-decoration-thickness: 3px;
  background: transparent;
  color: inherit;
  border: 0;
  font-size: 1.2em;
  display:inline-block;
`;

export const LinkButton = styled.a`
  ${ButtonStyle}
`

export const LinkSecondary = styled.a`
  ${LinkStyle};
  
`;

export const ButtonSecondary = styled.button`
  ${LinkStyle};
  
`;