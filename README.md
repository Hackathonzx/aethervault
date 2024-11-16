# AetherVault

# Overview
AetherVault is an AI-powered DeFi asset management platform designed to revolutionize how users manage their digital assets. By leveraging cutting-edge artificial intelligence and blockchain technology, AetherVault provides users with:

- Optimal Asset Allocations: AI-driven recommendations tailored to user-defined risk tolerance.
- Portfolio Automation: Automated portfolio rebalancing to maintain optimal allocations.
- Real-Time Insights: Economic dashboards with live indicators, such as interest rates and inflation.
- Staking and Rewards: Opportunities for users to earn rewards by participating in staking pools.

# Features
1. Portfolio Management
Users can create portfolios, allocate assets, and manage investments seamlessly.

AI integration ensures that asset allocation aligns with market trends and user preferences.
2. Economic Dashboard
Provides real-time updates on economic indicators, including interest rates and inflation, sourced from reliable oracles.
3. Staking & Rewards
Allows users to stake tokens and earn rewards based on participation.
Transparent and decentralized reward distribution mechanism.
4. Token Standard Integration
Supports ERC-20 for fungible assets and ERC-721 for non-fungible tokens (NFTs).
5. AI-Driven Rebalancing
Automated portfolio rebalancing based on AI signals, ensuring optimal performance.

# Core Contracts
1. PortfolioManager.sol
- Handles portfolio creation, management, and AI-driven rebalancing.
- Allows users to create, update, and manage their portfolios.
- Integrates with AI systems to trigger rebalancing actions.

2. StakingRewards.sol
- Manages staking pools and distributes rewards to participants.
- Enables users to stake tokens securely.
- Calculates and distributes rewards proportionally.

3. EconomicDataOracle.sol
- Fetches real-time economic data from external oracles.
- Provides up-to-date insights into economic conditions.
- Feeds data into other contracts, such as PortfolioManager.

4. TokenStandard.sol
- Implements ERC-20/721 standards for asset management.
- Supports token minting, transfers, and approval.
- Ensures compatibility with fungible and non-fungible tokens.

# Technical Architecture
Workflow:
- Portfolio Creation: Users define their portfolio, including assets and risk tolerance.
- AI Analysis: AI models analyze market conditions and user data to recommend asset allocations.
- Economic Data Integration: Oracles provide real-time data (e.g., inflation, interest rates) to the EconomicDataOracle contract.
- Rebalancing: PortfolioManager triggers rebalancing based on AI signals and economic data.
- Staking Rewards: Users can stake unused tokens in pools to earn rewards.

# Smart Contract Deployment

**Requirements**
- Node.js v16+
- Hardhat
- Ethereum Wallet (e.g., MetaMask)
- Taiko Testnet Configuration

**Steps**
- Clone this repository:

git clone https://github.com/Hackathonzx/aethervault.git

cd aethervault

**Install dependencies:**
- npm install

**Compile contracts:**
- npx hardhat compile

# Deployment

Deploy contracts to the Taiko network:
bash
Copy code
npx hardhat run scripts/deploy.js --network taiko

# the contract deployed addresses are:
- TokenStandard deployed to: 0xe34c86A03F17E29F77beeE7c898Adae4dD578006
- MockOracle deployed to: 0xA0BF7F60ec762cc7b88dEc415D46F12cFF130a55
- EconomicDataOracle deployed to: 0x41CD3d7753eeAD4c2d384a6C0074eA4c27dE36F1
- PortfolioManager deployed to: 0x1d8c981FD95060A45b3Cea346DbF7b5b48f5CD36
- StakingRewards deployed to: 0xf1979Ac32D086D1f3f3773fe0828d37729ed545f

Testing
Run unit tests:

npx hardhat test
Coverage report:

npx hardhat coverage
User Interface
The frontend connects to the deployed smart contracts and provides:

Portfolio Management Interface: Users can create and manage portfolios.
Economic Dashboard: Displays real-time indicators.
Staking Panel: Users can stake tokens and track rewards.
Running the Frontend
Start the development server:

npm start
Project Goals
AetherVault aims to:

Empower users with AI-driven tools for efficient asset management.
Foster transparency and decentralization in DeFi.
Showcase the capabilities of the Taiko ecosystem through seamless integration.
Hackathon Criteria Mapping
Criteria	Implementation
Best Business Idea	AI-driven portfolio management introduces innovation in DeFi and addresses a broad market need for automated solutions.
Most Community Support	Staking pools and reward mechanisms encourage user engagement.
Most Impressive Grant Proposal	Detailed technical architecture and roadmap demonstrate clear objectives and feasibility.
Best Pitch Presentation	AI-powered automation, real-time dashboards, and staking opportunities make the platform attractive and scalable.
Most Innovative Idea	Combines AI, real-time data, and DeFi for a unique user experience while leveraging Taiko's advanced capabilities.
Taiko Ecosystem Integration
AetherVault leverages Taiko's:

Scalable Network: Ensures seamless interaction between contracts and users.
Community: Drives adoption by integrating Taiko’s decentralized infrastructure.
Contributing
We welcome contributions!

Fork the repository and create a feature branch.
Submit a pull request with your changes.
License
This project is licensed under the MIT License.

Contact
For any questions or support, please reach out to:
Email: yourname@example.com
Discord: @yourusername