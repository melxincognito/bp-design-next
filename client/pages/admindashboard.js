import React, { useState, useReducer, useEffect } from "react";
import Axios from "axios";
import { auth } from "../firebase-config";

export default function admindashboard() {
  const user = auth.currentUser;

  const onClicked = () => {
    console.log(user);
  };

  return (
    <div>
      <button onClick={onClicked}> click me</button>
    </div>
  );
}

/*
export default function admindashboard() {
  const [data, setData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [otherData2, setOtherData2] = useState([]);

  const person = {
    name: "Mel Incognito",
    location: "Barcelona, ES",
  };

  const personI = {
    name: "Burrito Incognito",
    location: "Madrid, ES",
  };

  const personII = {
    name: "Orian Incognito",
    location: "Barcelona, ES",
    occupation: "Developer",
  };

  const sendToLocal = () => {
    window.localStorage.setItem("user", JSON.stringify(person));
  };

  const sendToLocalI = () => {
    window.localStorage.setItem("userI", JSON.stringify(personI));
  };

  const sendToLocalII = () => {
    window.localStorage.setItem("userII", JSON.stringify(personII));
  };
  const getFromLocal = () => {
    const thisIt = JSON.parse(window.localStorage.getItem("user"));

    setData(thisIt);
  };

  const getFromLocalI = () => {
    const thisIt = JSON.parse(window.localStorage.getItem("userI"));

    setOtherData(thisIt);
  };

  const getFromLocalII = () => {
    const thisIt = JSON.parse(window.localStorage.getItem("userII"));

    setOtherData2(thisIt);
  };

  const deleteMel = () => {
    window.localStorage.removeItem("user");
  };

  const clearAll = () => {
    window.localStorage.clear();
  };

  return (
    <>
      <button onClick={sendToLocal}> send to local storage</button>
      <button onClick={sendToLocalI}> Send II</button>
      <button onClick={sendToLocalII}> Send III</button>
      <button onClick={getFromLocal}> Get from local storage</button>
      <button onClick={getFromLocalI}> Get II</button>
      <button onClick={getFromLocalII}> Get III</button>
      <button onClick={deleteMel}>Delete Mel</button>
      <button onClick={clearAll}> Clear all</button>

      {<p>{JSON.stringify(data)}</p>}
      {<p>{JSON.stringify(otherData)}</p>}
      {<p>{JSON.stringify(otherData2)}</p>}

      {otherData === null ? (
        <p> No data for your love</p>
      ) : (
        <p style={{ textDecoration: "underline" }}>
          Name and Location
          {Object.keys(otherData).map((key) => {
            return <p> {otherData[key]}</p>;
          })}
        </p>
      )}

      {otherData2 === null ? (
        <p> No data bitch</p>
      ) : (
        <p>
          {" "}
          {Object.keys(otherData2).map((key) => {
            return <p>{otherData2[key]}</p>;
          })}
        </p>
      )}
    </>
  );
}
*/
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
