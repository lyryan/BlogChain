pragma solidity ^0.5.0;

contract UserStorage {
  struct User {
    uint articleCount;
    string[] articles;
  }

  mapping(address => User) users;

  function addUser() public {
    users[msg.sender] = User(0, new string[](0));
  }
  function getArticleCount(address user) public view returns (uint) {
    return users[user].articleCount;
  }
  function addArticle(string memory hash) public {
      users[msg.sender].articleCount++;
      users[msg.sender].articles.push(hash);
  }
  function getArticle(uint index) public view returns(string memory) {
      return users[msg.sender].articles[index];
  }
}