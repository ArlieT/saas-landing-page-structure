export default function BenefitsGrid() {
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
    <section className="w-full min-h-[500px] my-16 lg:my-40">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Benefits
      </h2>

      <div className="grid gap-6 mb-6 lg:grid-cols-[30%_30%_35%]">
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

      <div className="grid gap-6 lg:grid-cols-[35%_30%_30%]">
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
