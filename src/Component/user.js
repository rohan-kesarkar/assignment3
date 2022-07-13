import React, { useState } from 'react'
import Records from "../Users.json"
export const User = ()=> {
    const [data, setdata] = useState(Records)
    const [order, setorder] = useState("ASC")
    const sorting =(col)=>{
        // if(order === "ASC"){
        //     setorder("DSC")
        // }else{
        //     setorder("ASC")
        // }
        if(order === "ASC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            //setorder("DSC")
        }
        if(order === "DSC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setdata(sorted);
            setorder("ASC")
        }

    }
  return (
    <div className="container">
      <table>
        <tr>
            <th>Serial No</th>
            <th onClick={()=>sorting("firstname")}>Name</th>
            <th onClick={()=>sorting("email")}>Email</th>
            <th>Address</th>
        </tr>
        <tr>
        <td></td>
            <td>{ Records.map( records =>{
          return(
            <div key="id">
          
            {records.name.firstname} {" "} 
            {records.name.lastname}
            
            </div>
          )
        })}</td>
            <td>{Records.map(records=>{
                return(
                    <div key="id">
          
                    {records.email}
                    
                    </div>
                )
            })}</td>
            <td>{Records.map(records=>{
                return(
                    <div key="id">
          
                    {records.address.number},
                    {records.address.city}
                    </div>
                )
            })}</td>
        </tr>
      </table>
    </div>
  )
}
