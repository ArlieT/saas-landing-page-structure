export default function HowItWorks() {
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
    <section className="my-16 lg:my-40">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        How it Works
      </h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {howItWorks.map((item) => {
          return (
            <div
              key={item.title}
              className="flex items-start p-8
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
