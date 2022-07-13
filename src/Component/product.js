import React,{useState} from 'react'
import Records from '../product.json'
export const Product =()=> {
    const [data, setdata] = useState(Records)
    const [order, setorder] = useState("ASC")
    const sorting =(col)=>{
        if(order === "ASC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC")
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
    <div className='container'>
      <table className="table table bordered">
        <thead>
            <th onClick={()=>sorting("title")}>Title </th>
            <th onClick={()=>sorting("category")}>Category</th>
            <th>Price</th>
            <th>Rating</th>
        </thead>
        <tr>
            <td>
             {Records.map(records =>{
                return(
                    <div>
                        {records.title}
                    </div>
                )
             })}
            </td>
            <td>{Records.map(records =>{
                return(
                    <div>
                        {records.category}
                    </div>
                )
             })}</td>
             <td>
             {Records.map(records =>{
                return(
                    <div>
                        {records.rating.rate}
                    </div>
                )
             })}
             </td>
        </tr>
      </table>
    </div>
  )
}
