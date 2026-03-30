import Image from "next/image";
import React from "react";

import clip from "../public/Clip.png";
import apple from "../public/Apple.png";
import playstore from "../public/Playstore.png";
import globe from "../public/globe-02.png";
import vector from "../public/Vector-2.png";
import { RiArrowRightSLine } from "react-icons/ri";
import WhyTrustPay from "@/component/whytrustpay";
import Features from "@/component/feature";
import Deals from "@/component/deals";
import HowItWorks from "@/component/howitwork";
import Experiences from "@/component/experience";
import Frequently from "@/component/frequently";

const TrustPayLanding: React.FC = () => {
  return (
    <div>
      <div className="min-h-[600px] flex items-center text-black">
        <section className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-center md:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mt-5 md:mt-0">
                Build{" "}
                <span className="bg-[#DEDEF2] px-3 py-1 rounded-xl inline-flex items-center gap-2">
                  <Image
                    src={vector}
                    alt="vector"
                    width={40}
                    height={40}
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                  Trust
                </span>{" "}
                in <br className="hidden sm:block" />
                Every Transaction.
              </h1>

              <p className="mt-4 text-black/70 max-w-md text-sm sm:text-base lg:text-xl">
                Your all-in-one platform for digital agreements, milestone-based
                payments held in escrow, and swift dispute resolution. Focus on
                your work, we&apos;ll handle the trust.
              </p>

              <button className="mt-6 flex items-center gap-2 bg-[#362FF6] text-white px-6 py-3 rounded-xl hover:bg-[#DEDEF2] hover:text-[#362FF6] transition">
                Get Started Now
                <RiArrowRightSLine size={25} />
              </button>
            </div>

            <div className="mt-10 md:hidden">
              <Image
                src={clip}
                alt="app preview"
                width={347}
                height={400}
                className="mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-black/70">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Image src={apple} alt="Apple" width={28} height={28} />
                <div>
                  <p className="text-xs text-black">Download on the</p>
                  <p className="font-semibold text-black text-lg">App Store</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Image src={playstore} alt="Playstore" width={28} height={28} />
                <div>
                  <p className="text-xs text-black">Get it on</p>
                  <p className="font-semibold text-black text-lg">
                    Google Play
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Image src={globe} alt="Web" width={28} height={28} />
                <div>
                  <p className="text-xs text-black">Available on the</p>
                  <p className="font-semibold text-black text-lg">Web</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <Image
              src={clip}
              alt="app preview"
              width={480}
              height={500}
              className="w-[420px] lg:w-[480px]"
            />
          </div>
        </section>
      </div>
      <WhyTrustPay />
      <Features />
      <Deals />
      <HowItWorks />
      <Experiences />
      <Frequently />
    </div>
  );
};

export default TrustPayLanding;
