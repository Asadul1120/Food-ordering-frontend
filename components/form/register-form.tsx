"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Check, Leaf, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { useRegister } from "@/hooks/auth.hook";
import { registerSchema } from "@/validation/auth.validation";

function getErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "data" in error) {
    const data = (error as { data?: { message?: string } }).data;

    if (data?.message) return data.message;
  }

  return error instanceof Error ? error.message : "Something went wrong";
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

export default function RegisterForm() {
  const router = useRouter();
  const registerMutation = useRegister();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },

    validators: {
      onSubmit: registerSchema,
    },

 onSubmit: async ({ value }) => {
  try {
    const { confirmPassword, ...payload } = value;

    if (confirmPassword !== value.password) return;

    await registerMutation.mutateAsync(payload);

    toast.success("Account created successfully!");

    router.replace("/");
  } catch (error) {
    toast.error(getErrorMessage(error));
  }
},

  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf7f0] p-4 sm:p-6">
      <div className="grid w-full max-w-[896px] overflow-hidden rounded-[24px] bg-white shadow-[0_18px_35px_rgba(10,55,35,0.14)] md:min-h-[658px] md:grid-cols-2">
        {/* LEFT SIDE */}
        <section className="flex flex-col justify-between bg-[linear-gradient(145deg,#032719_0%,#07583b_100%)] px-8 py-9 text-white sm:px-10 md:min-h-[658px]">
          {/* Logo */}
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
          <div className="my-10 max-w-[370px]">
            <h1 className="text-[28px] font-bold leading-[1.35] tracking-tight">
              Join us for
              <br />
              <span className="text-[#ffd83d]">fresh moments.</span>
            </h1>

            <div className="mt-5 space-y-3">
              {[
                "Track your orders live",
                "Save addresses for faster checkout",
                "Reorder your favorites in a tap",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check
                    size={17}
                    className="shrink-0 text-[#ffd83d]"
                    strokeWidth={2}
                  />

                  <p className="text-[14px] text-gray-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-[12px] text-white/65">Savar, Dhaka · 3 PM–11 PM</p>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex flex-col justify-center bg-white px-8 py-10 sm:px-10 md:px-10">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-[29px] font-bold tracking-tight text-[#063c2b]">
              Create your account
            </h2>

            <p className="mt-1 text-[13px] text-[#747474]">
              It only takes a minute.
            </p>
          </div>

          {/* Register Form */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
              void form.handleSubmit();
            }}
            className="space-y-[17px]"
          >
            {/* Name */}
            <form.Field name="name">
              {(field) => {
                const error = getFieldError(field.state.meta.errors);

                return (
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-[5px] block text-[14px] font-medium text-gray-900"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      className="h-[42px] w-full rounded-[13px] border border-[#d5ddd8] px-4 text-[14px] outline-none transition focus:border-[#086442] focus:ring-2 focus:ring-[#086442]/10"
                    />

                    {error && (
                      <p className="mt-1 text-xs text-red-500">{error}</p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Email */}
            <form.Field name="email">
              {(field) => {
                const error = getFieldError(field.state.meta.errors);

                return (
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-[5px] block text-[14px] font-medium text-gray-900"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      className="h-[42px] w-full rounded-[13px] border border-[#d5ddd8] px-4 text-[14px] outline-none transition focus:border-[#086442] focus:ring-2 focus:ring-[#086442]/10"
                    />

                    {error && (
                      <p className="mt-1 text-xs text-red-500">{error}</p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Phone */}
            <form.Field name="phone">
              {(field) => {
                const error = getFieldError(field.state.meta.errors);

                return (
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-[5px] block text-[14px] font-medium text-gray-900"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="01XXXXXXXXX"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      className="h-[42px] w-full rounded-[13px] border border-[#d5ddd8] px-4 text-[14px] outline-none transition focus:border-[#086442] focus:ring-2 focus:ring-[#086442]/10"
                    />

                    {error && (
                      <p className="mt-1 text-xs text-red-500">{error}</p>
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
                      className="mb-[5px] block text-[14px] font-medium text-gray-900"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(event.target.value)
                        }
                        className="h-[42px] w-full rounded-[13px] border border-[#d5ddd8] px-4 pr-16 text-[14px] outline-none transition focus:border-[#086442] focus:ring-2 focus:ring-[#086442]/10"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((previous) => !previous)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] font-semibold text-[#086442]"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>

                    {error && (
                      <p className="mt-1 text-xs text-red-500">{error}</p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Confirm Password */}
            <form.Field name="confirmPassword">
              {(field) => {
                const error = getFieldError(field.state.meta.errors);

                return (
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-[5px] block text-[14px] font-medium text-gray-900"
                    >
                      Confirm password
                    </label>

                    <input
                      id="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      className="h-[42px] w-full rounded-[13px] border border-[#d5ddd8] px-4 text-[14px] outline-none transition focus:border-[#086442] focus:ring-2 focus:ring-[#086442]/10"
                    />

                    {error && (
                      <p className="mt-1 text-xs text-red-500">{error}</p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={registerMutation.isPending || form.state.isSubmitting}
              className="flex h-[44px] w-full items-center justify-center rounded-full bg-[#086442] text-[14px] font-semibold text-white transition hover:bg-[#064e34] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {registerMutation.isPending
                ? "Creating account..."
                : "Create account"}
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-[21px] text-[13px] text-gray-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#086442] transition hover:text-[#043b29]"
            >
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
