import react , {useState} from "react";
import './App.css';
import Footer from  "./Footer";
import Header from "./Header";
import PostAd from "./PostAd";


import Login from "./costumer/Login"
import Register from "./costumer/Register";
import ProposalAd from "./ProposalAd";


function App() {

const [user,setUser]= useState(null);

  return (
  <>
    <Header />
    {!user && <ProposalAd setUser={setUser}/>}
    {user && <h1>Hi {user.first_name} !</h1>}
    <Footer />
  </> );
}

export default App;
