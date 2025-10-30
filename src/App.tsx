import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", url: "/" },
  { label: "Shop", url: "/shop" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

const FOOTER_LINKS_ADV = [
  { text: "Contact Information", url: "/contact" },
  { text: "Privacy Policy", url: "/privacy-policy" },
  { text: "Refund Policy", url: "/refund-policy" },
  { text: "Shipping Policy", url: "/shipping-policy" },
  { text: "Terms of Service", url: "/terms" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <rect
          width="20"
          height="20"
          x="2"
          y="2"
          rx="6"
          stroke="#ffba41"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="#ffba41" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="#ffba41" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <rect
          width="20"
          height="20"
          x="2"
          y="2"
          rx="6"
          stroke="#ffba41"
          strokeWidth="2"
        />
        <path
          d="M15 12.5h-2.2v6H10v-6H8.5V11H10v-1c0-1 .4-2.5 2.5-2.5H15v2h-1.2c-.6 0-.8.3-.8.8V11h2l-.2 1.5z"
          fill="#ffba41"
        />
      </svg>
    ),
  },
];

const HERO_IMG = "/src/assets/Hero.jpg";
const PRODUCT_IMGS = [
  "/src/assets/image1.webp",
  "/src/assets/image2.webp",
  "/src/assets/image3.webp",
  "/src/assets/image4.webp",
  "/src/assets/image5.webp",
  "/src/assets/image6.webp",
  "/src/assets/image7.webp",
  "/src/assets/image8.avif",
  "/src/assets/image9.webp",
  "/src/assets/image10.avif",
  "/src/assets/image11.jpg",
  "/src/assets/image12.jpg",
];

