import tokens from "./tokens";
import addresses from "constants/addresses";

export const liquidityList = [
  {
    pid: 0,
    lpSymbol: tokens.wild.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.wild.address,
    decimals: 18,
    logoA: tokens.wild.logo,
    logoB: "",
  },
  {
    pid: 0,
    lpSymbol: tokens.eth.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.eth.address,
    decimals: 18,
    logoA: tokens.eth.logo,
    logoB: "",
  },
  {
    pid: 1,
    lpSymbol: tokens.wbnb.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.wbnb.address,
    decimals: 18,
    logoA: tokens.wbnb.logo,
    logoB: "",
  },
  {
    pid: 1,
    lpSymbol: "WBNB-3WiLD",
    isTokenOnly: false,
    lpAddresses: addresses.wildWbnblp,
    decimals: 18,
    logoA: tokens.wild.logo,
    logoB: tokens.wbnb.logo,
  },
];

export const zapList = [
  {
    pid: 0,
    lpSymbol: tokens.wild.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.wild.address,
    decimals: 18,
    logoA: tokens.wild.logo,
    logoB: "",
  },
  {
    pid: 0,
    lpSymbol: tokens.eth.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.eth.address,
    decimals: 18,
    logoA: tokens.eth.logo,
    logoB: "",
  },
  {
    pid: 1,
    lpSymbol: tokens.wbnb.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.wbnb.address,
    decimals: 18,
    logoA: tokens.wbnb.logo,
    logoB: "",
  },
  {
    pid: 1,
    lpSymbol: tokens.usdc.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.usdc.address,
    decimals: 6,
    logoA: tokens.usdc.logo,
    logoB: "",
  },
  {
    pid: 1,
    lpSymbol: tokens.busd.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.busd.address,
    decimals: 18,
    logoA: tokens.busd.logo,
    logoB: "",
  },
  {
    pid: 1,
    lpSymbol: tokens.usdt.symbol,
    isTokenOnly: true,
    lpAddresses: tokens.usdt.address,
    decimals: 18,
    logoA: tokens.usdt.logo,
    logoB: "",
  },
  {
    pid: 1,
    lpSymbol: "WBNB-3WiLD",
    isTokenOnly: false,
    lpAddresses: addresses.wildWbnblp,
    decimals: 18,
    logoA: tokens.wild.logo,
    logoB: tokens.wbnb.logo,
  },
];

const farmsConfig = [
  {
    pid: 0,
    lpSymbol: "WBNB-3WiLD",
    lpAddresses: addresses.wildWbnblp,
    isTokenOnly: false,
    isNFTPool: false,
    token: tokens.wild,
    quoteToken: tokens.wbnb,
    logoA: tokens.wild.logo,
    logoB: tokens.wbnb.logo,
  },
  {
    pid: 1,
    lpSymbol: "WBNB-USDC",
    lpAddresses: addresses.usdcLp,
    isTokenOnly: false,
    isNFTPool: false,
    token: tokens.usdc,
    quoteToken: tokens.wbnb,
    logoA: tokens.wbnb.logo,
    logoB: tokens.usdc.logo,
  },
  {
    pid: 3,
    lpSymbol: "3WiLD",
    lpAddresses: addresses.wild,
    isTokenOnly: true,
    isNFTPool: false,
    token: tokens.wild,
    quoteToken: tokens.wild,
    logoA: tokens.wild.logo,
    logoB: tokens.wild.logo,
  },
  {
    pid: 5,
    lpSymbol: "WBNB",
    lpAddresses: addresses.wbnb,
    isTokenOnly: true,
    isNFTPool: false,
    token: tokens.wbnb,
    quoteToken: tokens.wbnb,
    logoA: tokens.wbnb.logo,
    logoB: tokens.wbnb.logo,
  },
  {
    pid: 6,
    lpSymbol: "BUSD",
    lpAddresses: addresses.busd,
    isTokenOnly: true,
    isNFTPool: false,
    token: tokens.busd,
    quoteToken: tokens.busd,
    logoA: tokens.busd.logo,
    logoB: tokens.busd.logo,
  },
  {
    pid: 7,
    lpSymbol: "USDT",
    lpAddresses: addresses.usdt,
    isTokenOnly: true,
    isNFTPool: false,
    token: tokens.usdt,
    quoteToken: tokens.usdt,
    logoA: tokens.usdt.logo,
    logoB: tokens.usdt.logo,
  },
  {
    pid: 8,
    lpSymbol: "USDC",
    lpAddresses: addresses.usdc,
    isTokenOnly: true,
    isNFTPool: false,
    token: tokens.usdc,
    quoteToken: tokens.usdc,
    logoA: tokens.usdc.logo,
    logoB: tokens.usdc.logo,
  },
  {
    pid: 9,
    lpSymbol: "3WiLDNFT",
    lpAddresses: addresses.nft,
    isTokenOnly: true,
    isNFTPool: true,
    token: tokens.nft,
    quoteToken: tokens.wild,
    logoA: "/assets/tokens/nft.png",
    logoB: "",
  },
];

export default farmsConfig;
