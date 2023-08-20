export const FriendListItem = ({avatar,isOnline,name}) => {
    return (
  <li class="item">
  <span class="status" isOnline={isOnline}></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
<p class="name">{name}</p>
</li>

)
}
 