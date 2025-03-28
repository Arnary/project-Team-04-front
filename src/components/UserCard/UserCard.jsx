const UserCard = ({ user }) => {
  const { id, name } = user;
  return <div>{name}</div>;
};

export default UserCard;
