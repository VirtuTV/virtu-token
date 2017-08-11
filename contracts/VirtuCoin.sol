pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

contract VirtuCoin is MintableToken {

  string public constant name = "Virtucoin Crowdsale Token";
  string public constant symbol = "VRTU";
  uint8 public constant decimals = 18;

}