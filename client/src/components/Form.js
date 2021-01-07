import { useState, useEffect } from "react";
import "./Form.css";
import ethereumImg from "../img/ethereum.jpg";
import bitcoinImg from "../img/bitcoin.jpg";

const particlePost = require("../helpers/particlePost");

export default function Form({ currentPrice }) {
  //Ethereum hook
  const [ethereumAlert, setEthereumAlert] = useState(0);
  useEffect(() => {
    particlePost("ethereum", currentPrice[0], ethereumAlert);
  }, [currentPrice, ethereumAlert]);
  const handleInputEthereum = (e) => {
    setEthereumAlert(e.target.value);
  };

  //Bitcoin hook
  const [bitcoinAlert, setBitcoinAlert] = useState(0);
  useEffect(() => {
    particlePost("bitcoin", currentPrice[1], bitcoinAlert);
  }, [bitcoinAlert, currentPrice]);
  const handleInputBitcoin = (e) => {
    setBitcoinAlert(e.target.value);
  };

  return (
    <div className="flex-container">
      <div>
        <h5 className="name">Ethereum</h5>
        <div className="ethereum-flex">
          <img src={ethereumImg} alt="Ethereum" />
          <div className="price">${currentPrice[0] || "Loading..."}</div>
        </div>
        <p className="description">Set alert price here:</p>
        <input
          autoComplete="off"
          type="number"
          onChange={handleInputEthereum}
          value={ethereumAlert}
        />
      </div>

      <div>
        <h5 className="name">Bitcoin</h5>
        <div className="bitcoin-flex">
          <img src={bitcoinImg} alt="Bitcoin" />
          <div className="price">${currentPrice[1] || "Loading..."}</div>
        </div>
        <p className="description">Set alert price here:</p>
        <input
          autoComplete="off"
          type="number"
          onChange={handleInputBitcoin}
          value={bitcoinAlert}
        />
      </div>
    </div>
  );
}
