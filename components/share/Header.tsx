import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="w-full text-white">
      {/* Top Bar */}
      <div className="bg-[#02170f]">
        <div className="mx-auto flex h-[33px] max-w-[1220px] items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-2 font-medium">
            <span className="h-2 w-2 rounded-full bg-[#42d98a]" />
            <span>Open now · until 11 PM</span>
          </div>

          <p className="hidden md:block">
            Delivery in Savar, Dhaka · bKash · Nagad · Cash on Delivery
          </p>

          <div className="flex items-center gap-3">
            <button className="rounded-full bg-[#1b352b] px-3 py-1 font-medium">
              বাংলা
            </button>

            <a
              href="tel:+8801000000000"
              className="font-semibold text-yellow-400"
            >
              Call us
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#031f14]">
        <div className="mx-auto flex h-[78px] max-w-[1220px] items-center justify-between gap-5 px-4">
          {/* Logo */}
          <Logo />

          {/* Search Bar */}
          <form
            action="/search"
            method="GET"
            className="flex h-[42px] w-full max-w-[576px] items-center rounded-full bg-white px-1.5 pl-4"
          >
            <input
              type="text"
              name="q"
              placeholder="Search biryani, coffee, sandwich..."
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
            />

            <button
              type="submit"
              aria-label="Search"
              className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#ffcc00] text-black hover:bg-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </form>

          {/* Right Actions */}
          <div className="ml-auto flex shrink-0 items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold hover:text-yellow-400"
            >
              Foods
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold hover:text-yellow-400"
            >
              Contact Us
            </Link>

            {/* Sign In */}
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm font-semibold hover:text-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>

              <span>Sign in</span>
            </Link>

            {/* Shopping Cart */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#294236] bg-[#18382b] hover:bg-[#254a39]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ffcc00] text-[11px] font-bold text-black">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
