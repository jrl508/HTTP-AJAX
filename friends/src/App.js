import React from 'react';
import './App.css';
import ReactDom from 'react-dom'
import axios from 'axios'
import FriendsList from './components/FriendsList';

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      friends:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')  
      .then(res =>{
        console.log(res);
        this.setState({
          friends: res.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }

render(){
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}
export default App;
