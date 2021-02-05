import  React, { useState, } from "react";
import Details from "./Details";
import PostDescription from "./PostDescription";

const DESCRIPTION ="DESCRIPTION";
const DETAILS= "DETAILS";


export default function PostAd(props){

     const [mode,setMode]=useState('DESCRIPTION');

     function transition(newMode){
         setMode(newMode)
     }
    return(
        <>
        { mode === "DESCRIPTION" && <PostDescription onBack={transition} onNext={transition}/>}
        { mode === "DETAILS" && <Details onBack={transition} onNext={transition}/> } 
        </>  )
}