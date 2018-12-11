var Migrations = artifacts.require("./Migrations.sol");
/*
var DosGas = artifacts.require("./DosGas.sol");

var ReturnValue = artifacts.require("./ReturnValue.sol");
var MaliciousCalledContract = artifacts.require("./generated/MaliciousCalledContract.sol");
*/

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  /*
  deployer.deploy(DosGas);
  deployer.deploy(MaliciousCalledContract);
  deployer.deploy(ReturnValue);
  */
};
