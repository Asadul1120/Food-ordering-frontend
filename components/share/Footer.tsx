import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-[#031f14] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1.35fr_0.55fr_0.55fr]">
        {/* Brand Section */}
        <div>
          <Logo />

          <p className="mt-6 max-w-[340px] text-sm leading-6 text-gray-200">
            Restaurant meals and café favorites from Savar, cooked fresh and
            delivered to your door.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex items-center gap-2">
            <a
              href="tel:+8809658788505"
              aria-label="Call us"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#294236] bg-[#18382b] transition hover:bg-[#294236]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <a
              href="https://wa.me/8801904070111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#294236] bg-[#18382b] transition hover:bg-[#294236]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#294236] bg-[#18382b] text-base font-bold transition hover:bg-[#294236]"
            >
              f
            </a>
          </div>

          {/* Install App */}
          {/* <Link
            href="#install-app"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            📲 Install our app
          </Link> */}
        </div>

        {/* Visit & Order */}
        <div>
          <h3 className="mb-4 text-xs font-bold tracking-[2px] text-[#ffcc00]">
            VISIT & ORDER
          </h3>

          <div className="space-y-3 text-sm">
            {/* Location */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[#ffcc00]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <span>Freshlya Fusion Café, Thana Road, Savar, Dhaka</span>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[#ffcc00]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>

              <p>
                Every day · 3 PM–11 PM
                <span className="text-gray-400"> · pre-orders anytime</span>
              </p>
            </div>

            {/* Delivery */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[#ffcc00]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 7h13v11H3z" />
                  <path d="M16 11h4l3 4v3h-7" />
                  <circle cx="7.5" cy="18" r="1.5" />
                  <circle cx="19.5" cy="18" r="1.5" />
                </svg>
              </span>

              <span>Home delivery across Savar</span>
            </div>

            {/* Payment */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[#ffcc00]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </span>

              <div>
                <p>bKash, Nagad, Rocket, Upay & Cash on Delivery</p>
                <p className="text-gray-400">
                  Merchant number 00000000000 · Bangla QR
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-3 pt-1">
              <span className="mt-0.5 text-[#ffcc00]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                </svg>
              </span>

              <p>
                <a href="tel:+8809658788505" className="hover:text-[#ffcc00]">
                  +8801715819298
                </a>
                {" · "}
                <a
                  href="https://wa.me/8801904070111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffcc00]"
                >
                  WhatsApp 01715819298
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Order Links */}
        <div>
          <h3 className="mb-4 text-xs font-bold tracking-[2px] text-[#ffcc00]">
            ORDER
          </h3>

          <ul className="space-y-3 text-sm text-gray-100">
            <li>
              <Link href="/menu" className="hover:text-[#ffcc00]">
                Full Menu
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="hover:text-[#ffcc00]">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-[#ffcc00]">
                Your Cart
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ffcc00]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Account Links */}
        <div>
          <h3 className="mb-4 text-xs font-bold tracking-[2px] text-[#ffcc00]">
            ACCOUNT
          </h3>

          <ul className="space-y-3 text-sm text-gray-100">
            <li>
              <Link href="/login" className="hover:text-[#ffcc00]">
                Sign in
              </Link>
            </li>
            <li>
              <Link href="/order-history" className="hover:text-[#ffcc00]">
                Order History
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:text-[#ffcc00]">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#294236]">
        <div className="mx-auto flex max-w-[1220px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-gray-300 md:flex-row">
          <p>© 2026 Freshlya Fusion Café. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/about" className="hover:text-[#ffcc00]">
              About Us
            </Link>

            <Link href="/terms" className="hover:text-[#ffcc00]">
              Terms & Conditions
            </Link>

            <Link href="/refund-policy" className="hover:text-[#ffcc00]">
              Refund & Cancellation
            </Link>

            <Link href="/privacy-policy" className="hover:text-[#ffcc00]">
              Privacy Policy
            </Link>
          </div>

          <a href="#" className="whitespace-nowrap hover:text-[#ffcc00]">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
