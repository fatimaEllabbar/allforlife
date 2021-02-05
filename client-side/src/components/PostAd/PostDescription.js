
import "./PostDescription.css"
import img from "../../images/Doubt.png"


export default function PostDescription(props) {



    return(
        <div className="post-description-container">
    
                <div className="post-description-progress">
                </div>
                <div className="post-description-progress1">
                   <span>Step 2/6</span> 
                </div>

                <div className="description-container">
                    <h3>Problem Description</h3>
                    <div className="container"> 
                        <div className="problemDescription">
                                <p>Here you can describe and 
                                    give more details
                                    about the situation that you
                                    are living and how we can help you.
                                </p>
                                <div><img src ={img}  alt="description"/></div>
                        </div>
                        <div className="description">
                            <textarea > </textarea>
                            <div className="button-nav">
                                <button onClick={()=>props.onBack()}> {"<"} Back</button>
                                <button onClick={()=> props.onNext("DETAILS")}>Next {">"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}
