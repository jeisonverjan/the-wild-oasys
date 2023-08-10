import { useQuery } from "@tanstack/react-query";
import { getLoggedUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getLoggedUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
