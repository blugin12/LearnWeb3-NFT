// ethers.ts comes built in to Hardhat
// ethers.ts is a really nice library to work with ethereum

// import ethers
import { ethers } from "hardhat";

async function main() {
    
    const contract = await ethers.getContractFactory("NFTee");

    const deployedContract = await contract.deploy();

    await deployedContract.deployed();

    console.log("NFT COntract deployed to: ", deployedContract.address);



}

main ()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })