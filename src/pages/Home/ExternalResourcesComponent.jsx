import { FaGithubSquare, FaTwitterSquare, FaTelegram } from "react-icons/fa"
import { 
    ExternalResources, 
    ResourceLink, 
    ResourceList, 
    TitleTest
} from "./components";

export default function ExternalResourcesComponent () {
    return(
        <ExternalResources>
            <TitleTest>
                Resources
            </TitleTest>
            <ResourceList>
                <ResourceLink href="https://github.com/0xdeenz/bq2" target="_blank" aria_label="bq2 monorepo">
                    <FaGithubSquare />
                    bq2 monorepo
                </ResourceLink>
                <ResourceLink href="https://github.com/0xdeenz/bq2-subgraph" target="_blank" aria_label="bq2 subgraph">
                    <FaGithubSquare />
                    bq2 subgraph
                </ResourceLink>
                <ResourceLink href="https://github.com/0xdeenz/bq2-site" target="_blank" aria_label="bq2 site">
                    <FaGithubSquare />
                    bq2 site
                </ResourceLink>
            </ResourceList>
            <ResourceList>
                <ResourceLink href="https://twitter.com/0xdeenz" target="_blank" aria_label="twitter">
                    <FaTwitterSquare />
                    Reach out on Twitter
                </ResourceLink>
                <ResourceLink href="https://t.me/deenzdev" target="_blank" aria_label="telegram">
                    <FaTelegram />
                    Reach out on Telegram
                </ResourceLink>
            </ResourceList>
        </ExternalResources>
    )
}
