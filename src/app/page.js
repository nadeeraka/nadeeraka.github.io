import Image from "next/image";
import { BsFillMoonStarsFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Av from '../../public/pic.png'

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
          <div className='text-center p-10'>
          <h2 className='text-5xl text-teal-500 py-4' >Nimantha Nadeeraka</h2>
          <h3 className='text-4xl  py-4'>Software Engineer</h3>
          <p className='text-2xl text-gray-500 text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptatum sed veritatis eos atque laudantium quaerat asperiores
            officiis, necessitatibus minima suscipit repudiandae deleniti ipsam
            non exercitationem delectus nam voluptatem ratione.
          </p>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <BsTwitter/>
            <BsLinkedin/>
            <BsGithub/>
            
          </div>
        </div>
        <div className='relative'>
          <Image src={Av}  className='mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-10'/>
        </div>
        </section>
      
      </main>
    </>
  );
}
