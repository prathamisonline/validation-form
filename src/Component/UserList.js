import React from "react";
import classes from "./Userlist.module.css";

const UserList = ({ users }) => {
  return (
    <>
      <ul className={classes.users}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name.toUpperCase()}({user.age} years old)
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
