pragma solidity ^0.8.0;

contract MockOracle {
    int256 public latestValue;

    constructor(int256 _initialValue) {
        latestValue = _initialValue;
    }

    function setLatestValue(int256 _value) external {
        latestValue = _value;
    }

    function getLatestValue() external view returns (int256) {
        return latestValue;
    }
}