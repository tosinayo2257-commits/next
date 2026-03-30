import Image, { StaticImageData } from "next/image";

import step1 from "../public/iPhone-13.png";
import step2 from "../public/iPhone-14-mini.png";
import step3 from "../public/View.png";
import step4 from "../public/iPhone-2.png";

type StepType = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

const steps: StepType[] = [
  {
    id: 1,
    title: "Create Your Agreement",
    description:
      "Define the full scope of your project, service, or trade. Set clear terms, outline specific milestones with deliverables and due dates, and establish payment amounts. Invite your counterparty to review and digitally sign. You can even use our AI Assistant to help draft a comprehensive agreement quickly!",
    image: step1,
  },
  {
    id: 2,
    title: "Fund The Escrow",
    description:
      "Once both parties sign, the client securely deposits the agreed funds for the first milestone (or the entire project) into TrustPay's protected escrow account. Both parties receive immediate confirmation, so work can begin with complete peace of mind.",
    image: step2,
  },
  {
    id: 3,
    title: "Track Milestones",
    description:
      "Monitor the progress of each milestone through your dashboard. Communicate directly with your counterparty, share necessary files, and stay updated on timelines. Service providers can mark milestones as complete when the work is done.",
    image: step3,
  },
  {
    id: 4,
    title: "Approve & Get Paid",
    description:
      "Clients review submitted work for each milestone. Upon approval, funds for that milestone are instantly released from escrow to the service provider. If any disagreements arise, our fair and efficient dispute resolution process (with AI and human support) is there to help find a quick and impartial solution.",
    image: step4,
  },
];

type StepProps = {
  step: StepType;
  reverse?: boolean;
};

const Step: React.FC<StepProps> = ({ step, reverse }) => {
  return (
    <div className="relative grid md:grid-cols-2 items-center gap-8 py-4">
      {/* Center line */}
      <div className="hidden md:block absolute left-1/2 top-2 border border-gray-200 h-80" />

      {/* Step number */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#070541] text-white w-10 h-10 rounded-full hidden md:flex items-center justify-center font-semibold shadow-lg">
        {step.id}
      </div>

      {/* Image */}
      <div className={`${reverse ? "md:order-2" : ""} flex justify-center`}>
        <div className="rounded-3xl bg-[#362FF6] flex justify-center h-75 w-[394px]">
          <Image src={step.image} alt={step.title} className=" mb-10 " />
        </div>
      </div>

      {/* Content */}
      <div className="text-left flex flex-col justify-center md:pl-[72px] w-full max-w-[420px] mx-auto md:mx-0">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
          {step.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

        <button
          type="button"
          className="bg-[#362FF6] text-white w-full max-w-[140px] rounded-xl shadow-md transition hover:bg-gray-900"
        >
          {" "}
          Get Started{" "}
        </button>
      </div>
    </div>
  );
};

export default function HowItWorks(): JSX.Element {
  return (
    <section className="bg-white py-10 px-6 md:px-16 md:py-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          How It Works
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Our process makes secure agreements and payments transparent and easy
          for everyone involved.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {steps.map((step, index) => (
          <Step key={step.id} step={step} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
