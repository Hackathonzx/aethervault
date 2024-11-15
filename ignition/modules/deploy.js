const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 1. Deploy TokenStandard contract (ERC-20/721 for asset management)
  const TokenStandard = await ethers.getContractFactory("TokenStandard");
  const tokenName = "AetherToken";
  const tokenSymbol = "AET";
  const tokenStandard = await TokenStandard.deploy(tokenName, tokenSymbol);
  await tokenStandard.waitForDeployment();
  console.log("TokenStandard deployed to:", await tokenStandard.getAddress());

  // Deploy MockOracle contract
  const MockOracle = await ethers.getContractFactory("MockOracle");
  const initialValue = 200; // Example initial inflation rate (e.g., 2.00%)
  const mockOracle = await MockOracle.deploy(initialValue);
  await mockOracle.waitForDeployment();
  console.log("MockOracle deployed to:", await mockOracle.getAddress());

  // 2. Deploy EconomicDataOracle contract (for real-time economic data)
  const mockOracleAddress = await mockOracle.getAddress(); // Use this as InflationRateOracleAddress
  const EconomicDataOracle = await ethers.getContractFactory("EconomicDataOracle");
  const economicDataOracle = await EconomicDataOracle.deploy(mockOracleAddress);
  await economicDataOracle.waitForDeployment();
  console.log("EconomicDataOracle deployed to:", await economicDataOracle.getAddress());
  

  // 3. Deploy PortfolioManager contract (handles portfolio creation and rebalancing)
  const PortfolioManager = await ethers.getContractFactory("PortfolioManager");
  const portfolioManager = await PortfolioManager.deploy();
  await portfolioManager.waitForDeployment();
  console.log("PortfolioManager deployed to:", await portfolioManager.getAddress());

  // 4. Deploy StakingRewards contract (manages staking pools and reward distributions)
  const StakingRewards = await ethers.getContractFactory("StakingRewards");
  const stakingRewards = await StakingRewards.deploy(await tokenStandard.getAddress());
  await stakingRewards.waitForDeployment();
  console.log("StakingRewards deployed to:", await stakingRewards.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });