import "./Review.css"

export default function Review(props) {
    return(

        <div className="post-description-container">
    
            <div className="post-description-progress2">
            </div>
            <div className="post-description-progress1">
            <span>Step 6/6</span> 
            </div>

            <div className="description-container">
                <h3>Review</h3>
                <div className="review-container">
                    <div className="review-container-left">
                        <fieldset>
                            <legend>Problem description</legend>
                            <p> gfhgfgfghhgfhgfhgf bnbb nbvvbn jhgjh
                                hghjgjh jhgjhg jhgjhgj hjgjhgjh jhjghjghj
                                hgfhgf jhjgjhg jhgjhg 
                                hgfhg jhgjg jhgjjg guuytg jgjjgj 
                                jhjhgujygu hgiuiu vvvv gjuiuddfuwe fhgf
                                dkfjhsdfh dgffdsgdfg.
                            </p>
                        </fieldset>
                        <fieldset>
                            <legend>Details</legend>
                        </fieldset> 
                        <fieldset>
                            <legend>Preferences</legend>
                        </fieldset>     
                        </div>
                    <div className="review-container-rigth">
                        <fieldset>
                                <legend>Budget</legend>
                        </fieldset> 
                        <fieldset>
                                <legend>Availability</legend>
                        </fieldset>  
                    </div>     
                </div>
                <div className="button-nav1">
                            <button onClick= {()=>props.onBack("DESCRIPTION")}> {"<"} Back</button>
                            <button onClick= {()=>props.onNext("PREFERENCES")}>Next {">"}</button>
                </div>
            </div>
       </div>

    )
}