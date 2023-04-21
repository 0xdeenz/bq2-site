import { BlockQualifiedSubgraph } from '@bq-core/data';
import { generateCredentialOwnershipProof, verifyCredentialOwnershipProof } from '@bq-core/lib';
import { useToast } from '@chakra-ui/react'
import { BigNumber} from "@ethersproject/bignumber";
import { formatBytes32String } from "@ethersproject/strings"
import { Identity } from '@semaphore-protocol/identity';
import { Group } from '@semaphore-protocol/group';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { 
    MintBurnerToken, 
    MintButton, 
    MintComponents, 
    MintInput, 
    MintText, 
    MintWrapper, 
    TitleTest,
    Toast,
    ToastDescription,
    ToastTitle
} from "./components";
import { isValidAddress, truncateAddress } from "../../hooks/utils";
import { BQT_CONTRACT, CREDENTIAL_IDS, TREE_DEPTH } from '../../constants/chain';
import bqtABI from '../../constants/bqtABI.json'

export default function MintCertificateComponent () {
    const identitySecret = useSelector(state => state.identitySecret.identitySecret);
    const toast = useToast();

    const [eligibleIdentities, setEligibleIdentities] = useState([])
    const [canMint, setCanMint] = useState(false)
    const [recipient, setRecipient] = useState("")
    if (typeof BigInt === 'undefined') global.BigInt = require('big-integer')

    useEffect(() => {
        const fetchData = async () => {
            const subgraph = new BlockQualifiedSubgraph("maticmum")
            const _eligibleIdentities = await subgraph.getGroupMembers(CREDENTIAL_IDS.smartContracts, "credentials")
            setEligibleIdentities(_eligibleIdentities)
        }

        fetchData()
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const identity = new Identity(identitySecret)

        setCanMint(
            eligibleIdentities.includes(identity.commitment.toString())
        )
    // eslint-disable-next-line
    }, [identitySecret])

    const setToast = (title, description, kind='info') => {
        toast({
            position: 'top',
            render: () => (
                <Toast success={kind==='success'}>
                    <ToastTitle>{title}</ToastTitle>
                    <ToastDescription>{description}</ToastDescription>
                </Toast>
            )
        })
    }

    const setDisplayAddress = (event) => {
        if (!isValidAddress(event.target.value)) { 
            return 
        }

        // TODO: make this the truncated value
        setRecipient(
            event.target.value
        )
    }

    // TODO: send request to relayer -- which stays to be defined
    const handleMint = async () => {
        setCanMint(false)

        setToast(
            `Generating proof...`,
            `hang tight, this might take a while`
        )

        const credentialsGroup = new Group(CREDENTIAL_IDS.smartContracts, TREE_DEPTH)
        credentialsGroup.addMembers(eligibleIdentities)

        const externalNullifier = formatBytes32String("bq-demo-credential-gated-token")

        const signal = BigNumber.from(recipient)

        const proof = await generateCredentialOwnershipProof(
            new Identity(identitySecret),
            credentialsGroup,
            externalNullifier,
            signal
        )
        
        /* // sanity check
        const isValid = await verifyCredentialOwnershipProof(proof)
        console.log(isValid) */

        setToast(
            `Sending transaction`,
            `do not worry about gas, the relayer takes care of it`
        )

        const response = await fetch(process.env.REACT_APP_WEBHOOK_URI, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                abi: bqtABI,
                functionParameters: [
                    recipient,
                    proof.merkleTreeRoot,
                    proof.nullifierHash,
                    proof.proof
                ]
            })
        })

        setToast(
            `Transaction sent!`,
            <>
                Check the contract:&nbsp;
                <a href={BQT_CONTRACT.explorer} target="_blank" aria_label="contract" style={{textDecoration: "underline"}}>
                    {truncateAddress(BQT_CONTRACT.address)}
                </a>
            </>
        )

        setCanMint(true)
    }

    return (
        <MintBurnerToken>
            <TitleTest>
                Mint an NFT Certificate
            </TitleTest>
            <MintWrapper>
                <MintText>
                    You can mint an NFT Certificate after solving all quizes to a burner address of your choice:
                </MintText>
                <MintComponents>
                    <MintInput 
                        type="text"
                        disabled={!canMint}
                        onChange={setDisplayAddress}
                        placeholder="Enter Address"
                        value={recipient}
                    />
                    <MintButton 
                        disabled={!canMint} 
                        onClick={handleMint}
                    >
                        Mint
                    </MintButton>
                </MintComponents>
                <MintText>
                    Don't worry about gas: the relayer takes care of it, ensuring your privacy.
                </MintText>
            </MintWrapper>
        </MintBurnerToken>
    )
}