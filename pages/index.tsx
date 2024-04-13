import useActions from "@/hooks/useActions";
import { useProfile } from "@/hooks/useProfile";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Index from "@/screens/index/Index";
import { logout } from "@/store/user/user.actions";

const IndexPage: NextPageAuth = () => {
    return <Index />
}

IndexPage.isOnlyUser = true

export default IndexPage