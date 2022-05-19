import { createContext,useState, useEffect } from "react";
import devToMockResponse from "../mocks/devto";
const mock = false;

const userJSON = {
  name: "Uriel Hernández",
  devToUsername: "uriel_hedz",
  projects: [],
  articles: [],

}

export const UserContext = createContext({});

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(userJSON);

  useEffect(()=>{
    if(mock){
      setUser({ ...user, articles: devToMockResponse });
    }else{
      fetchDevTo().then(devToResponse => setUser({ ...user, articles: devToResponse }) )
    }

    async function fetchDevTo(){
      let response = await fetch(`https://dev.to/api/articles?username=${user.devToUsername}`, {
      })
      return await response.json();
    }

  }, [user.devToUsername])



  return <UserContext.Provider value={[user, setUser]}> {children} </UserContext.Provider>;
}
  

export default UserProvider;