const FAQS = [
  {
    question: "What materials are used in the Gearun Classic Polo T‑Shirt?",
    answer:
      "Our Gearun Classic Polo T‑Shirts and Oversized Tees are crafted from a premium blend of 100% combed cotton for breathability, comfort, and durability. Each piece is soft on the skin and holds its shape wash after wash.",
  },
  {
    question: "How should I care for my Men's Oversized Anime Graphic T‑Shirt?",
    answer:
      "We recommend machine wash cold and gentle cycle. Do not bleach. Tumble dry low or hang dry. For graphic tees, turn inside out before washing to preserve prints.",
  },
  {
    question:
      "Are the sizes in the Men’s Oversized Anime Graphic T‑Shirt Collection true to fit?",
    answer:
      "Yes! Our sizes are designed to be relaxed and true to fit. For an extra-loose fit, size up. Please refer to our detailed size chart on each product page.",
  },
  {
    question:
      "Can I return or exchange my Gearun Classic Polo T‑Shirt if it doesn't fit?",
    answer:
      "Absolutely. We stand by our 7 Day Return Policy on all products—just keep tags attached and contact us for hassle-free returns or exchanges.",
  },
  {
    question:
      "What makes the Gearun Classic Polo T‑Shirt a good choice for men?",
    answer:
      "Gearun polos blend classic style and modern comfort. Featuring premium fabric, the latest fit trends, and anime-inspired graphics, they're a statement of personality as well as quality.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="w-full max-w-3xl mx-auto mb-16 manrope">
      <h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        style={{ color: "#263159" }}
      >
        Questions? We've Got You Covered
      </h2>
      {FAQS.map((faq, idx) => (
        <div
          key={faq.question}
          className="mb-4 rounded-lg overflow-hidden shadow"
        >
          <button
            className="w-full flex justify-between items-center text-left px-6 py-4 bg-[#f8eecb] hover:bg-[#ffe8cf] transition text-lg font-semibold focus:outline-none"
            style={{ color: "#263159" }}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faqAnswer${idx}`}
          >
            {faq.question}
            <span
              className={`transition-transform ml-2 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {openIndex === idx && (
            <div
              className="px-6 py-4 bg-[#f7f7fb] border-t border-yellow-200 text-base"
              id={`faqAnswer${idx}`}
              style={{ color: "#484842" }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

function App() {
  // Fix TypeScript for columns
  const columns: string[][] = [[], [], []];
  // Fill columns using for...of
  for (let i = 0; i < PRODUCT_IMGS.length; ++i) {
    columns[i % 3].push(PRODUCT_IMGS[i]);
  }

  return (
    <div
      className="min-h-screen flex flex-col justify-between inter "
      style={{
        background: "linear-gradient(120deg, #f4f7fb 70%, #e4dfd4 100%)",
      }}
    >
      {/* Navbar */}
      <nav
        className="flex items-center justify-between px-8 py-4 sticky top-0 z-30"
        style={{ background: "#263159", boxShadow: "0 2px 16px #667ba59a" }}
      >
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/logo.webp"
            alt="brand-logo"
            className="h-10 mr-2 drop-shadow-md"
          />
          <span
            className="text-2xl tracking-tight font-bold"
            style={{ color: "#F1F6F9", letterSpacing: "0.07em" }}
          >
            themuze
          </span>
        </div>
        <div className="hidden md:flex gap-10 ml-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.url}
              className="font-medium transition"
              style={{ color: "#F1F6F9" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 rounded-l-md border-none outline-none focus:outline-1 focus:outline-gold-400"
            style={{ background: "#ebedee" }}
          />
          <button
            className="px-3 py-1.5 font-semibold rounded-r-md transition shadow"
            style={{ background: "#ffba41", color: "#263159" }}
          >
            Search
          </button>
          <button
            className="ml-4 px-4 py-1.5 rounded-md font-semibold transition shadow-lg"
            style={{ background: "#ffe8cf", color: "#263159" }}
          >
            Sign up / Login
          </button>
        </div>
      </nav>

      {/* Hero Section
      <div
        className="mt-4 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-36 py-10 rounded-2xl shadow-xl mx-4"
        style={{ background: "linear-gradient(120deg, #fef8ee, #dde3f9 100%)" }}
      >
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h1
            className="text-5xl font-extrabold leading-tight mb-4"
            style={{ color: "#263159" }}
          >
            Coolest Oversized Anime & Polo Tees for Men
          </h1>
          <p className="text-lg max-w-lg mb-5" style={{ color: "#6a691f" }}>
            Stand out: premium oversized anime tees & polos!
            <br /> Shop the trendiest, top-quality men's clothing brand.
          </p>
          <button
            className="mt-2 px-7 py-3 font-bold rounded-lg shadow-lg hover:scale-105 transition"
            style={{ background: "#ffba41", color: "#263159" }}
          >
            Shop Now
          </button>
        </div>
        <div className="relative w-full max-w-md h-72">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#ede2cf77] rounded-2xl z-10" />
          <img
            src={HERO_IMG}
            alt="Men's fashion hero"
            className="w-full h-72 object-contain rounded-2xl shadow-lg border-2 border-gold-100 relative z-20 bg-white"
            onError={(e) => (e.currentTarget.src = "/src/assets/react.svg")}
          />
        </div>
      </div> */}
      {/* Hero Section */}
      <div
        className=" relative overflow-hidden rounded-3xl shadow-2xl mx-4 md:mx-8 min-h-full my-14 "
        style={{
          background:
            "linear-gradient(135deg, #192140 0%, #263159 50%, #2a3d6f 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffba41] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffe8cf] opacity-10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 lg:px-20 py-16 md:py-20">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6 md:pr-8">
            <div className="inline-block px-4 py-2 rounded-full bg-[#ffba41] bg-opacity-20 backdrop-blur-sm mb-2">
              <span className="text-[#ffba41] font-bold text-sm tracking-wider">
                NEW COLLECTION 2025
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
              style={{ color: "#F1F6F9" }}
            >
              Wear Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffba41] to-[#ffe8cf]">
                Vibe
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-xl text-[#e0e7ed] leading-relaxed">
              Oversized anime tees & premium polos that speak your language.
              <span className="block mt-2 font-semibold text-[#ffba41]">
                Be bold. Be unique. Be you.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button
                className="px-8 py-4 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #ffba41 0%, #ffd700 100%)",
                  color: "#263159",
                }}
              >
                Shop Collection →
              </button>
              <button
                className="px-8 py-4 font-bold rounded-xl border-2 hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-lg"
                style={{ borderColor: "#ffba41", color: "#ffba41" }}
              >
                View Lookbook
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 justify-center md:justify-start">
              <div>
                <div className="text-3xl font-bold text-[#ffba41]">10K+</div>
                <div className="text-sm text-[#b8c5d6]">Happy Customers</div>
              </div>
              <div className="w-px bg-[#ffba41] bg-opacity-30"></div>
              <div>
                <div className="text-3xl font-bold text-[#ffba41]">500+</div>
                <div className="text-sm text-[#b8c5d6]">Unique Designs</div>
              </div>
              <div className="w-px bg-[#ffba41] bg-opacity-30"></div>
              <div>
                <div className="text-3xl font-bold text-[#ffba41]">4.9★</div>
                <div className="text-sm text-[#b8c5d6]">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative max-w-lg w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffba41] to-[#ffe8cf] opacity-20 rounded-3xl blur-2xl transform rotate-6"></div>
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Men's fashion hero"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-[#ffba41] border-opacity-30 transform hover:scale-105 transition-transform duration-500"
                onError={(e) => (e.currentTarget.src = "/src/assets/react.svg")}
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 transform hover:rotate-3 transition-transform">
                <div className="text-2xl font-black text-[#263159]">₹799</div>
                <div className="text-xs text-gray-600">Starting from</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="my-12 flex flex-col items-center px-4 w-full">
        <h2 className="text-3xl font-bold mb-8" style={{ color: "#263159" }}>
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {columns.map((colImgs, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-8">
              {colImgs.map((img) => (
                <div
                  key={img}
                  className="p-4 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center group border border-blue-100 bg-white/90 backdrop-blur"
                >
                  <img
                    src={img}
                    alt={`Oversized Tshirt Product ${
                      colIdx + 1 + colImgs.indexOf(img) * 3
                    }`}
                    className="h-56 w-full object-contain rounded mb-4 border border-slate-100 group-hover:scale-105 transition bg-linear-to-br from-yellow-50 to-[#e9ece2]"
                    onError={(e) =>
                      (e.currentTarget.src = "/src/assets/react.svg")
                    }
                  />
                  <div
                    className="font-semibold text-lg mb-1 text-center"
                    style={{ color: "#263159" }}
                  >
                    Oversized Tee #{colIdx + 1 + colImgs.indexOf(img) * 3}
                  </div>
                  <div
                    className="font-bold text-base mb-1"
                    style={{ color: "#ffba41" }}
                  >
                    ₹799
                  </div>
                  <button
                    className="mt-1 px-4 py-1.5 rounded shadow hover:scale-105 transition font-semibold"
                    style={{ background: "#263159", color: "#fffbe9" }}
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* Info Bar - Premium Benefits */}
      <div
        className="rounded-xl shadow border-0 py-10 px-6 mb-10 gap-10 flex flex-col lora font-bold"
        style={{
          background: "linear-gradient(90deg, #ffe7b9 0%, #ffba41 100%)",
        }}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10  md:px-0 ">
          <span className="text-base md:text-lg font-semibold text-[#2c2342] tracking-wide text-center">
            🚚 Free Shipping on ALL Orders
          </span>
          <span className="text-base md:text-lg font-semibold text-[#2c2342] tracking-wide text-center">
            ⏱ Orders Processed Within <b>24hrs</b>
          </span>
          <span className="text-base md:text-lg font-semibold text-[#2c2342] tracking-wide text-center">
            😊 24/7 Friendly Customer Support
          </span>
          <span className="text-base md:text-lg font-semibold text-[#2c2342] tracking-wide text-center">
            🔒 100% Safe & Secure Checkout
          </span>
        </div>
        <div className="text-center">
          <span
            className=" text-xl font- md:text-lg font-extrabold  tracking-wide text-center"
            style={{ color: "#263159" }}
          >
            30 DAYS RETURN POLICY
          </span>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer
        className="p-8 pt-10 mt-10 flex flex-col gap-6 w-full items-center rounded-t-2xl relative"
        style={{ background: "#192140", color: "#F1F6F9" }}
      >
        <div className="flex flex-col md:flex-row w-full max-w-6xl md:items-start justify-between gap-6 md:gap-0">
          {/* Left: Brand + Links */}
          <div className="flex-1 flex flex-col items-center md:items-start md:text-left">
            <span className="font-extrabold text-2xl tracking-tight mb-3">
              themuze
            </span>
            <div className="flex flex-col gap-1">
              {FOOTER_LINKS_ADV.map((l) => (
                <a
                  key={l.text}
                  href={l.url}
                  className="text-sm underline text-[#ffe6b8] hover:text-[#ffba41] transition"
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>

          {/* Center: Socials */}
          <div className="flex-1 flex flex-col items-center justify-center md:items-center md:justify-center">
            <div className="flex flex-row gap-6 mb-3 mt-2 md:mt-8">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="hover:scale-110 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Email */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-end">
            <div className="mb-2 text-lg font-semibold">
              Join our Email List
            </div>
            <form
              className="flex gap-2 w-full max-w-xs"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for joining our email list!");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l outline-none border-none text-gray-700 bg-white"
                style={{ color: "#263159", border: "none" }}
                required
              />
              <button
                className="px-5 py-2 rounded-r font-bold hover:scale-105 transition"
                style={{ background: "#ffba41", color: "#263159" }}
              >
                Join
              </button>
            </form>
            <div
              className="text-xs mt-3 text-right"
              style={{ color: "#ffe6b8" }}
            >
              Exclusive offers & latest news.
            </div>
          </div>
        </div>
        <div className="pt-10 pb-1 flex justify-center w-full">
          <div className="font-semibold text-[#ffe6b8] text-base text-center w-full">
            themuze.in 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
