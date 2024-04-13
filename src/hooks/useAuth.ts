import { useTypedSelector } from "./useTypedSelect";

export const useAuth = () => useTypedSelector(state => state.user)