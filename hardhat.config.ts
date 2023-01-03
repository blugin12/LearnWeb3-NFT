import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"
dotenv.config();

require ("@nomiclabs/hardhat-etherscan");

if(!process.env.PRIVATE_KEY) throw  Error ("NO PRIVATE KEY")

module.exports = {
  solidity: "0.8.17",

  networks: {
      goerli: {
        url: process.env.LCHEMY_API_KEY_URL,
        accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: "B3NP33J9P6X4KG26NQX7B1WNGQQ749B8EX"
    }
  },
};
  


