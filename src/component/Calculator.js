import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../component/Calculator.css'
const Calculator = () => {
  const [val, setVal] = useState("");
  const getVal = (e) => {
    setVal(e.target.value)
  }

  const clickHandle = (e) => {
    setVal(val + e.target.value)
  }

  const sumVal = () => { 
    try {
      setVal(eval(val))
    } catch (error) {
      setVal("Error")
    }
  }
  const clear = () => {
    setVal("")
  }

  const inputKeys = (e) => {
    setVal( e.target.value)
  }

  return (
    <div className='calculator'>
      <div>
        <TextField  className='input-box' id="outlined-basic" variant="outlined" type="number " value={val} onChange={inputKeys}/>
        {/* <Button className='clear-btn'
      variant="contained" value="clear" onClick={clear}>Clear</Button> */}
        {/* <input type="number " value={val} placeholder='enter a num' onChange={getVal} /> */}
        <div>
          <div className='onclick-btns'>
            <ButtonGroup variant="contained" aria-label="outlined primary Button group">
              <Button value='7' onClick={clickHandle} >7</Button>
              <Button value='8' onClick={clickHandle}>8</Button>
              <Button value='9' onClick={clickHandle}>9</Button>
              <Button value='+' onClick={clickHandle}>+</Button>
            </ButtonGroup>
          </div>
          <div className='onclick-btns'>
            <ButtonGroup variant="contained" aria-label="outlined primary Button group">

              <Button value='4' onClick={clickHandle}>4</Button>
              <Button value='5' onClick={clickHandle}>5</Button>
              <Button value='6' onClick={clickHandle}>6</Button>
              <Button value='-' onClick={clickHandle} >-</Button>
            </ButtonGroup>

          </div >
          <div className='onclick-btns'>
            <ButtonGroup variant="contained" aria-label="outlined primary Button group">
              <Button value='1' onClick={clickHandle}>1</Button>
              <Button value='2' onClick={clickHandle}>2</Button>
              <Button value='3' onClick={clickHandle}>3</Button>
              <Button value='*' onClick={clickHandle}>*</Button>
            </ButtonGroup>

          </div>
          <div className='onclick-btns'>
            <ButtonGroup variant="contained" aria-label="outlined primary Button group">
              <Button value='.' onClick={clickHandle}>.</Button>
              <Button value='0' onClick={clickHandle}>0</Button>
              <Button value='/' onClick={clickHandle}>/</Button>
              <Button value='=' onClick={sumVal}>=</Button>
              {/* <Button value="clear" onClick={clear} >C</Button> */}
            </ButtonGroup>
          </div>
        </div>
        <div id='clearbtn'> 
          <Button className='clear-btn' variant="contained" value="clear" onClick={clear}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Calculator