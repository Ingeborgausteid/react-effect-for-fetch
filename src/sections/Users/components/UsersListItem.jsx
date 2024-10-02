function UserListItem({userItem: {profileImage, firstName, lastName, favouriteColour, email}}, ) 
{
    return(
      <li style={{background: favouriteColour}}>
        <img
          src={profileImage}
          alt="profileImage"
        />
        <h3>{firstName} {lastName}</h3>
        <p>Email: {email}</p>
      </li>
    );
}

export default UserListItem