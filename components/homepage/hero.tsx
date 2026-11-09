"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const foodSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1559528896-c5310744cce8?auto=format&fit=crop&w=1400&q=85",
    category: "FRESHLYA FAVORITE",
    name: "Chicken Biryani",
    price: "View Menu",
    href: "/menu/chicken-biryani",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?auto=format&fit=crop&w=1400&q=85",
    category: "MOST LOVED",
    name: "Biryani Platter",
    price: "View Menu",
    href: "/menu/biryani",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1565016050896-d5f362810b48?auto=format&fit=crop&w=1400&q=85",
    category: "CUSTOMER FAVORITE",
    name: "Special Burger",
    price: "View Menu",
    href: "/menu/burger",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?auto=format&fit=crop&w=1400&q=85",
    category: "CHEF'S SPECIAL",
    name: "Special Pasta",
    price: "View Menu",
    href: "/menu/pasta",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=85",
    category: "CAFE SPECIAL",
    name: "Special Coffee",
    price: "View Menu",
    href: "/menu/coffee",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1763219802762-1d34ee0907c5?auto=format&fit=crop&w=1400&q=85",
    category: "FRESH & DELICIOUS",
    name: "Grilled Chicken",
    price: "View Menu",
    href: "/menu/grilled-chicken",
  },
];


const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFood = foodSlides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % foodSlides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + foodSlides.length) % foodSlides.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % foodSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-br from-[#eef8f2] via-[#edf7f1] to-[#f1f4d9]">
        <div className="mx-auto grid max-w-[1155px] items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:py-[62px]">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-[#a5d9bd] bg-white px-4 py-1.5 text-xs font-bold tracking-[2px] text-[#075b3d]">
              MADE FOR GOOD MOMENTS
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#03291c] sm:text-5xl lg:text-[45px]">
              Restaurant meals.
              <span className="block text-[#08613f]">Café favorites.</span>
            </h1>

            <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-gray-700">
              Freshly made food and handcrafted coffee from Savar's favorite
              fusion café, delivered to your door.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/menu"
                className="rounded-full bg-[#ffcc00] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-yellow-400"
              >
                Order Now
              </Link>

              <Link
                href="/categories"
                className="rounded-full border border-[#08613f] px-7 py-3.5 text-sm font-semibold text-[#075b3d] transition hover:bg-[#075b3d] hover:text-white"
              >
                View Categories
              </Link>
            </div>

            {/* Restaurant Information */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-700">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#24c66b]" />
                Open now · until 11 PM
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffcc00]" />3 PM –
                11 PM daily
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffcc00]" />
                Delivery in Savar
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffcc00]" />
                bKash · Nagad · COD
              </span>
            </div>
          </div>

          {/* Right Food Slider */}
          <div className="relative mx-auto w-full max-w-[575px] pt-4">
            {/* Background Decoration */}
            <div className="absolute -inset-2 rotate-[5deg] rounded-[35px] bg-[#e8d95c]" />

            <div className="absolute -inset-2 -rotate-[3deg] rounded-[35px] bg-[#287c59]" />

            {/* Most Loved Badge */}
            <div className="absolute -left-5 top-0 z-20 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-800 shadow-lg">
              <span className="text-base">🔥</span>
              Most loved
            </div>

            {/* Slider Card */}
            <div className="relative aspect-[1.42] overflow-hidden rounded-[30px] border-[4px] border-white bg-gray-200 shadow-2xl">
              {/* Food Image */}
              <Image
                key={activeFood.id}
                src={activeFood.image}
                alt={activeFood.name}
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 768px) 100vw, 575px"
                className="object-cover transition-all duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001b10]/95 via-[#001b10]/25 to-transparent" />

              {/* Previous Button */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous food"
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#806c42]/90 text-xl text-white transition hover:bg-[#ffcc00] hover:text-black"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next food"
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#806c42]/90 text-xl text-white transition hover:bg-[#ffcc00] hover:text-black"
              >
                ›
              </button>

              {/* Food Details */}
              <div className="absolute bottom-10 left-6 z-10">
                <p className="text-xs font-bold tracking-wider text-[#ffcc33]">
                  {activeFood.category}
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  {activeFood.name}
                </h2>

                <p className="mt-2 text-xl font-bold text-[#ffcc33]">
                  {activeFood.price}
                </p>

                <Link
                  href={activeFood.href}
                  className="mt-4 inline-flex rounded-full bg-[#ffcc00] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400"
                >
                  Order Now
                </Link>
              </div>

              {/* Slider Indicators */}
              <div className="absolute bottom-5 right-6 z-10 flex items-center gap-2">
                {foodSlides.map((food, index) => (
                  <button
                    key={food.id}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-6 bg-[#ffcc00]"
                        : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-[1155px] grid-cols-1 divide-y divide-gray-100 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="py-5 text-center">
            <h3 className="text-sm font-bold text-[#075b3d]">
              Fresh & Made to Order
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Prepared when you order
            </p>
          </div>

          <div className="py-5 text-center">
            <h3 className="text-sm font-bold text-[#075b3d]">
              Fast Local Delivery
            </h3>
            <p className="mt-1 text-xs text-gray-500">Savar, Dhaka</p>
          </div>

          <div className="py-5 text-center">
            <h3 className="text-sm font-bold text-[#075b3d]">Pay Your Way</h3>
            <p className="mt-1 text-xs text-gray-500">
              bKash, Nagad, SSLCOMMERZ & COD
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
