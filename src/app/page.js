"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Image from "next/image";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Av from "../../public/pic.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

export default function Home() {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <>
      <div className="bg-black">
        <div className="">
          <head className="bg-black">
            <title className="font-burtons">
              Nimantha Nadeeraka Portofolio
            </title>
          </head>
        </div>

        <div className="">
          <main
            className={
              darkMode
                ? "bg-black py-20 p-2 md:p-5 lg:p-10"
                : "bg-white py-20 p-2 md:p-5 lg:p-10"
            }
          >
            <div className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between">
                <h1
                  className={
                    darkMode
                      ? "text-white  text-xl font-burtons md:text-2xl lg:text-4xl"
                      : " text-xl font-burtons md:text-2xl lg:text-4xl"
                  }
                >
                  Nimantha Nadeeraka
                </h1>
                <ul className="flex items-center">
                  <li>
                    <BsFillSunFill
                      onClick={() => setdarkMode(!darkMode)}
                      className={
                        darkMode
                          ? "text-white cursor-pointer md:text-2xl lg:text-4xl"
                          : " cursor-pointer md:text-2xl lg:text-4xl"
                      }
                    />
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 py-2 px-4 ml-8 rounded-sm md:text-2xl lg:text-2xl"
                    >
                      Resume
                    </a>{" "}
                  </li>
                </ul>
              </nav>
              <div className="text-center p-10">
                <h2 className="text-5xl text-teal-500 py-4">
                  Nimantha Nadeeraka
                </h2>
                <h3 className="text-4xl  py-4 ">Software Engineer</h3>
                <p className="mb-10">
                  <span className="text-4xl text-gray-500 text-md mb-6  mx-auto max-w-20 ">
                    “Simplicity is the ultimate sophistication”{" "}
                  </span>
                  <span className="text-1xl text-gray-500 ">
                    (Leonardo Da Vinci)
                  </span>
                </p>
              </div>



              <div className="relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden lg:w-96 h-96">
                <Image src={Av} alt="ass" layout="fill" objectFit="cover" />
              </div>

              <div className="text-center text-2x py-10 text-gray-500 text-md lg:text-2xl mx-w-xl mx-auto mt-10  ">
                <p>
                  The phrase "simplicity is the ultimate sophistication" implies
                  that achieving simplicity in design, thought, or expression is
                  a mark of true sophistication and mastery. It means distilling
                  complex ideas or systems into their most fundamental and
                  intuitive form, removing unnecessary elements while retaining
                  functionality and elegance. It suggests that sophistication
                  lies in the ability to simplify and communicate effectively,
                  emphasizing the value of simplicity as an elegant, clear, and
                  powerful goal to strive for in different aspects of life.
                </p>

                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 mt-5">
                  <BsTwitter />
                  <BsLinkedin />
                  <BsGithub />
                </div>
              </div>


              
            </div>
          </main>
        </div>





        
      </div>



    </>
  );
}
