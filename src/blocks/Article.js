import { useContext } from "react";
import styled from "styled-components";
import { LinkSecondary } from '../collections/Buttons'
import { ThemeContext } from "../contexts/ThemeContext";

const InnerArticle = styled.article`
  border-radius: 12px;
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.background) || '#14213d'};;
  color: ${props => (props.theme && props.theme.colors && props.theme.colors.text) || '#14213d'};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  
  width: min(300px,100%);
  img{
    width: 100%;
  }


  h3{
    min-height: 3.5em;
    margin-top:0;
  }

  div{
    padding: 2rem;
  }
`;

const Article = ({ article }) => {
  let [theme] = useContext(ThemeContext);
  return (
    <InnerArticle theme={theme}>
      <img src={article.social_image} alt="Cover del artículo" />
      <div>
        <h3>
          {article.title}
        </h3>
        <LinkSecondary href={article.url}>Leer más</LinkSecondary>
      </div>
    </InnerArticle>
  )
}

export default Article;