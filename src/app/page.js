import Image from "next/image";
import { BsFillMoonStarsFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <head>
        <title className="font-burtons">Nimantha Nadeeraka Portofolio</title>
      </head>

      <main className="bg-white py-10">
        <section className="min-h-screen">
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
          <div>
          <h2>Nimantha Nadeeraka</h2>
          <h3>Software Engineer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptatum sed veritatis eos atque laudantium quaerat asperiores
            officiis, necessitatibus minima suscipit repudiandae deleniti ipsam
            non exercitationem delectus nam voluptatem ratione.
          </p>

          <div>
            <BsTwitter/>
            <BsLinkedin/>
            <BsGithub/>
            
          </div>
        </div>
        </section>
      
      </main>
    </>
  );
}
