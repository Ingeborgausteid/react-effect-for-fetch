import UserListItem from "./UsersListItem";

function UserList({ userData }) {
  return (
    <ul className="users-list">
      {userData.map((user, i) => (
        <UserListItem userItem={user} key={i} />
      ))}
    </ul>
  );
}

export default UserList;
