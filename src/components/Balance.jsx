import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions, informations } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const reports = informations.length;
  const donations = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <div className="balance">
        <div>
          <h5>REPORTS</h5>
          <h2 id="in">{reports} </h2>
        </div>
        <div>
          <h5>DONATIONS</h5>
          <h2 id="out"> ₹ {donations}</h2>
        </div>
      </div>
    </>
  );
}
