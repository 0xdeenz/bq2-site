import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useWeb3React } from '@web3-react/core';
import Jazzicon from "@metamask/jazzicon";

import { truncateAddress } from '../../hooks/utils';
import { CHAIN_PARAMETERS } from '../../constants/chain';
import { setModal } from '../../state/modal/reducer';
import { connectors } from '../WalletModal/connectors';
import { ButtonsWrapper, ConnectButton, HeaderWrapper, StyledIdenticon, Title } from './components';
import { setCorrectChain } from '../../state/chain/reducer';

export default function Header ({ onOpen }) {
    const correctChain = useSelector(state => state.chain.correctChain);

    const dispatch = useDispatch();
    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active,
    } = useWeb3React();

    // Connect on load if account was left connected
    useEffect(() => {
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(connectors[provider]);
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (parseInt(CHAIN_PARAMETERS.chainId) === chainId) {
            dispatch(setCorrectChain(true))
        } else {
            dispatch(setCorrectChain(false))
        }
    // eslint-disable-next-line
    }, [chainId])

    const handleConnect = () => {
        onOpen()
        dispatch(setModal('connect-wallet'))
    }

    const handleDisconnect = () => {
        deactivate()
        dispatch(setModal(''))
        window.localStorage.setItem("provider", "");
    }

    const switchNetwork = async () => {
        try {
            await library.provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: CHAIN_PARAMETERS.chainId }]
            });
        } catch (switchError) {
          if (switchError.code === 4902) {
                try {
                    await library.provider.request({
                        method: "wallet_addEthereumChain",
                        params: [CHAIN_PARAMETERS]
                    });
                    console.log('here')
                } catch (error) {
                    console.log(error);
                }
          }
        }
    };

    function Identicon() {
        const ref = useRef();
        const { account, } = useWeb3React();
    
        useEffect(() => {
            if (account && ref.current) {
                (ref.current).innerHTML = "";
                (ref.current).appendChild(Jazzicon(16, parseInt(account.slice(2,10), 16)));
            }
        }, [account]);
    
        return <StyledIdenticon ref={ref} />
    }

    function ButtonsComponent () {
        if (active) {
            if (correctChain) {
                return(
                    <ButtonsWrapper>
                        <ConnectButton onClick={handleDisconnect} connected={true}><Identicon />&nbsp;&nbsp;{ truncateAddress(account) }</ConnectButton>
                    </ButtonsWrapper>
                )
            } else {  // Uncorrect chain, prompt the change
                return(
                    <ButtonsWrapper>
                        <ConnectButton onClick={switchNetwork} wrongChain={true}>Change Network</ConnectButton>
                    </ButtonsWrapper>
                )
            }
        } else {  
            return (
                <ButtonsWrapper>
                    <ConnectButton onClick={handleConnect}>Connect Wallet</ConnectButton>
                </ButtonsWrapper>
            )
        }
    }

    return (
        <HeaderWrapper>
            <Title to="/">
                bq2
            </Title>
            <ButtonsComponent />
        </HeaderWrapper>
    )
}