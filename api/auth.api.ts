import apiClient from "@/lib/apiClient";
import { LoginPayload, RegisterPayload } from "@/types/auth.type";

export const userRegister = (payload: RegisterPayload) => {
  return apiClient("/api/v1/auth/register", {
    method: "POST",
    body: payload,
  });
};

export const userLogin = (payload: LoginPayload) => {
  return apiClient("/api/v1/auth/login", {
    method: "POST",
    body: payload,
  });
};

export const getMe = () => {
  return apiClient("/api/v1/auth/me", {
    method: "GET",
  });
};

export const userLogout = () => {
  return apiClient("/api/v1/auth/logout", {
    method: "POST",
  });
};

export const refreshToken = () => {
  return apiClient("/api/v1/auth/refresh-token", {
    method: "POST",
  });
};