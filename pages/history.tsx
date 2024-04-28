import { useProfile } from "@/hooks/useProfile";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import History from "@/screens/history/History";

const HistoryPage: NextPageAuth = () => {

    return (
        <History />
    )
}

HistoryPage.isOnlyUser = true

export default HistoryPage