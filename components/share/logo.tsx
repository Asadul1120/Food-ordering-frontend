
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Freshlya Home"
      className="relative inline-flex shrink-0 flex-col"
    >
      <div className="relative">
        <span className="absolute -top-3 left-8 text-sm text-yellow-400">
          ✦
        </span>

        <span className="block -rotate-6 font-serif text-[29px] font-black italic leading-none tracking-tight text-white">
      Logo
        </span>

        <span className="absolute -right-1 -top-2 text-lg">
          🌿
        </span>
      </div>

      <span className="mt-1 text-center text-[7px] font-bold tracking-[2px] text-yellow-400">
        FUSION CAFE
      </span>
    </Link>
  );
};

export default Logo;
