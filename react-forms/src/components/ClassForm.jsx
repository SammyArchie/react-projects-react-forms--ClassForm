import { Component } from 'react'

 class ClassForm extends Component {
    constructor (props) {
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
        }

        this.handleChange=(e)=>{
            e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
          
        }

        this.handleSubmit=(e)=>{
            e.preventDefault();
            console.log(this.state)
        }
    }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type='text' id='name' name='name' onChange={this.handleChange}/> 
        <br />
        <br />
        <label htmlFor="email">email</label>
        <input type="text" id='mail' name='email' onChange={this.handleChange}  />
        <br />
        <br />
        <label htmlFor="password">password</label>
        <input type="text" id='password'name='password' onChange={this.handleChange}/>
        <br />
        <br />
        <input type="submit" />


        </form>  
      </div>
    )
  }
}

export default ClassForm
