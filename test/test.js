const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AetherVault Contracts", function () {
    let deployer, user1, user2;
    let tokenStandard, economicDataOracle, portfolioManager, stakingRewards;

    beforeEach(async () => {
        [deployer, user1, user2] = await ethers.getSigners();

        // Deploy TokenStandard contract
        const TokenStandard = await ethers.getContractFactory("TokenStandard");
        tokenStandard = await TokenStandard.deploy();
        await tokenStandard.waitForDeployment();

        // Deploy EconomicDataOracle contract
        const EconomicDataOracle = await ethers.getContractFactory("EconomicDataOracle");
        economicDataOracle = await EconomicDataOracle.deploy();
        await economicDataOracle.deployed();

        // Deploy PortfolioManager contract with TokenStandard and EconomicDataOracle addresses
        const PortfolioManager = await ethers.getContractFactory("PortfolioManager");
        portfolioManager = await PortfolioManager.deploy(tokenStandard.address, economicDataOracle.address);
        await portfolioManager.deployed();

        // Deploy StakingRewards contract with TokenStandard address
        const StakingRewards = await ethers.getContractFactory("StakingRewards");
        stakingRewards = await StakingRewards.deploy(tokenStandard.address);
        await stakingRewards.deployed();
    });

    describe("TokenStandard", function () {
        it("Should mint tokens for an address", async function () {
            await tokenStandard.mint(user1.address, 1000);
            const balance = await tokenStandard.balanceOf(user1.address);
            expect(balance).to.equal(1000);
        });

        it("Should allow transfer of tokens", async function () {
            await tokenStandard.mint(user1.address, 1000);
            await tokenStandard.connect(user1).transfer(user2.address, 500);
            const balance = await tokenStandard.balanceOf(user2.address);
            expect(balance).to.equal(500);
        });
    });

    describe("EconomicDataOracle", function () {
        it("Should return economic data (mock value)", async function () {
            const data = await economicDataOracle.getEconomicData();
            expect(data).to.be.a("number"); // Assuming the oracle returns a number
        });
    });

    describe("PortfolioManager", function () {
        it("Should create a portfolio for a user", async function () {
            await portfolioManager.createPortfolio("My Portfolio", [user1.address], [500]);
            const portfolio = await portfolioManager.getPortfolio(user1.address);
            expect(portfolio.name).to.equal("My Portfolio");
        });

        it("Should rebalance portfolio based on economic data", async function () {
            await portfolioManager.createPortfolio("Rebalance Test", [user1.address], [500]);
            await economicDataOracle.updateEconomicData(1.2); // Mock update to economic data
            await portfolioManager.rebalancePortfolio(user1.address);
            const portfolio = await portfolioManager.getPortfolio(user1.address);
            expect(portfolio.balances[0]).to.be.gt(500); // Assuming rebalancing affects balance
        });
    });

    describe("StakingRewards", function () {
        it("Should allow user to stake tokens", async function () {
            await tokenStandard.mint(user1.address, 1000);
            await tokenStandard.connect(user1).approve(stakingRewards.address, 500);
            await stakingRewards.connect(user1).stake(500);
            const stakedBalance = await stakingRewards.stakedBalance(user1.address);
            expect(stakedBalance).to.equal(500);
        });

        it("Should distribute rewards to stakers", async function () {
            await tokenStandard.mint(user1.address, 1000);
            await tokenStandard.connect(user1).approve(stakingRewards.address, 500);
            await stakingRewards.connect(user1).stake(500);
            await stakingRewards.distributeRewards(); // Assuming this triggers reward distribution
            const rewardBalance = await stakingRewards.rewardBalance(user1.address);
            expect(rewardBalance).to.be.gt(0); // Reward should be greater than 0
        });
    });
});
