import React from 'react';
import { useState } from 'react';

import "./Details.css";
import Select from "./Select";

const symptomes=["Addiction", "Adoption","Anxiety",
"Alchol Use","depression", "Chronic illness", "Divorce",
 "Domestic Abuse","Drug Abuse", "Gambling","Parenting",
 "Sexual Addiction","Grief" ];
 const therapy=["Acceptance and Commitment (ACT)","Adlerian","Art Therapy", 
 "Attachment-based", "Biofeedback", "Coaching"];
 const insurrance=["1199SEIU","ACI Specialty Benefits", "AMERIGROUP"];
 const age=["Adolescents/ Teenagers (14 to 19)", "Adults", "children (6 to 10)", "Elders(65+)"]
 const sexuality=['Bisexual','Gay','Lisbian'];

export default function Details(props) {

    
    function checkSymptoms(evt){
        const newSymptomes=[...props.symptomes];
        if(evt.target.checked){
            const find=newSymptomes.find(symptome =>  symptome === evt.target.name);
            if(!find){
                newSymptomes.push(evt.target.name);
                props.addSymptomes( newSymptomes);
            }
        } else {
            const arr = newSymptomes.filter(symptome => symptome !== evt.target.name);
            props.addSymptomes( arr);
        }
    }
            

    return(
        <div className="post-description-container">
    
                <div className="post-description-progress2">
                </div>
                <div className="post-description-progress1">
                   <span>Step 3/6</span> 
                </div>

                <div className="description-container">
                    <h3>Details</h3>
                    <br/>
                    <h5>SYMPTOMS</h5> 
                    <br/>
                    <div className="container-symptomes">
                    {symptomes.map((item,index) => {return (
                            <label key={index} className="container-symptomes-1">
                            <span className="symptomes-text" >{item}</span>
                            <input type="checkbox" name={item} value={item} onClick={(evt)=>checkSymptoms(evt)} />
                            <span className="checkmark"></span>
                            </label>

                    )})}
                      
                    </div>
                    <div className="details-others">
                        <Select heading='TYPE OF THERAPY:' listArray={therapy} name='therapy' {...props} handleChange={props.handleChange}/>
                        <Select heading='ISSURANCE:' listArray={insurrance} name='insurance'{...props} handleChange={props.handleChange} />
                        <Select heading='AGE:' listArray={age} {...props} name='age' handleChange={props.handleChange} />
                        <Select heading='SEXUALITY' listArray={sexuality} name='sexuality' {...props} handleChange={props.handleChange}/>                       
                    </div>                      
                    <div className="button-nav1">
                            <button onClick= {()=>props.onBack("DESCRIPTION")}> {"<"} Back</button>
                            <button onClick= {()=>props.onNext("PREFERENCES")}>Next {">"}</button>
                    </div>      
               
                </div>
        </div>
    )
}
