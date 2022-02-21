import React from "react";
import "./Table.css";
const Table = ({ entries }) => {
  return (
    <div className="tableWrapper">
      <table className="table" cellSpacing="0">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
