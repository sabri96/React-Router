import React,{useState} from 'react';
import Nav from './Nav';
import {BrowserRouter as Router,Switch,Route, Link}from'react-router-dom';
import PrivateRoute from './Component/PrivateRoute';
import './App.css';
import Products from './Products';

function App() {
const [isAuth,setIsAuth]=useState(false)
const login=()=>setIsAuth(true)

  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/Home"  component={Home} />
     <Route path="/Category"  component={Category} />
    <Route path="/Products" component={Products} />
    <Route path="/AdminArea"> <AdminArea login={login} isAuth={isAuth} /></Route>
    <PrivateRoute path="/welcome" component={Welcome}  isAuth={isAuth} />
    
    </Switch>
    </div>
    </Router>
  );
}
const Home = () =>(
  <div>
    <h1>Home</h1>
  </div>
);

const Category = () =>(
  <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/boots">Boots</Link>
        </li>
        <li>
          <Link to="/footwear">FootWear</Link>
        </li>
      </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/shoes">
        <Shoes />
      </Route>
      <Route path="/boots">
        <Boots/>
      </Route>
      <Route path="/footwear">
        <FootWear />
      </Route>
    </Switch>
  </div>
</Router>
);

const Shoes = ()=>(
  <h1>Shoes</h1>
);

const Boots = () =>(
  <h1>Boots</h1>
);

const FootWear =() =>(
  <h1>FootWeear</h1>
);

const AdminArea = ({login,isAuth}) =>(
  
  <div className="Nav-Admin Area">
    <p>You must log in to view the page at /admin</p>
  <button onClick={login}>Log in</button>
  </div>
);

const Welcome =()=>{
  return(
    <div>
      <h1>Welcome Admin</h1>
      
    </div>
  );
}
export default App;
