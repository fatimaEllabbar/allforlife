
export default function ProposalItem(props){

    return(
        <article className="proposalad-list-item">
                  <div className="item-description">
                     <h3>Post Title</h3>
                     <h4>Frequency / Time period / Info from “Preferences”</h4>
                     <p> <strong>Description</strong> : Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
                     <div className="item-symptomes-container">
                             <div className="item-symptomes">addiction</div>
                             <div className="item-symptomes">addiction</div>
                             <div className="item-symptomes">addiction</div>              
                    </div>
                  </div>
                  <div className="item-budget-apply">
                      <div className="item-budget">Budget: $1234</div>
                      <button>APPLY</button>
                  </div>

              </article>
    )
}