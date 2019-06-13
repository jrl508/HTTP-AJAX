import React, {Component} from 'react';

class Friend extends Component {
    render(){
        return(
            <div className="friend-card">
                <h1>{this.props.friend.name}</h1>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
            </div>
        )
    }
}

export default Friend;