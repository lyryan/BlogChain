pragma solidity ^0.5.0;

contract UserStorage {
  struct User {
    uint articleCount;
    bool accountCreated;
  }

  event newUserAdded(address newUser);

  mapping(address => User) users;

  function addUser() public {
    users[msg.sender] = User(0, true);
    emit newUserAdded(msg.sender);
  }

  function checkIfUserExists() public view returns (bool) {
    return users[msg.sender].accountCreated;
  }

  function getArticleCount(address user) public view returns (uint) {
    return users[user].articleCount;
  }
}