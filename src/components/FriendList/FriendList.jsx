import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FrendListStyle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FrendListStyle>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FrendListStyle>
  );
};
