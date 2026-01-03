const Hero = () => {
  const HERO_IMG =
    "https://i.pinimg.com/736x/3c/5b/0d/3c5b0d5aca4c7a4692c038fb9b41a379.jpg";
  return (
    <div
      className=" relative overflow-hidden rounded-3xl shadow-2xl mx-4 md:mx-8 px-5 min-h-full my-14 "
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
                background: "linear-gradient(135deg, #ffba41 0%, #ffd700 100%)",
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
  );
};

export default Hero;
