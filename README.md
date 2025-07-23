# CastCred - Onchain Reputation Protocol for Farcaster

![CastCred Logo](https://via.placeholder.com/150x50.png?text=CastCred) <!-- Replace with actual logo -->

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Application Workflow](#application-workflow)
  - [Endorsement System](#endorsement-system)
  - [Cast Scheduling](#cast-scheduling)
  - [Reputation Scoring](#reputation-scoring)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
- [Contributing](#contributing)
  - [Code Style](#code-style)
  - [Commit Guidelines](#commit-guidelines)
  - [Pull Request Process](#pull-request-process)
- [License](#license)

## Overview

CastCred is a decentralized reputation protocol built for the Farcaster ecosystem. It enables users to:

- Give and receive verifiable onchain endorsements
- Schedule and optimize casts across multiple channels
- Build and track onchain reputation scores
- Discover high-quality contributors in the ecosystem

The application combines the social features of Farcaster with the verifiability of blockchain credentials.

## Features

✨ **Onchain Endorsements**

- Issue endorsements with specific skill tags
- Verifiable credentials stored onchain
- Rich endorsement messages with context

⏱ **Smart Cast Scheduling**

- Multi-channel casting
- Optimal timing suggestions
- Content performance tracking

📊 **Reputation Dashboard**

- Visual trust score display
- Endorsement history
- Network growth metrics

🛡 **Decentralized Identity**

- Wallet-based authentication
- Portable reputation
- Privacy-preserving options

## Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn
- Farcaster account (for full functionality)
- Ethereum wallet (MetaMask, Coinbase Wallet, etc.)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Moses-main/CastCred.git
cd CastCred
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Fill in your environment variables
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Application Workflow

### Endorsement System

1. **Search for Users**

   - Find users by Farcaster username or ENS
   - View their existing endorsements and reputation

2. **Create Endorsement**

   - Select from predefined skill tags (Developer, Designer, etc.)
   - Add a personalized message
   - Submit transaction to store onchain

3. **Manage Endorsements**
   - View received endorsements
   - Filter by skill type
   - Share notable endorsements

### Cast Scheduling

1. **Compose Cast**

   - Write your message (280 character limit)
   - Add embeds or media

2. **Select Channels**

   - Choose from available Farcaster channels
   - View channel stats and audience

3. **Schedule Time**
   - Pick optimal posting time
   - Set up recurring posts
   - Review scheduled casts

### Reputation Scoring

1. **Trust Score Calculation**

   - Weighted by endorsement quality
   - Network effects considered
   - Activity-based adjustments

2. **Profile Display**

   - Visual score representation
   - Skill breakdown
   - Endorsement history

3. **Discovery Features**
   - Top-rated builders
   - Skill-specific leaderboards
   - Trending contributors

## Development

### Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── header/       # Navigation components
│   ├── dashboard/    # Main app components
│   └── shared/       # Common utilities
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Next.js page routes
├── styles/           # Global styles
├── types/            # TypeScript definitions
└── utils/            # Helper functions
```

### Available Scripts

- `dev`: Runs the app in development mode
- `build`: Creates an optimized production build
- `start`: Starts the production server
- `lint`: Runs ESLint on the codebase
- `format`: Formats code with Prettier
- `type-check`: Verifies TypeScript types

## Contributing

We welcome contributions from the community! Please follow these guidelines:

### Code Style

- TypeScript for all components
- Functional components with hooks
- Tailwind CSS for styling
- ESLint/Prettier for code consistency

### Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Common types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style/formatting
- `refactor`: Code changes without fixing bugs
- `test`: Test additions/modifications

### Pull Request Process

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please include:

- Description of changes
- Screenshots for UI changes
-
