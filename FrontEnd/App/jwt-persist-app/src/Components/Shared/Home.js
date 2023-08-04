import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosPrivate from "axios"; // Import axios module

const LOGOUT_URL = "/logout";

const Home = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Send a POST request to the logout endpoint
      const response = await axiosPrivate.get(
        LOGOUT_URL,
        { refreshToken: "" }, // Pass the refresh token if required by the server
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // Handle the response and perform any necessary actions
      console.log(JSON.stringify(response?.data));

      // Perform any additional actions after successful logout
      navigate("/");
    } catch (err) {
      // Handle any errors that occurred during the logout process
      console.error(err);
    }
  };

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/editor">Go to the Editor page</Link>
      <br />
      <Link to="/admin">Go to the Admin page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge</Link>
      <br />
      <Link to="/linkpage">Go to the link page</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
};

export default Home;
