import { useProfile } from "@/hooks/useProfile";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Services from "@/screens/services/Services";

const ServicesPage: NextPageAuth = () => {

    return <Services />
}

ServicesPage.isOnlyUser = true

export default ServicesPage