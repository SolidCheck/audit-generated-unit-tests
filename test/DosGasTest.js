var DosGas = artifacts.require("./DosGas.sol");

let DosGasDeploy;

//https://smartcontractsecurity.github.io/SWC-registry/docs/SWC-128#dos-addresssol
 before(async () => {
   DosGasDeploy = await DosGas.new();
 });

 describe("Expecting out of gas exception", async () => {
  it("will catch out of gas exception", async () => {
    try {
        await DosGasDeploy.addCreditors();
        await DosGasDeploy.numberCreditors();
    }
    catch(err) {
        console.log(err);
    }
  });
});
