import Image from "next/image";
import Link from "next/link";
import Faqs from "./faqs";

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
    <section className="my-40 w-[95%] md:w-[70%] max-w-[1234px] mx-auto pt-10 text-sm md:text-base">
      <div className="grid grid-cols-1 w-full">
        <div className="border-guide relative cross-top-right w-full p-5">
          <div className="flex w-ful">
            <div className="w-full mx-auto">
              <div className="flex items-center gap-x-4 py-4">
                <div className="flex">
                  {activeUsers.map((user, i) => (
                    <div
                      key={user.name + i}
                      className={`rounded-full hover:scale-105 transition-transform overflow-hidden w-10 h-10 border-2 border-white ${
                        i !== 0 ? "-ml-5" : ""
                      }`}
                    >
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        height={40}
                        width={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-sm">1,200+ active users</span>
                </div>
              </div>

              <div>
                <h1 className="mt-8 mb-4 text-4xl font-bold">
                  Supercharge Your Workflow with{" "}
                  <span className="text-indigo-500">My SaaS</span>
                </h1>

                <p className="text-xl">
                  An all-in-one platform designed to help you streamline tasks,
                  save time, and grow your business without the hassle.
                </p>

                <div className="flex gap-x-4 my-12">
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

function TrustedBy() {
  const trustedBy = [
    { logo: "/svgs/logoipsum-1.svg", name: "logoipsum-1" },
    { logo: "/svgs/logoipsum-2.svg", name: "logoipsum-2" },
    { logo: "/svgs/logoipsum-3.svg", name: "logoipsum-3" },
    { logo: "/svgs/logoipsum-4.svg", name: "logoipsum-4" },
    { logo: "/svgs/logoipsum-5.svg", name: "logoipsum-5" },
    { logo: "/svgs/logoipsum-6.svg", name: "logoipsum-6" },
    { logo: "/svgs/logoipsum-7.svg", name: "logoipsum-7" },
    { logo: "/svgs/logoipsum-8.svg", name: "logoipsum-8" },
    { logo: "/svgs/logoipsum-9.svg", name: "logoipsum-9" },
    { logo: "/svgs/logoipsum-10.svg", name: "logoipsum-10" },
    { logo: "/svgs/logoipsum-11.svg", name: "logoipsum-11" },
    { logo: "/svgs/logoipsum-12.svg", name: "logoipsum-12" },
    { logo: "/svgs/logoipsum-13.svg", name: "logoipsum-13" },
    { logo: "/svgs/logoipsum-14.svg", name: "logoipsum-14" },
  ];

  return (
    <div className="flex items-center gap-x-8 my-16">
      <span className="text-lg ">
        <span className="whitespace-nowrap ">Trusted by</span>
        <br />
        employees at:
      </span>

      <div className="marquee">
        <div className="marquee__track">
          {[...trustedBy, ...trustedBy].map((trusted, i) => (
            <div key={trusted.name + i} className="flex items-center py-4">
              <Image
                src={trusted.logo}
                alt={trusted.name}
                height={120}
                width={60}
                className="object-contain h-14 max-w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BenefitsGrid() {
  const benefits = [
    {
      title: "Ease of Use",
      description: "Simple and intuitive so you can get started right away.",
      icon: "😊",
    },
    {
      title: "Time Saving",
      description:
        "Automates repetitive tasks so you can focus on what matters.",
      icon: "⏱️",
    },
    {
      title: "Helpful Support",
      description: "We’re here whenever you need a hand.",
      icon: "🤝",
    },
    {
      title: "Delightful Experience",
      description: "Clean, fast, and designed with you in mind.",
      icon: "✨",
    },
    {
      title: "Scalable",
      description: "Grows with your business without added complexity.",
      icon: "📈",
    },
    {
      title: "Secure",
      description: "Your data is safe with enterprise-grade security.",
      icon: "🔒",
    },
  ];

  return (
    <section className="w-full min-h-[500px] my-40">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Benefits
      </h2>

      <div className="grid gap-6 mb-6 grid-cols-[30%_30%_35%]">
        {benefits.slice(0, 3).map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md p-6 flex flex-col"
          >
            <div className="text-3xl mb-3">{benefit.icon}</div>
            <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
            <p className="text-sm opacity-80">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-[35%_30%_30%]">
        {benefits.slice(3, 6).map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md p-6 flex flex-col"
          >
            <div className="text-3xl mb-3">{benefit.icon}</div>
            <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
            <p className="text-sm opacity-80">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const howItWorks = [
    {
      title: "Integrate Tools",
      description:
        "Connect your favorite apps and services for a seamless experience.",
      icon: "🔗",
    },
    {
      title: "Collaborate with Team",
      description: "Invite team members and start collaborating on projects.",
      icon: "👥",
    },
    {
      title: "Track Progress",
      description:
        "Monitor your tasks and projects with our intuitive dashboard.",
      icon: "📊",
    },
  ];

  return (
    <section className="my-40">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        How it Works
      </h2>
      <div className="flex gap-6">
        {howItWorks.map((item) => {
          return (
            <div
              key={item.title}
              className="flex items-start p-8 mb-6
          rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md
          "
            >
              <div className="text-3xl mr-4">{item.icon}</div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Pricing() {
  const pricing = [
    {
      title: "Basic",
      price: "$10/month",
      cta: {
        text: "Get Started",
        link: "/pricing",
        "bg-color": "bg-white",
        "text-color": "text-gray-900",
      },
      features: [
        "Access to core features",
        "Email support",
        "Single user account",
        "Up to 5 projects",
        "Basic analytics dashboard",
      ],
      height: "90%",
    },
    {
      title: "Pro",
      tag: "Most Popular",
      price: "$20/month",
      cta: {
        text: "Get Started",
        link: "/pricing",
        "bg-color": "bg-hero ",
        "text-color": "text-white",
      },
      features: [
        "Everything in Basic",
        "Priority email + chat support",
        "Unlimited projects",
        "Advanced analytics & reporting",
        "Custom branding options",
        "Team collaboration (up to 5 members)",
      ],
      height: "100%",
    },
    {
      title: "Enterprise",
      price: "Contact us",
      cta: {
        text: "Get Started",
        link: "/pricing",
        "bg-color": "bg-white",
        "text-color": "text-gray-900",
      },
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations & API access",
        "SSO & advanced security controls",
        "Unlimited team members",
        "Service-level agreement (SLA)",
        "24/7 phone support",
      ],
      height: "90%",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl md:text-3xl mb-10 text-center font-semibold">
        Pricing
      </h2>
      <div className="h-[70svh] flex gap-6">
        {pricing.map((plan) => (
          <div
            key={plan.title}
            style={{ height: plan.height }}
            className="w-full flex flex-col my-auto inset-0 rounded-2xl p-8 backdrop-blur-md bg-white/10 border border-white/20 shadow-md"
          >
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">{plan.title}</h3>
                {plan.tag && (
                  <div className="">
                    <span className="bg-white text-sm text-black p-2 rounded-lg">
                      {plan.tag}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-4xl my-6">{plan.price}</p>
              <ul className="h-fit list-disc ml-5 mt-12 space-y-2 text-sm md:text-base  text-shadow-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature} className="opacity-80 mb-4">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={plan.cta.link}
              className={`self-end rounded-lg px-4 py-4 w-full ${plan.cta["bg-color"]} ${plan.cta["text-color"] || "text-black"} text-center`}
            >
              {plan.cta.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
