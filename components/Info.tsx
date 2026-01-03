const Info = () => {
  return (
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
  );
};

export default Info;
