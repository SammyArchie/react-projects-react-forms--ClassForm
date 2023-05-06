import { useState } from "react"


function FunctionForm() {
    const [formData, setFormData]= useState({
        name:"",
        email:"",
        password:"",
    })
   const handleChange=(e)=>{
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.name] : e.target.value
      })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type='text' name='name' onChange={handleChange}/> 
        <br />
        <br />
        <label htmlFor="email">email</label>
        <input type="text" name='email' onChange={handleChange}  />
        <br />
        <br />
        <label htmlFor="password">password</label>
        <input type="text" name='password' onChange={handleChange}/>
        <br />
        <br />
        <input type="submit" />
        </form>
      
    </div>
  )
}

export default FunctionForm
