import React from 'react';
import './App.css';
import ReactDom from 'react-dom'
import axios from 'axios'
import {Route} from 'react-router-dom'
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      friends:[]
      }
    }
  

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')  
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

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({friends: res.data });
      })
      .catch(err => console.log(err));
  }

render(){
    return (
      <div className="App">
        <Route exact path='/' render={props=> <FriendsList {...props} friends={this.state.friends}/>}/>
        <Route exact path='/new-friend' render={props=> <FriendForm {...props} addFriend={this.addFriend}/>}/>
      </div>
    );
  }
}
export default App;
