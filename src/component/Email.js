import { useState } from 'react';
const Email = () => {

  const[nameData,setNameData]=useState()
  const[fullName,setFullName]=useState()
  const[jobtitle,setJobtitle]=useState()
  const[fulljobtitle,setFullJobtitle]=useState()
  const [company, setCompany] = useState()
  const [company1, setCompany1] = useState()
  const[date, setDate] = useState()
  const[newdate, setNewDate] = useState()
  const [manager, setManager] =useState()
  const [newmanager , setNewManager] = useState()

  const namechange = (e) =>{
    setNameData(e.target.value)
  }
  const handleChange = (e)=>{
  setJobtitle(e.target.value)
  }
  const companyChange = (e) => {
    setCompany(e.target.value) 
  }
  const dateChange = (e) => {
    setDate(e.target.value)
  }
     
  const managerName = (e) => {
    setManager(e.target.value)
  }

  const clickHandle  = (e) => {
    e.preventDefault();
    setFullName(nameData)
    setFullJobtitle(jobtitle)
    setCompany1(company)
    setNewDate(date)
    setNewManager(manager)

  }
      
const showlatter = ()=>{
  document.getElementById("letterdata").style.display="block"
  document.getElementById("formdata").style.display="none"
}

const showform = ()=>{
  document.getElementById("letterdata").style.display="none"
  document.getElementById("formdata").style.display="block"
}
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{backgroundColor:"#659ee0",height:"500px",width:"80%",alignItems:"center",display:"flex",justifyContent:"center"}}>
        <div>
      <h1 style={{color:"#ffffff",fontFamily:"museo-slab,serif"}}>Email format</h1>
      <button className='btn btn-dark px-4 mx-2' onClick={showlatter}>Letter</button>
      <button className='btn btn-dark px-4' onClick={showform}>Form</button>
      <div id='letterdata' style={{display:"none"}}>
      <h1>Cover letter</h1>
      <p style={{fontFamily:"museo-slab,serif",fontSize:"20px"}}>
        Dear {fullName} <br />
        We’re delighted to extend this offer of employment for the position of {fulljobtitle}&nbsp;
         with {company1}. <br /> Please review this summary of terms and conditions for your anticipated employment with us. <br />
        If you accept this offer, your start date will be {newdate} or another mutually agreed upon date, and you <br />
        would report to {newmanager}.
      </p>
      </div>
      <div id='formdata' style={{paddingTop:"10px"}}>
      <h2>Form</h2>
      <form >
        <label> Name :
        <input type="text" value={nameData} onChange={namechange}></input>
          </label>
           <br />
        <label> Job title :
          <input
            type="text"
            value={jobtitle}
            onChange={handleChange}
          />
        </label>
        <br /> 
        <label>Company Name :
         <input
            type="text"
            value={company}
            onChange={companyChange}
          />
        </label> <br /> 
        <label> Start date:
          <input
            type="number"
            value={date}
            onChange= {dateChange}
          />
        </label> <br />
        <label>Manager Name:
          <input
            type="text"
            value={manager}
            onChange={managerName}
          />
        </label>
      <button className='btn btn-primary px-4' onClick={clickHandle}>submit</button>
      </form>
      </div>
        </div>
      </div>
    </div>


  )
}
export default Email


