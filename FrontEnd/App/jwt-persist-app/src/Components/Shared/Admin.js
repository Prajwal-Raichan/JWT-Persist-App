import React from "react";
import { Link } from "react-router-dom";
import GetAllUsers from "../Services/GetAllUsers";

const Admin = () => {
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <GetAllUsers />
      <br />
      <div className="flexGrow">
        <Link to="/home">Home</Link>
      </div>
    </section>
  );
};

export default Admin;
