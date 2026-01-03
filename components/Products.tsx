const Products = () => {
  const PRODUCT_IMGS = [
    "https://i.pinimg.com/736x/53/ec/97/53ec97dc3af25ffff291c87c54e93136.jpg",
    "https://i.pinimg.com/736x/73/c9/6e/73c96e744d759cdb1ef5fc545a74ec27.jpg",
    "https://i.pinimg.com/736x/93/95/37/939537b35d4a03b624bea727997e827e.jpg",
    "https://i.pinimg.com/736x/9d/8f/a8/9d8fa897149c06248bd3fc7748094e1e.jpg",
    "https://i.pinimg.com/736x/b7/10/ec/b710ec9cfcc997cd39f26eb41a368cbc.jpg",
    "https://i.pinimg.com/736x/fb/cf/5e/fbcf5e443eb1865e486db57aeb538bfc.jpg",
    "https://i.pinimg.com/736x/f5/51/e6/f551e6899cd8e51e87b6fda51e681612.jpg",
    "https://i.pinimg.com/736x/0d/43/66/0d436630f3783b56fd6e169e92db892b.jpg",
    "https://i.pinimg.com/736x/b9/6f/fa/b96ffa8ea789f0ed5ddfd560a6a7e7b3.jpg",
    "https://i.pinimg.com/736x/08/11/df/0811dfcd6951969a18e4d80069203f51.jpg",
    "https://i.pinimg.com/736x/e2/80/0d/e2800d91f35ede72033cfd3511ebca17.jpg",
    "https://i.pinimg.com/736x/4e/14/1c/4e141c16ca7ef6d34485825f7ab5ba00.jpg",
  ];

  // Fix TypeScript for columns
  const columns: string[][] = [[], [], []];
  // Fill columns using for...of
  for (let i = 0; i < PRODUCT_IMGS.length; ++i) {
    columns[i % 3].push(PRODUCT_IMGS[i]);
  }
  return (
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
  );
};

export default Products;
