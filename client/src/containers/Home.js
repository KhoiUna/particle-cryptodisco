import Form from "../components/Form";
import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [etherPrice, setEtherPrice] = useState(0);
  const [bitcoinPrice, setPitcoinPrice] = useState(0);

  useEffect(() => {
    //Ethereum WS`
    const etherWS = new WebSocket("wss://ws.coincap.io/prices?assets=ethereum");
    etherWS.onmessage = (msg) => {
      let d = msg.data.split(":");
      d = d[1].slice(1, d[1].length - 2) * 1;
      setEtherPrice(d);
    };

    //Bitcoin WS
    const bitcoinWS = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin"
    );
    bitcoinWS.onmessage = (msg) => {
      let d = msg.data.split(":");
      d = d[1].slice(1, d[1].length - 2) * 1;
      setPitcoinPrice(d);
    };
  }, []);

  return (
    <>
      <h1 className="title"> CRYPTO DISCO</h1>
      <Form currentPrice={[etherPrice, bitcoinPrice]} />
    </>
  );
}
