import Image from "next/image";
import Link from "next/link";
import Faqs from "./faqs";
import TrustedBy from "./trusted-by";
import BenefitsGrid from "./benefits";
import HowItWorks from "./how-it-work";
import Pricing from "./pricing";

const HeroSection = () => {
  const activeUsers = [
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Carter",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Emily Stone",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Michael Lee",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Sophia Kim",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "David Garcia",
    },
  ];

  return (
    <section className="my-10 lg:my-40 w-[95%] md:w-[70%] max-w-[1234px] mx-auto pt-10 text-sm md:text-base">
      <div className="grid grid-cols-1 w-full">
        <div className="border-guide relative cross-top-right w-full p-5">
          <div className="flex flex-col lg:flex-row w-ful">
            <div className="w-full mx-auto">
              <div className="flex items-center gap-x-4 py-4">
                <div className="flex">
                  {activeUsers.map((user, i) => (
                    <div
                      key={user.name + i}
                      className={`rounded-full hover:scale-105 transition-transform overflow-hidden border-2 border-white ${
                        i !== 0 ? "-ml-3 md:-ml-5" : ""
                      }`}
                    >
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        height={40}
                        width={40}
                        className="size-[24px] lg:size-[40px] object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-sm">1,200+ active users</span>
                </div>
              </div>

              <div>
                <h1 className="mt-8 mb-4 text-center text-4xl lg:text-4xl font-bold">
                  Supercharge Your Workflow with{" "}
                  <span className="text-indigo-500">My SaaS</span>
                </h1>

                <p className="text-pretty text-center lg:text-left lg:text-xl">
                  An all-in-one platform designed to help you streamline tasks,
                  save time, and grow your business without the hassle.
                </p>

                <div className="flex gap-x-4 justify-center my-12">
                  <Link
                    href="/"
                    className="btn-primary bg-hero hover:opacity-90"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-3 rounded-xl font-medium border border-gray-300 hover:bg-gray-100 hover:text-black transition
                "
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end ">
              <Image
                src="/images/hero.png"
                alt="hero-image"
                width={500}
                height={500}
                className="max-h-[500px] object-cover object-top rounded-xl border c/border-gray-800 overflow-hidden  "
              />
            </div>
          </div>
        </div>

        <div className="border-guide relative cross-top-right p-5">
          <TrustedBy />
        </div>

        <div className="border-guide relative cross-top-left w-full p-5">
          <BenefitsGrid />
        </div>

        <div className="border-guide relative cross-top-left w-full p-5">
          <HowItWorks />
        </div>
      </div>
      <div className="border-guide relative cross-top-right w-full p-5">
        <Pricing />
      </div>
      <div className="border-guide relative cross-top-right w-full p-5">
        <Faqs />
      </div>
    </section>
  );
};

export default HeroSection;
