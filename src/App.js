import './App.css';
import Articles from './containers/Articles';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Layout from './containers/Layout';
import ThemeProvider from './contexts/ThemeContext';
import UserProvider from './contexts/UserContext';



function App() {
  return (

    <UserProvider>
      <ThemeProvider>
        <Layout>
          <Header></Header>
          <Articles></Articles>
          <Footer></Footer>
        </Layout>
      </ThemeProvider>

    </UserProvider >

  );
}

export default App;
