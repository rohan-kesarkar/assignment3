import React, { useState } from 'react'
import Records from '../product.json'

export const Filter1= ()=> {
    const filtered = Records.map(records=>records.title)
    const [filteredRecords, setfilteredRecords] = useState(filtered)
    const filteredFunction = (e) =>{
        setfilteredRecords(filtered.filter((a)=> a.startsWith(e.target.value)));
    }
  return (
    <div>
    <input type="text" onKeyUp={filteredFunction} />
    {filteredRecords?.map((a)=>(
        <p>{a}</p>
    ))}
    <button onClick={(e)=>console.log(filtered)}>Submit</button>
    </div>
  )
}
export const Filter2= ()=> {
    const filtered = Records.map(records=>records.category)
    const [filteredRecords, setfilteredRecords] = useState(filtered)
    const filteredFunction = (e) =>{
        setfilteredRecords(filtered.filter((a)=> a.startsWith(e.target.value)));
    }
  return (
    <div>
    <input type="text" onKeyUp={filteredFunction} />
    {filteredRecords?.map((a)=>(
        <p>{a}</p>
    ))}

    </div>
  )
}
