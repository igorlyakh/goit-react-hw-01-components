import { Avatar, List, ListItem, Status } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <ListItem key={item.id}>
            <Status $isOnline={item.isOnline}></Status>
            <Avatar src={item.avatar} alt={item.name} />
            <p>{item.name}</p>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FriendList;
