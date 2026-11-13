import { getMe, refreshToken, userLogin, userLogout, userRegister } from "@/api/auth.api";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";


export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userRegister,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["user"],
        exact: true,
      });
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userLogin,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["user"],
        exact: true,
      });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userLogout,
    onSuccess: async () => {
      await queryClient.cancelQueries();
      queryClient.removeQueries();
    },
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: refreshToken,
  });
};