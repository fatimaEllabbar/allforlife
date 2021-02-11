import React from 'react';


export default function(props){
  const { heading,listArray,name} = props;


  return(
    <>
    <h5>{heading}</h5>
    <select name={name} onChange={props.handleChange}>
     <option></option>
     {listArray.map((item,index) => {return <option key={index} value={item}> {item} </option>})}
     </select>
    </>
  )
 
}