import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';



const InnerLayout = styled.div`
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.background) || '#14213d'};
  color: ${props => (props.theme && props.theme.colors && props.theme.colors.text) || '#fff'};
  transition: all 0.3s ease-in;
`;

const Layout = ({ children }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <InnerLayout theme={theme}>{children}</InnerLayout>
  )
};

export default Layout;