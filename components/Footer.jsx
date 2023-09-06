import Image from "next/image";
import Link from "next/link";
import instagram from "@assets/instagram.svg";
import facebook from "@assets/facebook.svg";
import twitter from "@assets/twitter.svg";
import linkedin from "@assets/linkedin.svg";
import phone from "@assets/phone.svg";
import location from "@assets/location.svg";
import mail from "@assets/mail.svg";
import logo from "@assets/logo.svg";

const Footer = () => {
  return (
    <div className="font">
      <div className="flex flex-col sm:flex-row justify-between md:px-16 md:py-16 px-8 py-12">
        <div className="flex flex-col justify-between items-center lg:items-baseline h-[250px]">
          <Image src={logo} alt="logo" className="w-[120px]" />

          <p className="font-semibold text-xl text-center lg:text-left">
            Elevating Industries, <br />
            Empowering Solutions.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center lg:items-baseline mt-12 sm:my-0 h-[250px] text-center lg:text-left">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <div className="lg:flex items-center text-md my-6 sm:my-0">
            <Image
              src={location}
              alt="location"
              className="w-6 mr-4 hidden lg:block"
            />

            <p className="font max-w-[290px]">
              76, Akanro Street, Off Oshodi Express Way, Ilasamaja, Mushin Lagos
            </p>
          </div>
          <div className="lg:flex text-md my-4 sm:my-0">
            <Image
              src={phone}
              alt="phone"
              className="w-6 mr-4 hidden lg:block"
            />

            <p className="font w-[290px]">+234-803-0512-882</p>
          </div>
          <div className="lg:flex text-md mt-4 sm:mt-0">
            <Image
              src={mail}
              alt="mail"
              className="w-6 h-auto mr-4 hidden lg:block"
            />
            <p className="font w-[290px]">info@ochexagon.com</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center lg:items-baseline font text-xl sm:mt-0 mt-12 h-[250px]">
          <h2 className="text-3xl font-semibold mb-3">Quick Links</h2>
          <Link href="/" className="hover:text-blue-800 my-2">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-800 my-2">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-800 my-2">
            Blog
          </Link>
          <Link href="contact" className="hover:text-blue-800 mt-2">
            Contact us
          </Link>
        </div>
      </div>
      <div className="background-primary text-secondary flex justify-between md:px-16 py-6 ">
        <div className="text-sm sm:text-base text-center md:text-left mx-auto md:mx-0">
          <p className="mb-3 sm:mb-0">
            Copyright &copy; 2023{" "}
            <span className="font-semibold">ochexagon</span>. All rights
            reserved{" "}
          </p>
          <p>
            this website was built by{" "}
            <Link
              href="https://github.com/RalphFred"
              target="_blank"
              className="font-bold cursor-pointer"
            >
              raphaelKwaghuter
            </Link>{" "}
            and{" "}
            <Link
              href="https://joshytheprogrammer.com/"
              target="_blank"
              className="font-bold cursor-pointer"
            >
              joshytheprogrammer
            </Link>
          </p>
        </div>
        <div className="hidden sm:flex">
          <Image
            src={instagram}
            alt="instagram"
            width={100}
            height={100}
            className="w-auto h-auto mx-2"
          />
          <Image
            src={twitter}
            alt="twitter"
            width={100}
            height={100}
            className="w-auto h-auto mx-2"
          />
          <Image
            src={facebook}
            alt="facebook"
            width={100}
            height={100}
            className="w-auto h-auto mx-2"
          />
          <Image
            src={linkedin}
            alt="linkedin"
            width={100}
            height={100}
            className="w-auto h-auto mx-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
