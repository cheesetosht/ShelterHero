import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Balance from "./Balance";
import user from "../assets/user.png";

export default function Profile() {
  const { deleteTransaction } = useContext(GlobalContext);
  const { informations } = useContext(GlobalContext);
  return (
    <>
      <div className="user ">
        <img src={user} />
        <div className="flex-col">
          <h2>John Doe</h2>
          <h5>Level 15</h5>
        </div>
      </div>
      <Balance />
      <h3 style={{ textAlign: "center" }}>History</h3>

      <ul className="list">
        {informations.map((informations) => (
          <li className="plus">
            <div className="flex-row">
              <div>
                {informations.name}
                <p>{informations.address}</p>
              </div>
              {/* 
              <div>
                <h3>{Math.abs(informations.members)}</h3>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
