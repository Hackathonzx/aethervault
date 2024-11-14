const hre = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy TokenStandard contract (ERC-20 for asset management)
  const TokenStandard = await ethers.getContractFactory("TokenStandard");
  const tokenStandard = await TokenStandard.deploy();
  await tokenStandard.waitForDeployment();
  console.log("TokenStandard deployed to:", await tokenStandard.getAddress());

  // Deploy EconomicDataOracle contract (for real-time data)
  const EconomicDataOracle = await ethers.getContractFactory("EconomicDataOracle");
  const economicDataOracle = await EconomicDataOracle.deploy();
  await economicDataOracle.waitForDeployment();
  console.log("EconomicDataOracle deployed to:", await economicDataOracle.getAddress());

  // Deploy PortfolioManager contract (handles portfolio creation and rebalancing)
  const PortfolioManager = await ethers.getContractFactory("PortfolioManager");
  const portfolioManager = await PortfolioManager.deploy(tokenStandard.address, economicDataOracle.address);
  await portfolioManager.waitForDeployment();
  console.log("PortfolioManager deployed to:", await portfolioManager.getAddress());

  // Deploy StakingRewards contract (manages staking pools and rewards)
  const StakingRewards = await ethers.getContractFactory("StakingRewards");
  const stakingRewards = await StakingRewards.deploy(tokenStandard.address);
  await stakingRewards.waitForDeployment();
  console.log("StakingRewards deployed to:", await stakingRewards.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
