import Link from "next/link";

export default function Pricing() {
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
    <section className="my-16 lg:my-40">
      <h2 className="text-2xl md:text-3xl mb-10 text-center font-semibold">
        Pricing
      </h2>
      <div className="lg:h-[70svh] flex flex-col lg:flex-row gap-6">
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
