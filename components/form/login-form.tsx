
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Leaf, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { useLogin } from "@/hooks/auth.hook";
import { loginSchema } from "@/validation/auth.validation";

function getErrorMessage(error: unknown): string {
  if (
    error &&
    typeof error === "object" &&
    "data" in error
  ) {
    const data = (
      error as { data?: { message?: string } }
    ).data;

    if (data?.message) return data.message;
  }

  return error instanceof Error
    ? error.message
    : "Something went wrong";
}

function getFieldError(errors: unknown[]) {
  const error = errors[0];

  if (!error) return undefined;

  if (typeof error === "string") return error;

  if (typeof error === "object" && error !== null && "message" in error) {
    return String(error.message);
  }

  return "Invalid value";
}

export default function LoginForm() {
  const router = useRouter();
  const loginMutation = useLogin();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: async ({ value }) => {
      try {
        await loginMutation.mutateAsync(value);

        toast.success("Welcome back!");

        router.replace("/");
      } catch (error) {
        toast.error(getErrorMessage(error));
      }
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf7f0] p-4 sm:p-6">

      <div className="grid w-full max-w-[896px] overflow-hidden rounded-[24px] bg-white shadow-[0_18px_35px_rgba(10,55,35,0.14)] md:min-h-[448px] md:grid-cols-2">

        {/* LEFT SIDE */}
        <section className="flex min-h-[280px] flex-col justify-between bg-[linear-gradient(145deg,#032719_0%,#07583b_100%)] px-8 py-9 text-white sm:px-10 md:min-h-[448px]">

          {/* Brand Logo */}
          <div>
            <div className="relative inline-flex items-center">

              <Sparkles
                size={15}
                className="absolute -right-3 -top-2 text-yellow-400"
              />

              <span className="text-[31px] font-black italic tracking-tight">
                Freshly<span className="text-lime-400">a</span>
              </span>

              <Leaf
                size={20}
                className="ml-1 -mt-4 rotate-[-25deg] text-lime-400"
              />

            </div>

            <p className="ml-7 -mt-1 text-[8px] font-bold tracking-[2px] text-lime-300">
              FUSION CAFE
            </p>
          </div>

          {/* Welcome Content */}
          <div className="my-8 max-w-[370px]">

            <h1 className="text-[28px] font-bold leading-[1.35] tracking-tight sm:text-[29px]">
              Welcome back to
              <br />
              <span className="text-[#ffd83d]">
                good food.
              </span>
            </h1>

            <p className="mt-4 text-[14px] leading-[21px] text-gray-100">
              Sign in to track orders, save addresses
              and reorder your favorites faster.
            </p>

          </div>

          {/* Footer */}
          <p className="text-[12px] font-normal text-white/65">
            Savar, Dhaka · 3 PM–11 PM
          </p>

        </section>

        {/* RIGHT SIDE */}
        <section className="flex flex-col justify-center bg-white px-8 py-10 sm:px-10 md:px-10">

          {/* Heading */}
          <div className="mb-6">

            <h2 className="text-[29px] font-bold tracking-tight text-[#063c2b]">
              Sign in
            </h2>

            <p className="mt-1 text-[13px] text-[#747474]">
              Welcome back. Enter your details to continue.
            </p>

          </div>

          {/* Login Form */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
              void form.handleSubmit();
            }}
            className="space-y-[16px]"
          >

            {/* Email */}
            <form.Field name="email">
              {(field) => {
                const error = getFieldError(field.state.meta.errors);

                return (
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-[5px] block text-[14px] font-medium text-[#111827]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name={field.name}
                      type="email"
                      autoComplete="email"
                      placeholder=""
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      className="h-[42px] w-full rounded-[13px] border border-[#d5ddd8] bg-white px-3 text-[14px] text-gray-900 outline-none transition focus:border-[#086442] focus:ring-2 focus:ring-[#086442]/10"
                    />

                    {error && (
                      <p className="mt-1 text-xs text-red-500">
                        {error}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Password */}
            <form.Field name="password">
              {(field) => {
                const error = getFieldError(field.state.meta.errors);

                return (
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-[5px] block text-[14px] font-medium text-[#111827]"
                    >
                      Password
                    </label>

                    <div className="relative">

                      <input
                        id="password"
                        name={field.name}
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(event.target.value)
                        }
                        className="h-[42px] w-full rounded-[13px] border border-[#d5ddd8] bg-white px-3 pr-16 text-[14px] text-gray-900 outline-none transition focus:border-[#086442] focus:ring-2 focus:ring-[#086442]/10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((previous) => !previous)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] font-semibold text-[#086442] hover:text-[#043b29]"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>

                    </div>

                    {error && (
                      <p className="mt-1 text-xs text-red-500">
                        {error}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Remember Me */}
            <div className="flex items-center gap-2 pt-[1px]">

              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(event.target.checked)
                }
                className="h-[13px] w-[13px] cursor-pointer accent-[#086442]"
              />

              <label
                htmlFor="remember"
                className="cursor-pointer text-[13px] text-[#555]"
              >
                Remember me
              </label>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="flex h-[44px] w-full items-center justify-center rounded-full bg-[#086442] text-[14px] font-semibold text-white transition duration-200 hover:bg-[#064e34] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loginMutation.isPending ? "Signing in..." : "Sign in"}
            </button>

          </form>

          {/* Bottom Links */}
          <div className="mt-[21px] flex items-center justify-between gap-3">

            <Link
              href="/forgot-password"
              className="text-[13px] font-medium text-[#086442] transition hover:text-[#043b29]"
            >
              Forgot password?
            </Link>

            <Link
              href="/register"
              className="text-[13px] font-medium text-[#086442] transition hover:text-[#043b29]"
            >
              Create an account
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}
