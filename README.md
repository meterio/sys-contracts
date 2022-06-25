# System contracts on Meter network

## Compile with hardhat

```bash
yarn
yarn compile
```
# Compile with solc binary
solc-static-linux-0.8.11 --optimize --optimize-runs 200 --overwrite --bin --abi --metadata  -o ./compiled ./contracts/MeterGovERC20Permit.sol
