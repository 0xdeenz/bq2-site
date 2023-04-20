import { ethers } from "ethers"; 

export const CHAIN_PARAMETERS = {
    chainId: "0x13881",
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
    chainName: "Mumbai",
    nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
    blockExplorerUrls: ["https://mumbai.polygonscan.com"]
}

export const DEPLOYED_CONTRACTS = {
    "CredentialsRegistry": {
        "address": "0x5A140303E92da80BF96a734fd777957fF02714C4",
        "explorer": "https://mumbai.polygonscan.com/address/0x5A140303E92da80BF96a734fd777957fF02714C4#code"
    },
    "TestCredentialManager": {
        "address": "0x043c69abf15d154cf0Ffc482f8d63eE7874e1cee",
        "explorer": "https://mumbai.polygonscan.com/address/0x043c69abf15d154cf0Ffc482f8d63eE7874e1cee#code"
    },
    "GradeClaimVerifier": {
        "address": "0x987B9432B78f1A26490f88D8F972c0a2c46C4eb1",
        "explorer": "https://mumbai.polygonscan.com/address/0x987B9432B78f1A26490f88D8F972c0a2c46C4eb1#code"
    },
    "TestVerifier": {
        "address": "0xA8687a68c919aB5bAcB039Dd656dA8b2c4DEf610",
        "explorer": "https://mumbai.polygonscan.com/address/0xA8687a68c919aB5bAcB039Dd656dA8b2c4DEf610#code"
    }
}

export const PROVIDER = new ethers.JsonRpcProvider(process.env.REACT_APP_MATIC_QUICKNODE_KEY)

export const CREDENTIAL_IDS = {
    'fundamentals': 100,
    'ethereum': 200,
    'smartContracts': 300
}

export const CREDENTIAL_IDS_TO_QUIZ_NUMBER = {
    100: 1,
    200: 2,
    300: 3
}
