import React from 'react';
import Select from './Select';


import "./Budget.css";
import img from "../../images/chart.png";

const typeOfPayment=['Per section','Daily','Monthly','One time only','I dont know yet'];

export default function Budget(props) {
    return(

        <div className="post-description-container">
    
            <div className="post-description-progress2">
            </div>
            <div className="post-description-progress1">
            <span>Step 5/6</span> 
            </div>

            <div className="description-container">
                <h3>Budget</h3>
                <div className="budget-container">
                 <div className="budget-container-1">
                    <h5 className="budget-h5">How would you like to pay your sections?</h5>
                    <Select 
                       listArray={typeOfPayment} 
                        name='typeOfPayment'
                        {...props} 
                        handleChange={props.handleChange}
                    />

                  </div>
                  <div className="budget-container-2">
                    <h5 className="budget-h5">Set your estimated budget</h5>
                    <div><img src={img} alt="chart"></img></div>
                    <div className="budget-range">
                    <input type="radio" name="budget" value="budget"></input>
                    <label for="budgetOption">Set your own hourly range</label>
                    </div>
                    <div className="min-max-range">
                      <span>From</span>
                      <input type="text" placeholder="$ 0.00" name="minPrice" value={props.minPrice}   
                        {...props} 
                         onChange={props.handleChange}></input>
                      <label for="minPrice">/hr  To</label>
                      <input type="text" placeholder="$0.00" name="maxPrice" value={props.maxPrice} 
                        {...props} 
                        onChange={props.handleChange}></input>
                      <label for="maxPrice">/hr</label>
                    </div>
                </div>
                </div>
                <div className="button-nav">
                    <button onClick={()=>props.onBack("PREFERENCES")}> {"<"} Back</button>
                    <button onClick={()=> props.onNext("AVAILABILITY")}>Next {">"}</button>
                </div>


            </div>
       </div>

    )
}