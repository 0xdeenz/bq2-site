import { BlockQualifiedSubgraph } from '@bq-core/data';
import { Identity } from '@semaphore-protocol/identity';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { 
    MintBurnerToken, 
    MintButton, 
    MintComponents, 
    MintInput, 
    MintText, 
    MintWrapper, 
    TitleTest
} from "./components";
import { isValidAddress, truncateAddress } from "../../hooks/utils";
import { CREDENTIAL_IDS } from '../../constants/chain';

export default function MintCertificateComponent () {
    const identitySecret = useSelector(state => state.identitySecret.identitySecret);
    const [eligibleIdentities, setEligibleIdentities] = useState([])
    const [canMint, setCanMint] = useState(false)
    const [recipient, setRecipient] = useState("")

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

    const setDisplayAddress = (event) => {
        if (!isValidAddress(event.target.value)) { 
            return 
        }

        setRecipient(
            truncateAddress(event.target.value)
        )
    }

    // TODO: send request to relayer -- which stays to be defined
    const handleMint = async () => {
        console.log('minting')
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