import { List } from './FriendList.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        );
      })}
    </List>
  );
};

export default FriendList;
