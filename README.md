# PARS Dashboard

A Next.js-based dashboard for monitoring and managing PARS token dividends on the Binance Smart Chain (BSC). This application provides users with real-time token metrics, dividend information, and the ability to claim rewards.

## Features

- 📊 **Token Metrics Dashboard**

  - Real-time token price display
  - Total supply overview
  - Bridge liquidity tracking
  - Dividend holders count

- 💰 **Dividend Management**

  - View withdrawable dividends
  - Track dividend token balance
  - Check account dividend information
  - Total payout history
  - Claim rewards with 48-hour cooldown timer

- 🔗 **Web3 Integration**

  - Wallet connection via thirdweb
  - Support for multiple wallet providers through Reown AppKit
  - Direct smart contract interactions

- 🎨 **Modern UI**
  - Dark theme interface
  - Responsive design with Tailwind CSS
  - Material-UI components
  - Real-time data updates

## Tech Stack

- **Framework**: Next.js 13
- **Web3 Libraries**:
  - thirdweb SDK
  - Reown AppKit (WalletConnect)
  - ethers.js
  - viem & wagmi
- **UI Libraries**:
  - Tailwind CSS
  - Material-UI
  - React Icons
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Yarn package manager
- A Web3 wallet (MetaMask, WalletConnect, etc.)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pars-dashboard
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint
- `yarn export` - Export the application as static HTML
- `yarn deploy` - Build and deploy to IPFS via thirdweb

## Project Structure

```
pars-dashboard/
├── components/
│   ├── Dashboard.jsx          # Main dashboard component
│   ├── Layout.jsx             # Layout wrapper
│   ├── Navbar.jsx             # Navigation bar
│   ├── SideNav.jsx            # Side navigation
│   ├── MainContent.jsx        # Main content container
│   ├── contract.js            # Smart contract configuration
│   └── Read Contract/         # Contract interaction components
│       ├── balance.jsx
│       ├── claim.jsx
│       ├── dividendHolders.jsx
│       ├── dividendToken.jsx
│       ├── getAccountDividendInfo.jsx
│       ├── totalPayout.jsx
│       └── withdrawableDividend.jsx
├── pages/
│   ├── _app.js                # App wrapper with providers
│   └── index.js               # Home page
├── styles/
│   ├── globals.css            # Global styles
│   └── Home.module.css        # Home page styles
└── assets/                    # Static assets (logos, images)
```

## Features Overview

### Supply Overview

Displays the total token supply and bridge liquidity locked in the BSC network.

### Token Metrics

- **Token Price**: Real-time price fetched from DexScreener API
- **Claim Rewards**: Interactive claim button with 48-hour cooldown
- **Dividend Holdings**: Shows your current dividend token balance
- **Next Payout**: Countdown timer for next dividend payout
- **Dividend Holders**: Total number of holders eligible for dividends
- **Total Rewards**: Accumulated withdrawable dividends

### Smart Contract Integration

The dashboard interacts with the PARS token contract deployed on BSC:

- Contract Address: `0x593649F70f836565e33f0BCe9af9503c243359B3`
- Network: Binance Smart Chain (BSC)

## Configuration

### Contract Address

The contract address is configured in:

- `components/contract.js`
- `components/Dashboard.jsx`

### API Endpoints

- DexScreener API: Used for token price and liquidity data
- BSCScan API: Used for token supply information

## Deployment

### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

This will:

1. Build the Next.js application
2. Export it as static files
3. Upload to IPFS via thirdweb

## Learn More

To learn more about the technologies used:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - Learn about the React SDK
- [thirdweb JavaScript Documentation](https://docs.thirdweb.com/javascript) - Learn about the JavaScript/TypeScript SDK
- [thirdweb Portal](https://portal.thirdweb.com) - Guides and development resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Reown AppKit Documentation](https://docs.reown.com/appkit) - Wallet connection library
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework

## License

See [LICENSE.md](LICENSE.md) for details.
