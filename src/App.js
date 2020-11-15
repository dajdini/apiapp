import Home from './home'
import Navbar from './navbar'
import Books from './books'
import Wheather from './Wheather'
import {BrowserRouter,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/books" component={Books}></Route>
      <Route path="/Wheather" component={Wheather}></Route>
      <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
