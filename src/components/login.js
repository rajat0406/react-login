import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './login.css';
import './home.js'


class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      password:''
    };
  }

  changeHandler = e =>{
    this.setState({[e.target.name]:e.target.value})
  }

 submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('//url or api',this.state)
    .then(response => {
     const dataSet =response;
     console.log( JSON.stringify(dataSet.data['status']));
     if(dataSet.data['status']===1){
          window.open('https://www.extramarks.com/','_self');
          //this.props.history.push('/home');
     }
     else{
          alert(dataSet.data['message']);
     }
    })
    .catch(error => {
      console.log(error)
    })
   }
  render() {
    const{userName, password} = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div className="box">
          <div className="input-group">
            <input type="text" name="userName" className="login-input" value={userName} onChange={this.changeHandler} placeholder="Username"/>
          </div>
          <div className="input-group">
            <input type="password" name="password" className="login-input" value={password} onChange={this.changeHandler} placeholder="Password"/>
          </div>
          <Button type="submit" className="login-btn" >Login</Button>
        </div>
      </form>
    );
  }
}
export default LoginBox;
