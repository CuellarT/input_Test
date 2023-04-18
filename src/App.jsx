import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState({
    test1: "",
    test2: "",
    password: "",
    email: "",
    color: "",
    date: "",
    datetime:"",
    
  });

  const handleChangeInput =(e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue);
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1> Input Test</h1>
      <hr />
      <label for="test1">Test1</label>
      <input
      id="test1"
      onChange={(e) => handleChangeInput(e)}
      type="text"
      name="test1"
      value={inputValue.test1}
      /> 
      <br />
      <label>
        test2
      <input 
      className='mt-2'
      onChange={(e) => handleChangeInput(e)}
      type="text"
      name="test2"
      value={inputValue.test2} 
      />
      </label>
      <br />
      <label htmlFor="password">password</label>
      <input 
      className='mt-2' 
      id="password"
      onChange={(e) => handleChangeInput(e)}
      type="password"
      name="password"
      value={inputValue.password}
      />
      <br />
      <label htmlFor="emailInput">Email</label>
      <input
      className='mt-2'
      id="emailInput"
       onChange={(e)=> handleChangeInput(e)}
       type="email"
       name="validEmail"
       value={inputValue.validEmail} 
       />
       <br />
       <label htmlFor="color">color</label>
       <input 
       className='mt-2'
       id="color"
       onChange={(e) => handleChangeInput(e)}
       type="color"
       name="validcolor"
       value={inputValue.validcolor}
        />
        <br />
        <label htmlFor="date">calendario</label>
        <input 
        className='me-2'
        id="date"
        onChange={(e) => handleChangeInput(e)}
        type="date"
        name= "validdate"
        value={inputValue.validdate}
         />
         <br />
         <label htmlFor="image">IMAGEN</label>
         <input 
         className='mt-2'
         id="image"
         onChange={(e) => handleChangeInput(e)}
         type="image"
         name="validimage"
         value={inputValue.validimage}
          />
          <br />
          <label htmlFor="datetime-local"> nota </label>
          <input 
          className='mt-2'
          id='datettime'
          onChange={(e) => handleChangeInput(e)}
          type="datetime" 
          name='validdatetime'
          value={inputValue.validdate}/>

    </div>
  )
}

export default App
