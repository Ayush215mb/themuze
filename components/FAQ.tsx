import { useState } from "react";
const Faq = () => {
  const FAQS = [
    {
      question: "What materials are used in the Gearun Classic Polo T‑Shirt?",
      answer:
        "Our Gearun Classic Polo T‑Shirts and Oversized Tees are crafted from a premium blend of 100% combed cotton for breathability, comfort, and durability. Each piece is soft on the skin and holds its shape wash after wash.",
    },
    {
      question:
        "How should I care for my Men's Oversized Anime Graphic T‑Shirt?",
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="w-full max-w-3xl mx-auto mb-16 manrope px-5">
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
};

export default Faq;
