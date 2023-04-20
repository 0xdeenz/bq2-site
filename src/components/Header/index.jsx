import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core';
import Jazzicon from "@metamask/jazzicon";

import { truncateAddress } from '../../hooks/utils';
import { setModal } from '../../state/modal/reducer';
import { connectors } from '../WalletModal/connectors';
import { ButtonsWrapper, ConnectButton, HeaderWrapper, StyledIdenticon, Title } from './components';
import { setIdentitySecret } from '../../state/identitySecret/reducer';


export default function Header ({ onOpen }) {
    const dispatch = useDispatch();
    const {
        library,
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
        const fetchData = async () => {
            if (account) {
                try {
                    const identitySecret = await library.getSigner()
                        .signMessage("bq2-demo-site\nYour signature of this message will be used to generate your unique Semaphore identity") 

                    dispatch(setIdentitySecret(identitySecret))
                } catch (err) {
                    deactivate()
                    dispatch(setIdentitySecret(undefined))
                }
            }
        }

        fetchData()
    // eslint-disable-next-line
    }, [account])

    useEffect(() => {
        if (!active) {
            dispatch(setIdentitySecret(undefined))
        }
    // eslint-disable-next-line
    }, [active])

    const handleConnect = () => {
        onOpen()
        dispatch(setModal('connect-wallet'))
    }

    const handleDisconnect = async () => {
        deactivate()
        dispatch(setModal(''))
        window.localStorage.setItem("provider", "");
    }

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
            return(
                <ButtonsWrapper>
                    <ConnectButton onClick={handleDisconnect} connected={true}><Identicon />&nbsp;&nbsp;{ truncateAddress(account) }</ConnectButton>
                </ButtonsWrapper>
            )
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