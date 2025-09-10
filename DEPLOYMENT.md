# Vercel Deployment Guide for Helix Vault Genetics

## Prerequisites

1. **Vercel Account**: Create a free account at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Ensure the code is pushed to GitHub (already completed)
3. **Node.js**: Version 18 or higher (for local testing)

## Step-by-Step Deployment Instructions

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project" on the dashboard

#### Step 2: Import GitHub Repository
1. In the "Import Git Repository" section, find `harperscott98/helix-vault-genetics`
2. Click "Import" next to the repository
3. If not visible, click "Adjust GitHub App Permissions" and ensure the repository is accessible

#### Step 3: Configure Project Settings
1. **Project Name**: `helix-vault-genetics` (or your preferred name)
2. **Framework Preset**: Select "Vite"
3. **Root Directory**: Leave as `./` (default)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

#### Step 4: Environment Variables (Optional)
Add these environment variables if needed:
- `NODE_ENV`: `production`
- `VITE_APP_TITLE`: `Helix Vault Genetics`

#### Step 5: Deploy
1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Your app will be available at the provided Vercel URL

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy from Project Directory
```bash
cd helix-vault-genetics
vercel
```

#### Step 4: Follow CLI Prompts
- Set up and deploy? `Y`
- Which scope? Select your account
- Link to existing project? `N`
- Project name: `helix-vault-genetics`
- Directory: `./`
- Override settings? `N`

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harperscott98/helix-vault-genetics)

Click the button above to deploy directly to Vercel.

## Post-Deployment Configuration

### 1. Custom Domain (Optional)
1. Go to your project dashboard in Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 2. Environment Variables
If you need to add environment variables:
1. Go to project settings
2. Click "Environment Variables"
3. Add required variables:
   - `VITE_WALLET_CONNECT_PROJECT_ID`: Your WalletConnect project ID
   - `VITE_INFURA_KEY`: Your Infura API key (if using Infura)

### 3. Build Settings Verification
Ensure these settings are correct:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x

## Important Configuration Notes

### Wallet Configuration
The app uses RainbowKit for wallet connections. You may need to:
1. Get a WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Update the `projectId` in `src/lib/wallet.ts`
3. Redeploy the application

### Smart Contract Integration
The app includes FHE smart contracts. For full functionality:
1. Deploy contracts to your preferred network (Sepolia testnet recommended)
2. Update contract addresses in `src/lib/wallet.ts`
3. Ensure users have the correct network configured

### Performance Optimization
The build includes:
- Code splitting for vendor and wallet libraries
- Optimized bundle sizes
- Static asset optimization

## Troubleshooting

### Common Issues

#### Build Failures
- Ensure Node.js version is 18 or higher
- Check that all dependencies are properly installed
- Verify build command is `npm run build`

#### Wallet Connection Issues
- Verify WalletConnect Project ID is set
- Check network configuration
- Ensure users have compatible wallets installed

#### Environment Variables
- Make sure all required environment variables are set
- Check variable names match exactly (case-sensitive)
- Redeploy after adding new variables

### Support
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Check GitHub repository for latest updates

## Deployment URLs

After successful deployment, your app will be available at:
- **Production**: `https://helix-vault-genetics.vercel.app` (or your custom domain)
- **Preview**: `https://helix-vault-genetics-git-main-harperscott98.vercel.app`

## Next Steps

1. **Test the Application**: Verify all features work correctly
2. **Configure Wallets**: Set up proper wallet integration
3. **Deploy Smart Contracts**: Deploy FHE contracts to blockchain
4. **Monitor Performance**: Use Vercel analytics to monitor usage
5. **Set Up CI/CD**: Configure automatic deployments on code changes

## Security Considerations

- Never commit sensitive API keys to the repository
- Use environment variables for all sensitive configuration
- Regularly update dependencies for security patches
- Monitor for any security vulnerabilities in the deployed application

---

**Note**: This deployment guide assumes you have already completed the code refactoring and Git history cleanup as specified in the project requirements.
