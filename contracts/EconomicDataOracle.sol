// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract EconomicDataOracle {
    AggregatorV3Interface internal inflationRateFeed;

    constructor(address _inflationRateFeed) {
        inflationRateFeed = AggregatorV3Interface(_inflationRateFeed);
    }

    function getInflationRate() public view returns (int256) {
        (, int256 rate, , , ) = inflationRateFeed.latestRoundData();
        return rate;
    }
}
