import React, { useState } from "react";
import FormLayout from "../components/FormLayout";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingPage = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress?.address||"");
    const [city, setCity] = useState(shippingAddress?.city||"");
    const [pincode, setPincode] = useState(shippingAddress?.pincode||"");
    const [country, setCountry] = useState(shippingAddress?.country||"");

    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const saveActionHandler=(event) => {
        event.preventDefault()
        dispatch(saveShippingAddress({address,city,pincode,country}))
        navigate("/payment")
    }
  return (
    <FormLayout>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <h1 className="my-4">Shipping</h1>
      <Form onSubmit={saveActionHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(x) => setAddress(x.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(x) => setCity(x.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="pincode" className="my-2">
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pincode"
            value={pincode}
            onChange={(x) => setPincode(x.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(x) => setCountry(x.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="btn">
          Save
        </Button>
      </Form>
    </FormLayout>
  );
};

export default ShippingPage;
