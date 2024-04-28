import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Clients from "@/screens/clients/Clients";

const ClientsPage: NextPageAuth = () => {

    return <Clients />
}

ClientsPage.isOnlyUser = true

export default Clients