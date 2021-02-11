import React from "react";

import Select from "./Select";

import "./Preferences.css";

//Array for countries
const country = ['United States', 'Canada'];
const language = ['ADL','English'];
const ethnicity = ['Africian-Americian','Asian','Hispanic and Latino','Native American'];
const faith = ['Buddhist','Chritsian'];


export default function Preferences(props) {
    return(

        <>
        <div className="post-description-container">
                 <div className="post-description-progress2">
                </div>
                <div className="post-description-progress1">
                   <span>Step 3/6</span> 
                </div>
  
                <div className="description-container">
                  <div className='h3-heading'>
                    <h3>Preferences</h3>
                  </div>           
                <div className="preference-details">
                <Select 
                heading='Language' 
                listArray={language} 
                name='language' 
                {...props} 
                handleChange={props.handleChange}
                />
                <Select 
                heading='ETHNICITY' 
                listArray={ethnicity} 
                name='ethnicity' 
                {...props} 
                handleChange={props.handleChange}
                />
                <Select 
                heading='FAITH' 
                listArray={faith} 
                name='faith' 
                {...props} 
                handleChange={props.handleChange}
                />
                <Select 
                heading='COUNTRY' 
                listArray={country} 
                name='country' 
                {...props} 
                handleChange={props.handleChange}
                />
                </div>                      
                <div className="button-nav1">
                            <button onClick= {()=>props.onBack("DETAILS")}> {"<"} Back</button>
                            <button onClick= {()=>props.onNext("BUDGET")}>Next {">"}</button>
                </div>
            </div>              
        </div>
      </>
    )
}