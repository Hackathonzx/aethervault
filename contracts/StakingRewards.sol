// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingRewards is Ownable {
    IERC20 public stakingToken;
    uint256 public rewardRate = 100;  // Reward rate per block

    struct Stake {
        uint256 amount;
        uint256 rewardDebt;
    }

    mapping(address => Stake) public stakes;

    event Staked(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    constructor(IERC20 _stakingToken) {
        stakingToken = _stakingToken;
    }

    function stake(uint256 _amount) external {
        stakingToken.transferFrom(msg.sender, address(this), _amount);
        stakes[msg.sender].amount += _amount;
        stakes[msg.sender].rewardDebt += _amount * rewardRate;

        emit Staked(msg.sender, _amount);
    }

    function withdrawRewards() external {
        uint256 reward = stakes[msg.sender].rewardDebt;
        require(reward > 0, "No rewards available");

        stakes[msg.sender].rewardDebt = 0;
        stakingToken.transfer(msg.sender, reward);

        emit RewardPaid(msg.sender, reward);
    }
}
