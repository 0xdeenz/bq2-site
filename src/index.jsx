import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Provider } from 'react-redux'

import './styles/index.css';
import App from './pages/App';
import store from './state';

const getLibrary = (provider) => {
    return new Web3Provider(provider);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <App />
                </Web3ReactProvider>
            </Provider>
        </ChakraProvider>
    </StrictMode>
);
