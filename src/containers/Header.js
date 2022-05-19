import styled from 'styled-components';
import { rowStyle, titleStyle } from '../collections/styles';
import { StyledSpan } from '../elements/StyledSpan';
import { CircleImage } from '../elements/CircleImage';
import ButtonRows from '../elements/GapRow';
import { LinkButton, LinkSecondary } from '../collections/Buttons';
import Container from '../elements/Container';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const H1Title = styled.h1`
  ${titleStyle};
  margin: 0;
  span{
    color: ${props => (props.theme && props.theme.colors && props.theme.colors.primaryText) || 'pink' };
  }
`;

const ColsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5em;
`;

const Header = ({ className }) => {
  let [theme] = useContext(ThemeContext);
  return (
    <Container>
      <div className={className}>
        <ColsContainer>
          <H1Title theme={theme}>
            Bienvenid@, soy <br /> <StyledSpan>Uriel Hernández</StyledSpan> desarrrollador web
          </H1Title>
          <ButtonRows>
            <LinkButton theme={theme}>Mis proyectos</LinkButton>
            <LinkButton theme={theme}>Descargar mi CV</LinkButton>
          </ButtonRows>
          <LinkSecondary>O lee mis artículos</LinkSecondary>
        </ColsContainer>
        <CircleImage src="avatar.jpg"></CircleImage>
      </div>
    </Container>
  )
};

export default styled(Header)`
  ${rowStyle};
  justify-content: space-between;
  align-items: center;
  min-height: 50vh;
  div{
    flex: 1;
  }
  img{
    width: 350px;
  }
  @media(max-width: 768px){
    justify-content: center;
  }
`;