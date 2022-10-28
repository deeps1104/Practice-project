import React, { useState } from 'react'
import './Clock.css'
const Clock = () => {
 const [currenttime, setCurrentTime] = useState(new Date());
 let Hours = currenttime.getHours()
 
 const UpdateTime = () => {
  setCurrentTime(new Date())
 }
 setInterval(UpdateTime,1000);
  return (
    <div className='clock'>
   <h1> {currenttime.toLocaleTimeString()}
   {
    Hours>=12?"PM":"AM"
   }
    </h1>
    </div>
  )
}
export default Clock