pragma solidity ^0.4.24;

contract ReturnValue {

  address public callee;

  // this should have an onlyOwner modifier
  function setCalleeAddress(address toSet) public {
    callee = toSet;
  }

  function callchecked() public {
    require(callee.call());
  }

  function callnotchecked() public {
    callee.call();
  }

}
