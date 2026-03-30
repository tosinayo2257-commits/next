import Image from "next/image";
import Dark from "../public/Dark.png";
import Dark2 from "../public/Dark2.png";

export default function Features(): jSX.Element {
  return (
    <section className="py-16 px-8 md:px-10 relative">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Powerful Features, Seamless
          <br className="hidden md:block" />
          Experience
        </h1>

        <p className="text-[#000000B2] max-w-[768px] mx-auto text-sm md:text-base">
          TrustPay is equipped with robust tools designed to protect your
          interests and simplify every stage of your agreements.
        </p>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-10 gap-20">
        {/* Feature 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="rounded-3xl bg-[#362FF6] flex justify-center pt-8">
            <Image
              src={Dark2}
              alt="Dispute resolution dashboard"
              className="w-full max-w-[430px]"
            />
          </div>

          <div className="text-left md:text-right px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              Fair & Efficient Dispute Resolution
            </h2>

            <p className="text-[#000000B2] md:ml-auto max-w-[500px]">
              Disagreements can happen. Our streamlined dispute resolution
              process, powered by an initial AI review and backed by expert
              human support, ensures that issues are addressed quickly,
              transparently, and impartially. We're committed to finding fair
              solutions so you can move forward.
            </p>

            <button className="mt-8 bg-[#362FF6] hover:bg-[#DEDEF2] text-white hover:text-[#362FF6] font-medium px-6 py-3 rounded-xl transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="rounded-3xl bg-[#362FF6] flex justify-center md:order-2">
            <Image
              src={Dark}
              alt="Digital agreement dashboard"
              className="w-full max-w-[450px]"
            />
          </div>

          <div className="text-left px-4 md:px-0 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              Secure Digital Agreement Signatures
            </h2>

            <p className="text-[#000000B2] max-w-[500px]">
              Formalize your commitments with ease. Create, review, and
              digitally sign agreements directly on the TrustPay platform. Both
              parties receive a secure, verifiable copy, ensuring clarity and
              mutual understanding from the outset.
            </p>

            <button className="mt-8 bg-[#362FF6] hover:bg-[#DEDEF2] text-white hover:text-[#362FF6] font-medium px-6 py-3 rounded-xl transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
