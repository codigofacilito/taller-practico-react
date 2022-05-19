import { useContext } from "react"
import styled from "styled-components";
import { ButtonSecondary } from "../collections/Buttons";
import { UserContext } from "../contexts/UserContext";

const Switcher = ({className})=>{
  let [user,setUser] = useContext(UserContext);
  
  let switchDevUsername = ()=>{
    let newUsername = user.devToUsername === "uriel_hedz" ? "microsoft" : "uriel_hedz" 
    setUser({...user,devToUsername: newUsername });
  }

  return (
    <div className={className}>
      <p>
        También puedes
        <ButtonSecondary onClick={switchDevUsername}>
          cambiar a ver los
          {
            user.devToUsername === "uriel_hedz" ? " de mi empresa" : " míos"
          }
        </ButtonSecondary>
      </p>
    </div>
  )
};

export default styled(Switcher)`
  button{
    margin-left: 0.2rem;
  }
`;