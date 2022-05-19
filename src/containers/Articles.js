import { useContext } from 'react';
import styled from 'styled-components';
import { subTitleStyle } from '../collections/styles';
import Container from '../elements/Container';
import GapRow from '../elements/GapRow';
import { StyledSpan } from '../elements/StyledSpan';
import { UserContext } from '../contexts/UserContext';
import Article from '../blocks/Article';
import Switcher from '../blocks/Switcher';
import { ThemeContext } from '../contexts/ThemeContext';

const H2Subtitle = styled.h2`
  ${subTitleStyle};
`;

const InnerContainer = styled.div`
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.darkBackground) || '#14213d'};
  color: ${props => (props.theme && props.theme.colors && props.theme.colors.lightText) || '#fff'};
  padding: 2rem;
  h2{
    margin-top:0;
    margin-bottom:1rem;
  }
`;

const Articles = ({ className }) => {
  let [user] = useContext(UserContext);
  let [theme] = useContext(ThemeContext);
  return (
    <InnerContainer theme={theme}>
      <Container>
        <H2Subtitle>
          Mis posts en <StyledSpan>Dev.To</StyledSpan>
        </H2Subtitle>
        <Switcher />
        <GapRow>
          {
            user.articles ? user.articles.map(article => (
              <Article article={article} key={article.id}></Article>
            )) : <p>Cargando...</p>
          }
        </GapRow>
      </Container>
    </InnerContainer>
  )
}


export default Articles;