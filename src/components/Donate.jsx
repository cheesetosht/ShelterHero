import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Profile() {
  const { addTransaction } = useContext(GlobalContext);
  const [caption, setCaption] = useState("");
  const [amount, setAmount] = useState("");

  const addT = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      amount: +amount,
      caption,
    };

    addTransaction(newTransaction);
  };

  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <form className="info" onSubmit={addT}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount ( ₹ ) "
          type="number"
        />
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Caption"
        ></textarea>
        <button type="submit"> Donate</button>
      </form>
      <h3 style={{ textAlign: "center" }}>History</h3>

      <ul className="list">
        {transactions.map((transactions) => (
          <li className="minus">
            <div className="flex-row">
              <div>
                <h3>Rs.{Math.abs(transactions.amount)}</h3>
              </div>
              <div>
                <h5>
                  <i>{transactions.caption} </i>
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
