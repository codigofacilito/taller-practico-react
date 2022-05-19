import DarkModeSwitcher from "../blocks/DarkModeSwitcher";
import styled from 'styled-components';

const Footer = ({className}) => {
  return (
    <div className={className}>
      <p>Gracias por visitar esta página</p>
      <DarkModeSwitcher></DarkModeSwitcher>
    </div>
  )
}

export default styled(Footer)`
  font-size: 1rem;
  text-align:center;
  padding-top: 50px;
  padding-bottom: 50px;
`;