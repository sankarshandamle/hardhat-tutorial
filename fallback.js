const { ethers } = require("hardhat");


const { expect } = require("chai");

describe("Fallback contract", function () {
  it("Deployment should also deploy the CollectEther contract. We check it by getting the default balance of the collectEther contract.", async function () {

    const [owner] = await ethers.getSigners();     // this line creates a list of Ethereum accounts and assigns it to owner

    const fallback = await ethers.getContractFactory("sendEther");  // passes the instance of the contract to fallback variable 

    const temp = await fallback.deploy();    // deploys the instance, the hardhatToken now holds all the functionalities of the contract you wrote

    const ownerBalance = await temp.getBalancecE();  // returns the balance of the collectEther contract (as written in the solidity file)

    expect(ownerBalance == 0, "Default balance should be zero");  // checking if the default balance is 0!

  });
});

