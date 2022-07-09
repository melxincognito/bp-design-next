import React, { useState, useReducer, useEffect } from "react";
import Axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function admindashboard() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Item",
            amount: {
              currency_code: "USD",
              value: 70,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
    }
  }, [success]);
  return (
    <>
      <div className="wrapper">
        <div className="product-img">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg"
            alt="SunFlower"
            height="420"
            width="327"
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>Sunflower</h1>
            <h2>POPULAR HOUSE PLANT</h2>
            <p>
              Sunflowers are usually tall annual or perennial plants.
              <br />
              Each "flower" is actually a
              <br />
              disc made up of tiny flowers,
              <br />
              to better attract pollinators.{" "}
            </p>
          </div>

          <div className="product-price-btn">
            <p>
              <span>$20</span>
            </p>
            <button type="submit" onClick={() => setShow(true)}>
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div>
        <PayPalScriptProvider
          options={{
            "client-id": `${process.env.paypal_client_id}`,
          }}
        >
          {show ? (
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              style={{ layout: "vertical", color: "black" }}
            />
          ) : null}
        </PayPalScriptProvider>
      </div>
    </>
  );
}

/*
function Counter(props) {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "increment5":
        return { count: state.count + 5 };
      case "decrement5":
        return { count: state.count - 5 };
      default:
        throw new Error("Unexpected action");
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: props.initialCount });

  return (
    <div>
      <h1> count: {state.count} </h1>
      <button onClick={() => dispatch({ type: "increment" })}> Up</button>
      <button onClick={() => dispatch({ type: "decrement" })}> Down</button>
      <button onClick={() => dispatch({ type: "increment5" })}> Up 5</button>
      <button onClick={() => dispatch({ type: "decrement5" })}> Down 5</button>
    </div>
  );
}

Counter.defaultProps = {
  initialCount: 4,
};

export default function admindashboard() {
  const [image, setImage] = useState("");
  const [planNumber, setPlanNumber] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqft, setSqft] = useState("");
  const [style, setStyle] = useState("");
  const [garages, setGarages] = useState("");
  const [stories, setStories] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3002/api/insert_cart_items", {
      image: image,
      planNumber: planNumber,
      beds: beds,
      baths: baths,
      sqft: sqft,
      style: style,
      garages: garages,
      stories: stories,
      description: description,
    }).then(() => {
      alert("inserted into database");
    });
  };

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Image</label>
        <input
          type="text"
          name="image"
          placeholder="Img"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Plan #</label>
        <input
          type="text"
          name="plan_number"
          placeholder="Plan #"
          onChange={(e) => setPlanNumber(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Beds</label>
        <input
          type="text"
          name="beds"
          placeholder="Beds"
          onChange={(e) => setBeds(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Baths</label>
        <input
          type="text"
          name="baths"
          placeholder="Baths"
          onChange={(e) => setBaths(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> SqFt</label>
        <input
          type="text"
          name="sq_ft"
          placeholder="SqFt"
          onChange={(e) => setSqft(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Style</label>
        <input
          type="text"
          name="style"
          placeholder="Style"
          onChange={(e) => setStyle(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Stories</label>
        <input
          type="text"
          name="stories"
          placeholder="Stories"
          onChange={(e) => setStories(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Garages</label>

        <input
          type="text"
          name="garages"
          placeholder="Garages"
          onChange={(e) => setGarages(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label> Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}> Submit</button>
      <Counter initialCount={0} />
    </div>
  );
}*/
