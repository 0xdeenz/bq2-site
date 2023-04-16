import { Wrapper } from "./components";
import QuizShowcaseComponent from "./QuizShowcaseComponent";
import MintCertificateComponent from "./MintCertificateComponent";
import ExternalResourcesComponent from "./ExternalResourcesComponent";

export function Home() {
    return (
        <Wrapper>
            <QuizShowcaseComponent />
            <MintCertificateComponent />
            <ExternalResourcesComponent />
        </Wrapper>
    )
}