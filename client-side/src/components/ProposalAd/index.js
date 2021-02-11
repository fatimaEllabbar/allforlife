
import "./ProposalAd.css";

import { FaWifi } from 'react-icons/fa';

import Filter from "./Filter";
import filterData from "./FilterData";
import ProposalItem from "./ProposalItem";
import { useState } from "react";

export default function ProposalAd(props){

    //set the filter with an empty array.
    const[filter,setFilter] = useState([null,null,null,null,null]);

    //helper function that unchecked others checkboxs within the same group
    function unchecked(checkboxName, event) {
        let checkboxes = document.getElementsByName(checkboxName);
        checkboxes.forEach((item) => {
          if (item.value !== event.target.value) {
            item.checked = false;
          } 
        });
    }
    
    
    // adding filters
    const handleChange = (event) => {
      const { name, value } = event.target;
      const newFilter=[...filter];
    //set the filter to null of the checkbox uncheked
      if(!event.target.checked){ 
        if(name==="jobType"){
            newFilter[0]=null;
        }
        if(name==="numberOfProposals"){
            newFilter[1]=null;
        }
        if(name==="budget"){
            newFilter[2]=null;
        }
        if(name==="joblenght"){
            newFilter[3]=null;
        }
        if(name==="hoursPerWeek"){
            newFilter[4]=null;
        }
      }

    //set the filter to the value of the checkbox checked
      if(event.target.checked){ 

        if(name==="jobType"){
            newFilter[0]=value;
            unchecked("jobType", event)
        }
        if(name==="numberOfProposals"){
            newFilter[1]=value;
            unchecked("numberOfProposals", event)
        }
        if(name==="budget"){
            newFilter[2]=value;
            unchecked("budget", event)
        }
        if(name==="joblenght"){
            newFilter[3]=value;
            unchecked("joblenght", event)
        }
        if(name==="hoursPerWeek"){
            newFilter[4]=value;
            unchecked("hoursPerWeek", event)
        }
       
      }

      setFilter([...newFilter]);
    } 

    return(
        <>
      <section className="proposalad-container">
          <aside className="proposalad-filter">
              <h3>Filter By</h3> 
              <Filter title="Jobe Type" name="jobType" onChange={handleChange} list={filterData.jobType} />
              <Filter title="Number of Proposals"  onChange={handleChange} name='numberOfProposals' list={filterData.numberOfProposals}/>
              <Filter title="Budget"  name= "budget" onChange={handleChange} list={filterData.budget}/>
              <Filter title="Job length " name="joblenght" onChange={handleChange} list={filterData.jobLenght}/>
              <Filter title="Hours per Week" name="hoursPerWeek" onChange={handleChange} list={filterData.hoursPerWeek}/>
          </aside>
          <section className="proposalad-list">
              <div className="proposalad-list-header">
                  <div className="proposalad-list-header-counter">
                    <FaWifi style= { {color: "#f5c107", fontSize: "1.5em", transform: "rotate(45deg)"}}/> 
                    <div className="counter"><strong>12,312</strong> jobs found </div> 
                  </div>
                  <div className="proposalad-list-header-filter">
                     <span> Sort:</span>
                     <select>
                          <option>Newest</option>
                          <option>Latest</option>
                      </select>
                  </div>
                 </div> 
                 <ProposalItem />
                 <ProposalItem />
                 <ProposalItem />
                 <div className="proposal-footer"></div>
          </section>
        </section>   
        </>  )
}