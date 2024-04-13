import { useProfile } from "@/hooks/useProfile";
import { useUnauthRedirect } from "@/hooks/useUnauthRedirect";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Services from "@/screens/services/Services";

const ServicesPage: NextPageAuth = () => {
    const { profile } = useProfile();

    useUnauthRedirect()

    return <Services />
}

ServicesPage.isOnlyUser = true

export default ServicesPage