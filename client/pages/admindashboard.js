import React, { useState, useEffect } from "react";
import Axios from "axios";

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
    </div>
  );
}
