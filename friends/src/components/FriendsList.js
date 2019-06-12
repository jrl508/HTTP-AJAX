import React, {Component} from 'react';

class FriendsList extends Component {
    render(){
        return(
            <>
                {this.props.friends.map(friend => (
                    <>
                        <h1>{friend.name}</h1>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </>
                ))}
            </>
        )
    }
}

export default FriendsList;