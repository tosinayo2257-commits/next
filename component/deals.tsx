import Image from "next/image";
import Raw from "../public/Raw.png";

import { IoCheckmarkOutline } from "react-icons/io5";

export default function Deals(): JSX.Element {
  return (
    <section className="px-5 sm:px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#362FF6] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-10 sm:pt-6 md:pt-10 lg:pt-10 sm:pl-8 md:pl-8 lg:pl-10">
          {/* Left Content */}
          <div className="text-white px-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Securely Manage Your Deals
            </h1>

            <p className="text-sm sm:text-base lg:text-lg mb-8 text-white max-w-lg mx-auto md:mx-0">
              From secure payments to clear agreements and fair resolutions,
              here’s how TrustPay empowers you.
            </p>

            <div className="space-y-5 mb-8">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="bg-white text-[#362FF6] rounded-lg w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <IoCheckmarkOutline size={18} />
                </div>

                <p className="text-sm sm:text-base">
                  <span className="font-semibold">
                    Create & Manage Agreements:
                  </span>{" "}
                  Define clear terms, set milestones, and invite partners.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="bg-white text-[#362FF6] rounded-lg w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <IoCheckmarkOutline size={18} />
                </div>

                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Secure Your Funds:</span>{" "}
                  Utilize our escrow service to keep payments safe.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="bg-white text-[#362FF6] rounded-lg w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <IoCheckmarkOutline size={18} />
                </div>

                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Resolve Issues Fairly:</span>{" "}
                  AI and human support ensure fair dispute resolution.
                </p>
              </div>
            </div>

            <button className="h-12 mb-5 w-50 bg-white text-[#362FF6] font-semibold rounded-xl hover:bg-gray-200">
              {" "}
              Get Started For Free{" "}
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end items-end">
            <Image
              src={Raw}
              alt="TrustPay dashboard preview"
              className="w-full max-w-[460px] md:max-w-[500px] lg:max-w-[520px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
