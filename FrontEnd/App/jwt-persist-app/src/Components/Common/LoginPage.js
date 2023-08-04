import React, { useState, useEffect } from "react";
import { Form, Input, Checkbox, message } from "antd";
import { Button } from "@mui/material";
import loginImg from "./Assets/Images/Key.jpeg";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "../../Api/axios";
import useAuth from "../../hooks/useAuth";
import { useStateAuthContext } from "../../Contexts/ContextAuthProvider";
const LOGIN_URL = "/login";

function LoginPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth,persist,setPersist } = useAuth();
  const { userRole }=useStateAuthContext();
  const from = location.state?.from?.pathname || "/dashboard";
  const [errorMessage, setErrorMessage] = useState("");



  const handleToggle = () => {
    setPersist(prevValue => !prevValue);
  };
  

  useEffect(() => {
    
    localStorage.setItem("persist", persist);
}, [persist,userRole])




  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(LOGIN_URL, values, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const { username } = values;
      console.log("Current Username:", username);
      const { accessToken,roles } = response.data;
      //console.log("Access Token:  " + accessToken);
      console.log("Role: " + roles); // Log the fetched role
      //console.log("Response Obj:", response);
      setAuth({ username, accessToken, roles });
      localStorage.setItem("accessToken", accessToken);
      message.success("Login Successful", 2);
      navigate(from, { replace: true });
    } catch (err) {
      console.log("Error:", err.response);
      if (err.response && err.response.status === 401) {
        setErrorMessage(err);
        message.error("Invalid credentials");
        console.log("Validation failed:");
      }
    }
  };


  return (
    <div className="relative w-full h-screen bg-zinc-800/100">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <Form
          className="max-w-[400px] w-full mx-auto bg-white p-10"
          onFinish={handleSubmit}
        >
          <h1 className="flex justify-center text-3xl font-bold text-black py-4" style={{ fontFamily: 'Arial, sans-serif' }}>
             JWT-PERSIST APP
          </h1><br/>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input className="border relative bg-gray-100 p-2" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password className="border relative bg-gray-100 p-2" />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full  py-1 mt-8 relative"
              type=" submit"
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
          </Form.Item>

          <Form.Item>
            <Form.Item>
            <Checkbox className=" flex justify-center text-center mt-2 font-semibold "
                     checked={persist} onChange={handleToggle}>Remember Me</Checkbox>
            </Form.Item>
            <a className="flex justify-center text-center mt-2 font-medium text-green-600" href="/register">
              Not a member? Sign up now
            </a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
