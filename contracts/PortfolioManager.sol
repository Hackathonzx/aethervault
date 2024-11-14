// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TokenStandard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PortfolioManager is Ownable {
    struct Portfolio {
        address owner;
        uint256[] assetAllocations;  // Percentage allocations for each asset
        bool autoRebalance;
    }

    mapping(address => Portfolio) public portfolios;

    event PortfolioCreated(address indexed owner, uint256[] allocations);
    event PortfolioRebalanced(address indexed owner, uint256[] newAllocations);

    // Creates a portfolio for the user with initial asset allocation
    function createPortfolio(uint256[] memory _allocations, bool _autoRebalance) external {
        require(portfolios[msg.sender].owner == address(0), "Portfolio already exists");
        
        portfolios[msg.sender] = Portfolio({
            owner: msg.sender,
            assetAllocations: _allocations,
            autoRebalance: _autoRebalance
        });
        
        emit PortfolioCreated(msg.sender, _allocations);
    }

    // Adjusts portfolio allocations according to AI rebalancing signals
    function rebalancePortfolio(uint256[] memory newAllocations) external onlyOwner {
        require(portfolios[msg.sender].autoRebalance, "Auto-rebalance not enabled");

        portfolios[msg.sender].assetAllocations = newAllocations;
        
        emit PortfolioRebalanced(msg.sender, newAllocations);
    }
    
    // Fetch portfolio allocations for a user
    function getPortfolioAllocations(address _owner) external view returns (uint256[] memory) {
        return portfolios[_owner].assetAllocations;
    }
}
