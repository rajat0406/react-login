import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginBox from './components/login';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
    };
  }

  showLoginBox(){
    this.setState({isLoginOpen:true});
  }

  render(){
  return (
      <div className="box-container" style={{marginLeft:450, marginTop:120}}>
        <div className="title" style={{marginTop:5}}>
          <h1 style={{}}>Login</h1>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+"/emscc-login-icon.png"}
          style={{ width: 140, height: 140, borderRadius: 70,marginBottom:20}} className="App-logo" alt="logo" />
        </div>
        { this.state.isLoginOpen && <LoginBox/>}
      </div>
  );
}
}
export default App;