
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      toast.success("Login successful!");

      router.push("/");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f8f6] flex items-center justify-center p-4">

      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-between bg-[#171717] p-12 text-white">

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Food<span className="text-orange-500">Order.</span>
            </h1>
          </div>

          <div>
            <div className="mb-8 text-7xl">🍔</div>

            <h2 className="text-4xl font-bold leading-tight">
              Delicious food,
              <br />
              delivered to you.
            </h2>

            <p className="mt-5 max-w-sm text-gray-400 leading-7">
              Order your favorite meals and enjoy
              fresh, delicious food delivered
              straight to your doorstep.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 FoodOrder. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center px-7 py-12 sm:px-12 md:px-14">

          <div className="mb-9">
            <div className="mb-5 text-3xl md:hidden">
              🍔
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Welcome Back
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-16 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 hover:text-orange-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 accent-orange-600"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-orange-600 hover:text-orange-700"
            >
              Create account
            </a>
          </p>

        </div>
      </div>
    </main>
  );
}
