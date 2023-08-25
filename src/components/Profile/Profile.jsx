import {
  ProfileStyle,
  Description,
  AvatarStyle,
  Name,
  Tag,
  Location,
  Stats,
  Item,
} from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ProfileStyle>
      <Description>
        <AvatarStyle src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </Item>
      </Stats>
    </ProfileStyle>
  );
};
