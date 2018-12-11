var ReturnValue = artifacts.require("./ReturnValue.sol");
var MaliciousCalledContract = artifacts.require("./generated/MaliciousCalledContract");

let MaliciousCalledContractDeploy;
let ReturnValueDeploy;

//https://smartcontractsecurity.github.io/SWC-registry/docs/SWC-128#dos-addresssol
 before(async () => {
   MaliciousCalledContractDeploy = await MaliciousCalledContract.new();
   ReturnValueDeploy = await ReturnValue.new();
   await ReturnValueDeploy.setCalleeAddress(MaliciousCalledContractDeploy.address);
 });

// HINT: a malicious contract can kill yours
 describe("Contract ReturnValue will be terminated", async () => {
  it("should have removed the contract", async () => {
    var addressToCall = await ReturnValueDeploy.callee.call();
    await ReturnValueDeploy.callnotchecked();
    try {
      console.log(await ReturnValueDeploy.callee.call());
    }
    catch(e) {
      console.log("contract has been removed");
    }
  })
});
