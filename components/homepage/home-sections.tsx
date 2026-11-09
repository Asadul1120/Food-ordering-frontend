
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Ready Meals",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=85",
    href: "/categories/ready-meals",
  },
  {
    id: 2,
    name: "Cafe Menu",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    href: "/categories/cafe-menu",
  },
  {
    id: 3,
    name: "Freshlya Organics",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    href: "/categories/organics",
  },
];

const products = [
  {
    id: 1,
    name: "Mocha Iced Coffee with Vanilla Cold Foam",
    price: "৳500",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=85",
    href: "/menu/mocha-iced-coffee",
    rating: "★★★★★",
    reviews: "(1)",
  },
  {
    id: 2,
    name: "Epic Ham Sandwich",
    price: "৳300",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=85",
    href: "/menu/ham-sandwich",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: "৳400",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=85",
    href: "/menu/cappuccino",
  },
  {
    id: 4,
    name: "Grilled Chicken",
    price: "৳300",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=85",
    href: "/menu/grilled-chicken",
  },
  {
    id: 5,
    name: "Beef Tehari",
    price: "৳600",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=85",
    href: "/menu/beef-tehari",
  },
  {
    id: 6,
    name: "Kacchi Biryani",
    price: "৳1,000",
    rating: "★★★★★",
    reviews: "(11)",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=85",
    href: "/menu/kacchi-biryani",
  },
  {
    id: 7,
    name: "Best Coffee",
    price: "৳500",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=85",
    href: "/menu/best-coffee",
  },
  {
    id: 8,
    name: "Hot Bar-B-Q",
    price: "৳1,200",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=85",
    href: "/menu/hot-bbq",
    rating: "★★★★★",
    reviews: "(11)",
    soldOut: true,
  },
];

const steps = [
  {
    number: "1",
    title: "Choose your meal",
    description:
      "Browse the menu and add your favorites to the cart.",
  },
  {
    number: "2",
    title: "Place & pay",
    description:
      "Pay with bKash, Nagad, card or choose Cash on Delivery.",
  },
  {
    number: "3",
    title: "Enjoy at home",
    description:
      "We prepare it fresh and deliver it hot to your door.",
  },
];

const features = [
  {
    icon: "🍽️",
    title: "Restaurant & Café",
    description: "Meals, drinks, and café favorites",
  },
  {
    icon: "🛵",
    title: "Easy Online Ordering",
    description: "Browse the menu and order online",
  },
  {
    icon: "💳",
    title: "Local Payment Options",
    description: "bKash, Nagad, SSLCOMMERZ & COD",
  },
];

const HomeSections = () => {
  return (
    <>
      {/* Explore Menu Section */}
      <section className="bg-[#faf7f0] px-5 py-14">
        <div className="mx-auto max-w-[1155px]">

          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[#063b29]">
              Explore the Menu
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Pick a category and find your favorite
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group relative aspect-[2.25] overflow-hidden rounded-2xl bg-[#d3e8db] shadow-sm"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 575px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#001b10]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-5">
                  <h3 className="text-lg font-bold text-white">
                    {category.name}
                  </h3>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffcc00] text-xl font-bold text-black transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Freshlya Favorites Section */}
      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-[1155px]">

          {/* Section Header */}
          <div className="mb-7 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#063b29]">
                Freshlya Favorites
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Handpicked meals and café favorites
              </p>
            </div>

            <Link
              href="/menu"
              className="rounded-full border border-gray-200 px-5 py-2 text-xs font-medium text-gray-700 transition hover:border-[#08613f] hover:text-[#08613f]"
            >
              View Full Menu →
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Product Image */}
                <Link
                  href={product.href}
                  className="relative block aspect-square overflow-hidden rounded-lg bg-gray-100"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {product.soldOut && (
                    <>
                      <div className="absolute inset-0 bg-black/40" />

                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800">
                        Sold out
                      </span>
                    </>
                  )}
                </Link>

                {/* Product Information */}
                <div className="flex min-h-[145px] flex-col px-1 pt-3">
                  <Link href={product.href}>
                    <h3 className="min-h-[38px] text-sm font-semibold leading-5 text-gray-800 hover:text-[#08613f]">
                      {product.name}
                    </h3>
                  </Link>

                  {product.rating && (
                    <p className="mt-1 text-xs">
                      <span className="text-yellow-500">
                        {product.rating}
                      </span>
                      <span className="ml-1 text-gray-400">
                        {product.reviews}
                      </span>
                    </p>
                  )}

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    {product.price}
                  </p>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    disabled={product.soldOut}
                    className={`mt-auto flex w-full items-center justify-center gap-2 rounded-full py-2 text-xs font-semibold text-white transition ${
                      product.soldOut
                        ? "cursor-not-allowed bg-gray-200 text-gray-400"
                        : "bg-[#08613f] hover:bg-[#064d34]"
                    }`}
                  >
                    {product.soldOut ? "Sold out" : "+ Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#faf7f0] px-5 py-14">
        <div className="mx-auto max-w-[1155px]">

          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[#063b29]">
              How It Works
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              From craving to doorstep in three steps
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-gray-100 bg-white px-6 py-7 text-center shadow-sm"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#08613f] text-sm font-bold text-white">
                  {step.number}
                </span>

                <h3 className="mt-4 text-base font-bold text-[#063b29]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Freshlya Section */}
      <section className="bg-[#edf7f1] px-5 py-14">
        <div className="mx-auto max-w-[1155px]">

          <h2 className="mb-8 text-center text-2xl font-bold text-[#063b29]">
            Why Freshlya
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-white px-5 py-7 text-center shadow-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#08613f] text-xl">
                  {feature.icon}
                </span>

                <h3 className="mt-4 text-sm font-bold text-[#063b29]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="bg-[#faf7f0] px-5 py-14">
        <div className="mx-auto max-w-[1155px]">

          <div className="grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm md:grid-cols-2">

            {/* Restaurant Information */}
            <div className="p-7 sm:p-10">
              <h2 className="text-2xl font-bold text-[#063b29]">
                Find Us
              </h2>

              <div className="mt-5 space-y-4 text-sm">

                <div>
                  <h3 className="font-semibold text-[#08613f]">
                    Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Freshlya Fusion Café, Thana Road, Savar, Dhaka
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#08613f]">
                    Hours
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Every day · 3 PM – 11 PM
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#08613f]">
                    Delivery
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Savar, Dhaka
                  </p>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="tel:+8809658788505"
                  className="rounded-full bg-[#08613f] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#064d34]"
                >
                  Call Us
                </a>

                <a
                  href="https://wa.me/8801904070111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-200 px-5 py-2.5 text-xs font-medium text-gray-700 transition hover:border-[#08613f]"
                >
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Freshlya+Fusion+Cafe+Thana+Road+Savar+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-200 px-5 py-2.5 text-xs font-medium text-gray-700 transition hover:border-[#08613f]"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Order CTA */}
            <div className="flex min-h-[280px] flex-col items-center justify-center bg-gradient-to-br from-[#03291c] to-[#08613f] p-8 text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Hungry?
              </h2>

              <p className="mt-1 text-2xl font-bold text-[#ffcc00]">
                We're cooking.
              </p>

              <Link
                href="/menu"
                className="mt-6 rounded-full bg-[#ffcc00] px-7 py-3 text-sm font-bold text-black transition hover:bg-yellow-400"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
