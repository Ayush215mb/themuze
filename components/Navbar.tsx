import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  const NAV_LINKS = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];
  return (
    <nav
      className="flex items-center justify-between px-8 py-4 sticky top-0 z-30"
      style={{ background: "#263159", boxShadow: "0 2px 16px #667ba59a" }}
    >
      <div className="flex items-center gap-3">
        <img
          src={
            "https://i.pinimg.com/736x/2c/40/82/2c40827a7a9556eedcb44fd934fb0bb4.jpg"
          }
          alt="brand-logo"
          className="h-10 mr-2 drop-shadow-md"
        />
        <span
          className="text-2xl tracking-tight font-bold hidden md:block"
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
          className="px-3 py-1.5 rounded-l-md border-none outline-none focus:outline-1 focus:outline-gold-400 hidden md:block"
          style={{ background: "#ebedee" }}
        />
        <button
          className="px-3 py-1.5 font-semibold rounded-r-md transition shadow hidden md:block"
          style={{ background: "#ffba41", color: "#263159" }}
        >
          Search
        </button>
        <button
          className="ml-4 md:px-4 md:py-1.5 px-2 py-1 rounded-md font-semibold transition shadow-lg"
          style={{ background: "#ffe8cf", color: "#263159" }}
        >
          Sign up | Login
        </button>
        <a href="https://github.com/Ayush215mb/themuze" target="_blank">
          <button className=" text-white text-3xl cursor-pointer">
            <FaGithub />
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
