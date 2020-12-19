import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";
const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users found.</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <UserItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            placeCount={item.places}
          />
        );
      })}
    </ul>
  );
};
export default UserList;
