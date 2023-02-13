import React from "react";
import { useState } from "react";
import classes from "./Adduser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

const AddUser = ({ onAddUser }) => {
  const [enterName, setEnterName] = useState("");
  const [enterAge, setEnterAge] = useState("");

  const formNameHandler = (e) => {
    setEnterName(e.target.value);
  };
  const formAgeHandler = (e) => {
    setEnterAge(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    onAddUser(enterName, enterAge);
    setEnterName("");
    setEnterAge("");
  };
  return (
    <>
      <Card>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.form}>
            <label>Username</label>
            <input type="text" value={enterName} onChange={formNameHandler} />
          </div>
          <div className={classes.form}>
            <label>age</label>
            <input type="text" value={enterAge} onChange={formAgeHandler} />
          </div>
          <Button type="submit">submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
