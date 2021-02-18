
import "./CustomerProfile.css";
import {useState, useEffect} from "react";
import axios from "axios";
import ProposalItem from "../ProposalAd/ProposalItem";


export default function CustomerProfile(props) {
   let  id = 2 ;
    const [jobes,setJobes] = useState([]);
    const [count,setCount] = useState([]);

    useEffect(()=>{
            axios.get(`http://localhost:8007/api/jobpost/customer/${id}`).then(res =>{
                setJobes(res.data);
                console.log(res.data)
            });

            axios.get(`http://localhost:8007/api/jobproposals/customer/${id}`).then(res =>{
               setCount(res.data);
                console.log(res.data);
            });
     },[]);

    let number=0;
    if(count.length >0){
        number=count[0].count;
    }

    return(
        <> 
         
        <section className="profile-container">
            <div className="profile-container-title">
                Hello, Name ...
            </div>
            <div className="profile-separation"></div>
            <div className="profile-container-offers">
                <h3>Offers  <span className="yellow-icon">◣</span> </h3>
                <div className="profile-offers">
                    <img src={`./image/image1.png`} />
                    <div className="profile-newoffers">You have  {number} { number > 1 ? "offers" : "offer"} for your posts.</div>
                    <div className="profile-button">
                        <button>CLICK TO SEE</button>
                    </div>
                </div>
            </div>
            <div className="profile-posts-container">
                <div className="profile-posts">
                <h3>Your Posts <span className="yellow-icon">◣</span> </h3>
                { jobes.length>0 && (
                <div className="profile-posts-item">
                    {jobes.map(job => {
                    return (
                    <ProposalItem key ={job.id } id={id} {...job}/>
                    )})
                }
                </div> )}
                { jobes.length <= 0 && (  <div className="profile-posts-item"> 
                  <span>You don't have any job posting yet !</span></div>)}
                </div>
                <div className="profile-newpost">
                    <div>Create a new Post</div>
                    <button>CREATE POST</button>
                    <img src={`./image/image2.jpg`} />
                </div>
            </div>
        </section>)
        </>
    )

}