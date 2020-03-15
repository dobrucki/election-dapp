//const Web3 = require("web3");
//const web3 = new Web3();

const Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  //const candidates = [web3.utils.toHex("Mirek"), web3.utils.toHex("Kasia")];
  deployer.deploy(Election/*, candidates*/);
};
