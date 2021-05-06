import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import Portfolio from './Portfolio/Portfolio';
import NotFound from './Common/NotFound';

function App() {
  return (
    <>
    <Switch>
    <Route exact={true} path='/'>
      <Home />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/contact'>
      <Contact />    
    </Route>
    <Route path='/portfolio'>
      <Portfolio />
    </Route>
    <Route path='/blog'>
      <Blog />
    </Route>
    <Route>
      <NotFound />
    </Route>
    </Switch>
    </>
  )
}
export default App;
