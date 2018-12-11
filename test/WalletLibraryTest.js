var WalletLibrary = artifacts.require("./WalletLibrary.sol");

let RubixiDeploy;

//https://smartcontractsecurity.github.io/SWC-registry/docs/SWC-106
contract('WalletLibrary test -- generated', async (accounts) => {

  before(async () => {
    WalletLibraryDeploy = await WalletLibrary.new();
  });

  // problem -- generator does not call suicide
  describe("Unprotected ether withdrawal -- generated", async () => {
   it("highlights SWC-105", async () => {
    var ownerAddress = (await WalletLibraryDeploy.getOwner(0));
    await WalletLibraryDeploy.initWallet([accounts[1]], 1, 1,{from: accounts[1]});
    var currentOwner = (await WalletLibraryDeploy.getOwner(0));
    assert.equal(ownerAddress, currentOwner, "The owner address should not changed!");
  });
 });

});
