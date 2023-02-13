import { useState } from "react";
import "./App.css";
import AddUser from "./Component/Adduser";
import UserList from "./Component/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (name, age) => {
    // setUserList((prev) => {
    //   return [
    //     ...prev,
    //     { name: uName, age: uAge, id: Math.random().toString() },
    //   ];
    // });
    setUserList([
      ...userList,
      { name: name, age: age, id: Math.random().toString() },
    ]);
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
