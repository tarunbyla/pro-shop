import React, { useState } from "react";
import FormLayout from "../components/FormLayout";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/authApiSlice";
import { toast } from "react-toastify";
import { addUserToLocal } from "../slices/authSlice";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, isLoading] = useRegisterMutation();

  const submitHandler = (e) => {
    e.preventDefault();

    password === confirmPassword
      ? registerFunction()
      : toast.error("password and confirm password must be same");
  };

  const registerFunction = async () => {
    try {
      const res = await register({ name, email, password });
      console.log(res.data);
      if (res) {
        dispatch(addUserToLocal(res.data));
        navigate("/");
      }
    } catch (error) {
      toast.error(`${error.data.error}`);
    }
  };

  return (
    <FormLayout>
      <Form>
        <Form.Group controlId="name" className="my-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="my-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="btn" onClick={submitHandler}>
          register
        </Button>
      </Form>
      <Row className="mt-2">
        <Link to="/login">Existing Customer ? Login</Link>
      </Row>
    </FormLayout>
  );
};

export default RegisterPage;
