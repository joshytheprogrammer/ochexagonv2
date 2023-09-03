import Link from "next/link";
import Image from "next/image";
import heroImg from "@assets/heroImg.png";
import arrow from "@assets/arrow.svg";

const Hero = () => {
  return (
    <div className="lg:px-24 md:px-16 px-8 py-12 flex flex-row justify-between items-center">
      <div data-aos="fade-right">
        <div className="md:max-w-[800px] w-full flex flex-col">
          <h1 className="font xl:text-[56px] lg:text-[42px] md:text-[56px] text-[36px] text-center lg:text-left font-extrabold sm:leading-[72px] mb-12">
            Empowering Industries with Innovative Chemical Solutions
          </h1>

          <div className="flex justify-center lg:justify-start">
            <button className="contactBtn">
              <Link href="/contact" className="flex items-center">
                <span className="text font text-xl">Contact Us</span>
                <div className="icon-container">
                  <div className="icon icon--left">
                    <Image src={arrow} alt="arrow" />
                  </div>

                  <div className="icon icon--right">
                    <Image src={arrow} alt="arrow" />
                  </div>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <Image
            src={heroImg}
            alt="Man in suit"
            className="lg:w-[425px] lg:h-[auto] md:w-[400px] md:h-[380px] lg:mt-0 mt-8 w-[300px] h-[200px] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
