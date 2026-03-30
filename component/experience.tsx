import Image, { StaticImageData } from "next/image";
import { VscQuote } from "react-icons/vsc";

import Vector1 from "../public/Vector1.png";
import Vector2 from "../public/Vector2.png";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Artemisia Udinse",
    role: "Marketing Specialist",
    image: Vector1,
    content:
      "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a deep understanding.",
  },
  {
    id: 2,
    name: "Artemisia Udinse",
    role: "Marketing Specialist",
    image: Vector2,
    content:
      "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a deep understanding.",
  },
];

export default function Experiences() {
  return (
    <section className="max-w-[1140px] mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-[#0D0D0D]">
          Experiences Shared by Our Users
        </h2>

        <p className="mt-4 text-[#000000B2] max-w-[700px] mx-auto text-sm sm:text-base">
          The team at TradeTrust provided unparalleled support throughout our
          project. Their expertise and dedication were evident from day one,
          helping us navigate complex challenges.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#DEDEF2] rounded-3xl p-6 md:p-8 shadow-sm"
          >
            <div className="text-[#362FF6] text-4xl md:text-5xl">
              <VscQuote />
            </div>

            <p className="mt-4 text-black text-sm sm:text-base leading-relaxed">
              {item.content}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-[#0D0D0D]">{item.name}</h4>
                <p className="text-sm text-[#808080]">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
