import Image from "next/image";

export default function TrustedBy() {
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
    <div className="flex flex-col lg:flex-row items-center gap-8 overflow-x-clip my-16">
      <span className="text-base lg:text-lg">
        <span className="whitespace-nowrap ">Trusted by</span>
        <br />
        leading companies:
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
                className="object-contain h-10 lg:h-14 max-w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
