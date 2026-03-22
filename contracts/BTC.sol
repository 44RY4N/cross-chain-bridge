// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BTC {

    string public name = "Bitcoin";
    string public symbol = "BTC";
    uint256 public totalSupply = 21000000;

    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) public {
        require(balanceOf[msg.sender] >= amount, "Not enough balance");

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
}