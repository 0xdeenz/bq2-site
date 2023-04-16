import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
});

const walletconnect = new WalletConnectConnector({
    rpc: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true
});

const walletlink = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    appName: "Block Qualified"
});

export const connectors = {
    "injected": injected,
    "walletConnect": walletconnect,
    "coinbaseWallet": walletlink
};