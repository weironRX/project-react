import { UserService } from "@/services/user.service"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { IFullUser } from "@/types/user.interface"

export const useProfile = () => {

    const {data: profile}: UseQueryResult<IFullUser> = useQuery(
      ["get-profile"],
      async () => {
        const response = await UserService.getProfile();
        return response.data;
      },
    );

    return { profile }
  };