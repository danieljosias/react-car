import './App.scss';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

import Logo from './components/Logo';
import Navegacao from './components/Navegação';
import Luxo from './components/Carro-luxo'
import Luxo2 from './components/Carro-luxo2';
import Main from './components/Main';
import Contatos from './components/Contatos';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Logo />
        <Navegacao />
        <Luxo />
        

        <Switch>

          <Route exact path="/"> <Main /> </Route>
          <Route exact path="/luxo"> <Luxo2 /> </Route>
          <Route exact path="/carros"> <Main /> </Route>
          <Route exact path="/contatos"> <Contatos /> </Route>
          
        
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  
}

export default App;
