import {
  Item,
  Status,
 Name
} from "./FriendListItem.styled"

export const FriendListItem = ({avatar,isOnline,name}) => {
    return (
  <Item>
  <Status $isOnline={isOnline}></Status>
  <img src={avatar} alt="User avatar" width="48" />
<Name>{name}</Name>
</Item>

)
}
 