const UserStorage = artifacts.require("./UserStorage.sol");

contract("UserStorage", (accounts) => {

  let userStorageInstance;

  beforeEach('setup contract for each test', async function () {
    userStorageInstance = await UserStorage.new({ from: accounts[0]});
  });

  it("...should add a new user.", async () => {

    // Add user
    const result = await userStorageInstance.addUser({ from: accounts[0] });

    // Validate that user was added.
    const exists = await userStorageInstance.checkIfUserExists({ from: accounts[0] });

    assert.isTrue(exists, "The user was correctly added.");
  });

  it("...should not create a new user if that user already exists.", async () => {

    await userStorageInstance.addUser( { from: accounts[0] });
    


  });

  it("...should return false if a user has not created an account.", async () => {

    const exists = await userStorageInstance.checkIfUserExists({ from: accounts[1]});

    assert.isFalse(exists, "The user does not exist.");
  });

  // it("...should emit an event when a new user is added.", async () => {
    
  //   let eventEmitted = false;

  //   const result = await userStorageInstance.addUser({ from: accounts[0] });
  //   console.log(result.logs[0]);

  //   assert.equal(eventEmitted, true, "Sending an IPFS request does not emit an event.");

  // });

});