import React, { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className='m-5' style={{backgroundColor:"#85C1E9",height:"300px",width:"40%",alignItems:"center",display:"flex",justifyContent:"center"}}>
      <button className=' px-4 btn btn-warning' onClick={increment}>+</button>
      &nbsp;&nbsp;
      <span style={{color:"#ffffff"}}  >{count}</span>
      &nbsp;&nbsp;
      <button className='px-4 btn btn-warning' onClick={decrement}> - </button>
      </div>
    </div>
  )
}
