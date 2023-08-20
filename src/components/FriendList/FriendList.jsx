import { FriendListItem } from "components/FriendListItem/FriendListItem"
 
export const FriendList = ({friends}) => {
    return (<ul class="friend-list">
           {
         friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
          )
          )
      }  
        
    </ul>
    )
    
} 