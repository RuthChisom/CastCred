

# Gratitude Economy

A **decentralized platform** where users share daily moments of gratitude and receive **tips and rewards** from the community in return. Built on the Celo blockchain and powered by the `$cUSD` stablecoin, Gratitude Economy fosters **positivity, social interaction**, and **financial appreciation**.

---

## 🌟 How It Works

### 1. **Share Your Gratitude**

Every day, users can post one gratitude message describing something they’re thankful for. Posts are linked to your Farcaster account for verification.

### 2. **Receive Tips**

Community members can tip your post using `$cUSD` tokens as a gesture of appreciation. The more unique users tip your post, the more recognition and rewards you get.

### 3. **Earn Daily Rewards**

If your post becomes *trending* (gets 5 or more unique tippers), you become eligible for a portion of the **Daily Reward Pool (10 cUSD)**—proportional to the total tips your post receives compared to other trending posts.

---

## 💡 Features

| Feature                      | Description                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| ✅ One Gratitude Post Per Day | Encourages daily mindfulness and keeps the feed fresh.         |
| 💰 Tipping System            | Community members can send 0.1 cUSD or more as appreciation.   |
| 🔥 Trending Posts            | Posts with 5+ unique tippers become trending and earn rewards. |
| 📅 Daily Reward Pool         | 10 cUSD distributed to trending posts based on performance.    |
| 🔐 On-chain Verification     | Each post is tied to a Farcaster hash for authenticity.        |
| 📊 User Profiles             | Track your total earnings, tips given, and posts shared.       |

---

## 📸 Sample User Flow

1. **Login with your Web3 Wallet**
2. **Post a daily gratitude** with Farcaster cast hash + your Farcaster username.
3. **Receive tips** from the community in cUSD.
4. **Get rewarded** the next day if your post trends.
5. **Repeat every day!**

---

## 🔗 Smart Contract Summary

The Gratitude Economy platform runs on a secure and open smart contract on the Celo blockchain.

* 💵 **Token:** `cUSD` (ERC20)
* 🛡️ **Security:** Uses OpenZeppelin’s `Ownable`, `ReentrancyGuard`, `IERC20`
* ⚖️ **Fees:** 5% platform fee on each tip
* 📊 **On-chain Stats:** Tracks user activity, trending posts, and daily rewards

> You can view the full contract in [`GratitudeEconomy.sol`](./contracts/GratitudeEconomy.sol)

---

## 🚀 Getting Started (Developer)

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/gratitude-economy.git
   cd gratitude-economy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Compile and deploy**
   You'll need:

   * Hardhat or Foundry setup
   * A funded Celo wallet
   * cUSD token address on Alfajores/Mainnet

   Example using Hardhat:

   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network alfajores
   ```

---

## 🧪 Smart Contract Test Ideas

* ✅ Post creation with valid Farcaster hash
* 🔁 Prevent duplicate daily posts
* 💸 Tip functionality & platform fee deduction
* 🚀 Reward distribution to trending posts
* ❌ Prevent self-tipping
* 🔐 Admin-only post deactivation

---

## 🤝 Contributing

Pull requests and suggestions are welcome! If you’d like to propose changes, feel free to fork the repository and submit a PR. Let’s build a world where gratitude flows freely.

---

## 📘 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgements

* [Celo](https://celo.org/) for enabling mobile-first, carbon-negative blockchain experiences.
* [Farcaster](https://farcaster.xyz) for decentralized identity and social connections.
* [OpenZeppelin](https://docs.openzeppelin.com/) for secure contract standards.

---
