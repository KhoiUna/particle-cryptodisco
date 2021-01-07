const { url } = require("../config");

const particlePost = (assetName, currentPrice, alertPrice) => {
  const turnOnOff = currentPrice > alertPrice ? "on" : "off";
  fetch(url + "/api/lightRing", {
    method: "POST",
    body: JSON.stringify({ arg: `${assetName} ${turnOnOff}` }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

module.exports = particlePost;
