const Footer = () => {
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
  return (
    <footer
      className="p-8 pt-10 mt-10 flex md:flex-col  gap-6 w-full items-center rounded-t-2xl relative"
      style={{ background: "#192140", color: "#F1F6F9" }}
    >
      <div className="flex flex-col md:flex-row  w-full max-w-6xl md:items-center justify-between gap-6 md:gap-0 ">
        <div className=" flex md:gap-x-80  w-70%">
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
        </div>

        {/* Right: Email */}
        <div>
          <div className="flex-1 flex flex-col items-center md:items-end justify-end"></div>

          <div className="mb-2 text-lg font-semibold">Join our Email List</div>
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
            className="text-xs mt-3 md:text-right text-center"
            style={{ color: "#ffe6b8" }}
          >
            Exclusive offers & latest news.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
