import React, { useState } from "react";
import { Form, Input, message, Radio } from "antd";
import { Button } from "@mui/material";
import loginImg from "./Assets/Images/Key.jpeg";
import axios from "../../Api/axios";
import { useNavigate } from "react-router-dom";
const REGISTER_URL = '/register';


function UserRegistration() {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(REGISTER_URL, values);
            console.log("Response Obj:", response);
            message.success("Registration Successful", 2);
            message.info('Please Login Now',2)

            navigate("/");
        } catch (err) {
            console.log("Error:", err.response);
            if (err.response && err.response.status === 401) {
                setErrorMessage(err);
                message.error("Registration failed");;
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
                    <p className="text-3xl font-bold text-center py-4">
                        Registration Page{" "}
                    </p>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Username is required" }]}
                    >
                        <Input placeholder="Enter The Username" className="rounded" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Password is required" }]}
                    >
                        <Input.Password placeholder="Enter The Password" />
                    </Form.Item>

                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: "Role is required" }]}
                    >
                        <Radio.Group>
                            <Radio value="customer">Customer</Radio>
                            <Radio value="admin">Admin</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <br />
                    <Form.Item>
                        <Button
                            className="w-full  py-1 mt-8 relative"
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default UserRegistration;
