import React from "react";
// import classes from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
      </form>
    </div>
  );
};

export default AddUser;
