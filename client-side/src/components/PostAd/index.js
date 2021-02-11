import  React, { useState, } from "react";

import Details from "./Details";
import ProblemDescription from "./ProblemDescription";
import Preferences from "./Preferences";
import Budget from "./Budget";
import Availability from "./Availability";
import Review from "./Review";
import Landing from "./Landing"


const LANDING = "LANDING";
const DESCRIPTION ="DESCRIPTION";
const DETAILS= "DETAILS";
const PREFERENCES = "PREFERENCES";
const BUDGET = "BUDGET";
const AVAILABILITY = "AVAILABILITY";
const REVIEW = "REVIEW";

export default function PostAd(props){

     const [mode,setMode]=useState('LANDING');
     const [state, setState]=useState({
        appointmentFor:'',
        description:'',
        symptomes:[],
        therapy:'',
        insurance:'',
        age:'',
        sexuality:'',
        language:'',
        ethnicity:'',
        faith:'',
        country:'',
        typeOfPayment:'',
        minPrice:'',
        maxPrice:'',
        appointmentFrequency:'',
        timeRequirement:'',
        availabilityTo:'',
        availabilityFrom:''
     });

     const handleChange = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    } 
    function addSymptomes(newSymptomes) {
        setState({...state, symptomes :newSymptomes})
    }

     function transition(newMode){
         setMode(newMode)
     }

     function post() {


     }
    return(
        <>
        { mode === "LANDING" && <Landing {...state} handleChange={handleChange} onStart={transition}/>}
        { mode === "DESCRIPTION" && <ProblemDescription {...state} handleChange={handleChange} onBack={transition} onNext={transition}/>}
        { mode === "DETAILS" && <Details {...state} handleChange={handleChange} addSymptomes={addSymptomes} onBack={transition} onNext={transition}/> } 
        { mode === "PREFERENCES" && <Preferences {...state} handleChange={handleChange} onBack={transition} onNext={transition}/> } 
        { mode === "BUDGET" && <Budget {...state} handleChange={handleChange} onBack={transition} onNext={transition}/> } 
        { mode === "AVAILABILITY" && <Availability {...state} handleChange={handleChange} onBack={transition} onNext={transition}/> } 
        { mode === "REVIEW" && <Review {...state} handleChange={handleChange} onBack={transition} OnPost={post}/> }        
        </>  )
}