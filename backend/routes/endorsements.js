const express = require("express");
const { ethers } = require("ethers");
const router = express.Router();
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Load ABI
const contractABI = require("../abi/CastCred.json");
const contractAddress = process.env.CONTRACT_ADDRESS;

// Set up provider and signer
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, contractABI.abi, wallet);

// Route to endorse someone
router.post("/endorse", async (req, res) => {
  try {
    const { to, tags, message } = req.body;

    const tx = await contract.endorse(to, tags, message);
    await tx.wait();

    res.json({ success: true, txHash: tx.hash });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Endorsement failed" });
  }
});

// Route to fetch endorsements for a user
router.get("/endorsements/:user", async (req, res) => {
  try {
    const { user } = req.params;
    const result = await contract.getEndorsements(user);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch endorsements" });
  }
});

module.exports = router;
