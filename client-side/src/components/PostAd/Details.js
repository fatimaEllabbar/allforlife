

import "./Details.css"



export default function Details(props) {

    return(
        <div className="post-description-container">
    
                <div className="post-description-progress2">
                </div>
                <div className="post-description-progress1">
                   <span>Step 3/6</span> 
                </div>

                <div className="description-container">
                    <h3>Details</h3>
                    <div className="details-symptoms"> 
                    <h4>SYMPTOMS</h4>
                    
                    <div className="container">
                       
                        <ul className="ks-cboxtags">
                                <li>
                                    <input type="checkbox" id="checkboxOne" value="Rainbow Dash"/>
                                    <label for="checkboxOne"/>Rainbow Dash
                                </li>
                        </ul>
                    </div>
                    <div className="details-others">

                    </div>

                        
                        
                    <div className="button-nav">
                            <button> {"<"} Back</button>
                            <button>Next {">"}</button>
                    </div>
                       
                    
                </div>
            </div>
        </div>
    )
}
