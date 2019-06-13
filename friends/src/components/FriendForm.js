import React,{Component} from 'react';
import styled from 'styled-components'

const Form = styled.form`
display:flex;
flex-flow:column nowrap;
width:20em;
height:20em;
line-height:1.8;
padding:1em;
text-align:center;
border: solid black 1px;
background-color:lightgrey;
margin:auto;
margin-top:30%;
`

class FriendForm extends Component {
    state ={
            name: '',
            age: '',
            email: ''
        
    }

    changeHandler = e=>{
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
                [e.target.name]: e.target.value
            
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: '',
          
        });
      };

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <h3>Add Friend</h3>
                Name <input type='text' name='name' value={this.state.name} onChange={this.changeHandler}/>
                Age <input type='text' name='age' value={this.state.age} onChange={this.changeHandler}/>
                Email <input type='email' name='email' value={this.state.email} onChange={this.changeHandler}/>
                <input type="submit"/>
            </Form>
        )
    }
}

export default FriendForm;