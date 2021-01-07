require("dotenv").config();
const Particle = require("particle-api-js");
const particle = new Particle();

const postParticle = (arg) => {
  particle.callFunction({
    deviceId: process.env.DEVICE_ID,
    name: process.env.FUNC_NAME,
    argument: arg,
    auth: process.env.ACCESS_TOKEN,
  });
};

module.exports = postParticle;
