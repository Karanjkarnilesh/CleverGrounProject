import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantList from './components/RestaurantList'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'
import {Nav,Navbar} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Resto</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#home"><Link to="/list">List</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/create">Create</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/search">Search</Link></Nav.Link> 
      <Nav.Link href="#home"><Link to="/update">Update</Link></Nav.Link>     
    </Nav>
  </Navbar>
          <Route path="/list"><RestaurantList/></Route>
          <Route path="/create"><RestaurantCreate/></Route>
          <Route path="/search"><RestaurantSearch/></Route>
          <Route path="/detail"><RestaurantDetail/></Route>
          {/* send  all props or id to RestaurantUpdate  */}
          <Route path="/update/:id" render={props=>(<RestaurantUpdate {...props}/>)}>
            
            </Route>
          {/* exact is used because home is run on any link click to avoid that use exact */}
          <Route exact path="/"><Home/></Route>
          
      </Router>
    </div>
  );
}
export default App;
