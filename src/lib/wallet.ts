import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia, mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Helix Vault Genetics',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Get from https://cloud.walletconnect.com
  chains: [sepolia, mainnet],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

// Alternative wallet configurations for diversity
export const walletConfigs = {
  rainbow: {
    name: 'Rainbow',
    icon: '🌈',
    description: 'The fun, colorful way to interact with Web3'
  },
  metaMask: {
    name: 'MetaMask',
    icon: '🦊',
    description: 'The most popular Web3 wallet'
  },
  coinbase: {
    name: 'Coinbase Wallet',
    icon: '🔵',
    description: 'Secure and easy-to-use wallet'
  },
  walletConnect: {
    name: 'WalletConnect',
    icon: '🔗',
    description: 'Connect to 300+ wallets'
  },
  trust: {
    name: 'Trust Wallet',
    icon: '🛡️',
    description: 'The most trusted & secure crypto wallet'
  }
};

// Contract addresses (to be updated with actual deployed addresses)
export const contractAddresses = {
  helixVault: '0x...', // Main vault contract
  geneticData: '0x...', // Genetic data storage contract
  researchMarketplace: '0x...', // Research marketplace contract
} as const;

// Network configurations
export const networks = {
  sepolia: {
    chainId: 11155111,
    name: 'Sepolia',
    rpcUrl: 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY',
    blockExplorer: 'https://sepolia.etherscan.io'
  },
  mainnet: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
    blockExplorer: 'https://etherscan.io'
  }
} as const;
