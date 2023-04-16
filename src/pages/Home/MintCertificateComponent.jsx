import { useState } from "react";
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

export default function MintCertificateComponent () {
    const [recipient, setRecipient] = useState("")

    const setDisplayAddress = (event) => {
        if (!isValidAddress(event.target.value)) { 
            return 
        }

        setRecipient(
            truncateAddress(event.target.value)
        )
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
                        onChange={setDisplayAddress}
                        placeholder="Enter Address"
                        value={recipient}
                    />
                    <MintButton disabled={false} onClick={() => {console.log("clicked")}}>Mint</MintButton>
                </MintComponents>
                <MintText>
                    Don't worry about gas: the relayer takes care of it, ensuring your privacy.
                </MintText>
            </MintWrapper>
        </MintBurnerToken>
    )
}