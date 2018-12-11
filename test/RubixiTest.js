var Rubixi = artifacts.require("./Rubixi.sol");

let RubixiDeploy;

//https://smartcontractsecurity.github.io/SWC-registry/docs/SWC-128#dos-addresssol
contract('Rubixi test', async (accounts) => {

  before(async () => {
    RubixiDeploy = await Rubixi.new();
    await RubixiDeploy.DynamicPyramid();
  });

  describe("Unprotected ether withdrawal -- generated", async () => {
   it("highlights SWC-105", async () => {
    var ownerAddress = (await RubixiDeploy.getCreator());
    await RubixiDeploy.DynamicPyramid({from: accounts[1]});
    var currentOwner = (await RubixiDeploy.getCreator());
    assert.equal(ownerAddress, currentOwner, "The owner address should not changed!");
  });
 });

});
