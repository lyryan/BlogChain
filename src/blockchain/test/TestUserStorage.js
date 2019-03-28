const UserStorage = artifacts.require("./UserStorage.sol");

contract("UserStorage", accounts => {
  it("...should add a new user.", async () => {
    const userStorageInstance = await UserStorage.deployed();

    // Add user
    await userStorageInstance.addUser({ from: accounts[0] });

    // Validate that user was added.
    const exists = await userStorageInstance.checkIfUserExists({ from: accounts[0] });

    assert.isTrue(exists, "The user was correctly added.");
  });

  it("should return false if a user has not created an account.", async () => {
    const userStorageInstance = await UserStorage.deployed();

    const exists = await userStorageInstance.checkIfUserExists({ from: accounts[1]});

    assert.isFalse(exists, "The user does not exist.");
  });

});