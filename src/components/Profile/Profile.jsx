import {
  UserProfile,
  Avatar,
  UserName,
  InfoList,
  InfoItem,
} from './Profile.styled';

export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <UserProfile>
      <Avatar src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <p>@{tag}</p>
      <p>{location}</p>
      <InfoList>
        <InfoItem>
          <span>Followers</span> <span>{followers}</span>
        </InfoItem>
        <InfoItem>
          <span>Views</span> <span>{views}</span>
        </InfoItem>
        <InfoItem>
          <span>Likes</span> <span>{likes}</span>
        </InfoItem>
      </InfoList>
    </UserProfile>
  );
};
