import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      link: "/svgs/social/x.svg",
      icon: (
        <Image
          src="/svgs/social/twitter.svg"
          alt="Twitter"
          width={34}
          height={34}
        />
      ),
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile",
      icon: (
        <Image
          src="/svgs/social/linkedin.svg"
          alt="LinkedIn"
          width={34}
          height={34}
        />
      ),
    },
    {
      name: "Facebook",
      link: "https://facebook.com/yourprofile",
      icon: (
        <Image
          src="/svgs/social/facebook.svg"
          alt="GitHub"
          width={34}
          height={34}
        />
      ),
    },
  ];
  return (
    <div className=" w-full mx-auto border-t border-white/20 py-16">
      <footer className="backdrop-blur-2xl c/bg-gray-300/20 flex flex-col md:flex-row justify-between gap-6 w-[80%] mx-auto py-10">
        {/* LOGO */}
        <div className="flex-1 ">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
          <div className="flex gap-4 mt-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between ">
          {/* Menu */}
          <div className="flex-1">
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/features"}>Features</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/help"}>Help</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="flex-1">
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/terms"}>Terms of Service</Link>
              </li>
              <li>
                <Link href={"/cookies"}>Cookie Policy</Link>
              </li>
              <li>
                <Link href={"/disclaimer"}>Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* News letter */}
        <div className="flex-1 ">
          <form className="flex flex-col gap-2 w-2/3 mx-auto">
            <h3 className="font-bold mb-4">Newsletter</h3>
            <input
              type="email"
              placeholder="Your email"
              className="border border-white/20  p-2 rounded-xl"
            />
            <button
              type="submit"
              className="bg-white rounded-xl text-black px-2 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
