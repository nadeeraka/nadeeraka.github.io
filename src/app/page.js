import Image from "next/image";
import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Av from "../../public/pic.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";

export default function Home() {
  return (
    <>
      <head>
        <title className="font-burtons">Nimantha Nadeeraka Portofolio</title>
      </head>

      <main className="bg-white py-10">
        <div className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Nimantha Nadeeraka</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer" />
              </li>
              <li>
                {" "}
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 py-2 px-4 ml-8 rounded-sm"
                >
                  Resume
                </a>{" "}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-500 py-4">Nimantha Nadeeraka</h2>
            <h3 className="text-4xl  py-4">Software Engineer</h3>
            <p className="text-2xl text-gray-500 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptatum sed veritatis eos atque laudantium quaerat asperiores
              officiis, necessitatibus minima suscipit repudiandae deleniti
              ipsam non exercitationem delectus nam voluptatem ratione.
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <BsTwitter />
              <BsLinkedin />
              <BsGithub />
            </div>
          </div>
          <div className="relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
            <Image src={Av} layout="fill" objectFit="cover" />
          </div>

          {/* 
          
          section 2
          
          
          
          */}

          <div className="text-center text-2x py-10 text-gray-500 text-md">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium dicta incidunt quo debitis id! Iure nemo tempore
              cumque! Asperiores esse reiciendis repellat ad perspiciatis
              mollitia pariatur minus voluptatem soluta eligendi.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusantium quos, et ex maiores aperiam ab temporibus porro
              quisquam tempore cupiditate magni totam sint provident possimus,
              rem cum quae nemo.
            </p>
          </div>
          {/* 
          
          
          card section
          
          
          
          */}

          <div className=" bg-gray-100 shadow-lg shadow-indigo-500/40 ... rounded-xl p-10 py-10 my-10 ">
            <Image src={code} className="mx-auto" hight={100} width={100} />

            <h3 className="text-lg font-medium p-5 text-center">
              Clean Code with best practice
            </h3>
            <p className=" p-5 text-center text-gray-500">
              Throughout my venture as a software engineer, I have seen people
              code in various ways. Sometimes it’s easier to read and understand
              while others took a considerable time to go through. When we code,
              we write it for others to read later on, not for ourselves. Even
              if a person is working on an individual project it’s crucial that
              your code is readable to another developer. I will discuss about
              some practices I realised that will help us code clean and better,
              no matter what programming language you use
            </p>
          </div>
          <div className=" bg-gray-100 shadow-lg shadow-indigo-500/40 ... rounded-xl p-10 my-10 ">
            <Image src={design} className="mx-auto" hight={100} width={100} />
            <h3 className="text-lg font-medium p-5 text-center">
              Elegant designs{" "}
            </h3>
            <p className=" p-5 text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut minus
              a sed adipisci cupiditate molestiae, in corporis facere dicta,
              impedit, excepturi dolores illo voluptatum quaerat repellat rerum?
              Enim, deserunt tempora.
            </p>
          </div>
          <div className="bg-gray-100 shadow-lg shadow-indigo-500/40 ... rounded-xl p-10 my-10">
            <Image
              src={consulting}
             
              className="mx-auto"
              hight={100}
              width={100}
            />
            <h3 className="text-lg font-medium p-5 text-center">Consulting </h3>
            <p className=" p-5 text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut minus
              a sed adipisci cupiditate molestiae, in corporis facere dicta,
              impedit, excepturi dolores illo voluptatum quaerat repellat rerum?
              Enim, deserunt tempora.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
