import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { useProfile } from "@/hooks/useProfile";
import { useUnauthRedirect } from "@/hooks/useUnauthRedirect";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Clients from "@/screens/clients/Clients";

const ClientsPage: NextPageAuth = () => {
    const { profile } = useProfile();

    useUnauthRedirect()

    return <Clients />
}

ClientsPage.isOnlyUser = true

export default Clients