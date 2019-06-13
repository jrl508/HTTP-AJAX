import React, {Component} from 'react';
import Friend from './Friend';

class FriendsList extends Component {
    render(){
        return(
            <div className="friend-list">
                {this.props.friends.map(friend => (
                    <Friend friend ={friend} key={friend.id}/>
                ))}
            </div>
        )
    }
}

export default FriendsList;