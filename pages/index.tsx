import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Index from "@/screens/index/Index";

const IndexPage: NextPageAuth = () => {

    return <Index />
}

IndexPage.isOnlyUser = true

export default IndexPage