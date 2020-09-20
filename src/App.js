import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login'
import Signup from './Components/SignUp/SignUp'
import Header from './Components/Header/Header'
import Files from './Components/FIles/Files'
import Recycle from './Components/Recycle/Recycle'
import HomePage from './Components/HomePage/HomePage';
function App() {
  return (
    <div >
      <Router>

      <Switch>
<Route path="/login">
<Login/>
</Route>

<Route path="/content">
{/* {auth ? <Header/> : null} */}
<Header/>
</Route>
<Route path="/signup">
  <Signup/>
</Route>


  <Route path="/files">
  <Files/>
</Route>


<Route path="/recycle">
  <Recycle/>
</Route>
  
<Route path="/home">
  <HomePage/>
</Route>




      </Switch>

</Router>

    </div>
  );
}

export default App;
