# Baby Swap Exchange

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6ef7e73-4a84-410d-83b0-b89326787dff/deploy-status)](https://app.netlify.com/sites/swap-master/deploys)

[BabySwap](https://babyswap.finance/) is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the [Binance Smart Chain](https://www.binance.org/en/smartChain) (BSC). It is fast, cheap, and allows anyone to participate.

This repo is responsible for the **exchange** interface of the AMM: [exchange.babyswap.finance](https://exchange.babyswap.finance/)

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.


配置依赖 baby-swap-sdk
ui依赖 baby-toolkit
如： cp -R ~/chain/baby/baby-toolkit/packages/pancake-uikit/dist/* ~/chain/baby/baby-swap-interface/node_modules/@pancakeswap-libs/uikit/dist