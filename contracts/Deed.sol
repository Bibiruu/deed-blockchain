// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Deed {
    address public lawyer;
    address payable public beneficiary;
    uint256 public earliest;

    constructor(
        address _lawyer,
        address payable _beneficiary,
        uint fromNow
    ) payable {
        //argument same as the money sent
        lawyer = _lawyer;
        beneficiary = _beneficiary;
        earliest = block.timestamp + fromNow;
    }

    function withdraw() public {
        require(msg.sender == lawyer, "Lawyer only");
        require(block.timestamp >= earliest, "Too early to withdraw");
        //sending everything to the beneficiary
        beneficiary.transfer(address(this).balance);
    }
}
