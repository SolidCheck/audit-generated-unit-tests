pragma solidity ^0.4.24;

contract MaliciousCalledContract
{
    function doWork() external
    {
        selfdestruct(0);
    }
}
