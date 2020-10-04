import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Form() {
  const { addInformation } = useContext(GlobalContext);

  const [caption, setCaption] = useState("");
  const [members, setMembers] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const addI = (e) => {
    e.preventDefault();

    const newInformation = {
      id: Math.floor(Math.random() * 100000000),
      name,
      address,
      members: Math.abs(members),
      caption,
    };

    addInformation(newInformation);
  };
  return (
    <>
      <form className="info" onSubmit={addI}>
        <h4>Post a Shelter-related Issue</h4>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recepient Name"
          type="text"
        />
        <textarea
          placeholder="Recepient Address"
          rows="5"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          placeholder="No. of Family Members "
          type="number"
        />
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Captions"
        ></textarea>
        <input type="file" id="" />
        <p>Attach Related Pictures</p>
        <hr />
        <button type="submit">Submit Information</button>
      </form>
    </>
  );
}
