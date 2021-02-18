import react , {useState} from "react";
import './App.css';
import Footer from  "./Footer";
import Header from "./Header";
import PostAd from "./PostAd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./costumer/Login"
import Register from "./costumer/Register";
import ProposalAd from "./ProposalAd";
import ProposalForm from "./ProposalAd/ProposalForm";
import CustomerProfile from"./CustomerProfile";
import ProviderProfile from"./ProviderProfile";
import Home from "./Home";


function App() {

const [user,setUser]= useState(true);


  return (
  <>

    <Router>
      <Header />
      <Switch>
      <Route path="/ProposalForm/:id">
          <ProposalForm />
        </Route>
        <Route path="/">
          {user && <Home  setUser={setUser}/>}
          {!user && <Login />}
        </Route>
      
      </Switch>
      <Footer />
    </Router>
   
  </> );
}

export default App;
