import React, { useState } from "react";
import "./UserData.css";
import Table from "../table/Table";
import Button from "../button/Button";
const UserData = () => {
  const [entries, setEntries] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const AddTableEntry = (e) => {
    e.preventDefault();

    if (firstName === "" && lastName === "") {
      return;
    }
    setEntries((old) => [...old, { firstName: firstName, lastName: lastName }]);
  };
  return (
    <div className="userDataWrapper">
      <form className="userForm">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Button
          classStyle={"btnPrimary"}
          text={"submit"}
          onClick={(e) => AddTableEntry(e)}
        />
      </form>
      <div className="displayData">
        <Table entries={entries} />
      </div>
    </div>
  );
};

export default UserData;
