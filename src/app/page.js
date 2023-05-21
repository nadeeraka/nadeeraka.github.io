"use client"; // This is a client component 👈🏽
import {useState} from 'react'
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
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";






export default function Home() {

  const [darkMode, setdarkMode] = useState(false)
  return (
    <div
     className={darkMode? 'dark':''}
    // className='bg-black'
    
    >
      <head>
        <title className="font-burtons">Nimantha Nadeeraka Portofolio</title>
      </head>

      <main className="bg-white py-20 p-2 md:p-5 lg:p-10">
        <div className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons md:text-2xl lg:text-4xl">
              Nimantha Nadeeraka
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={()=>setdarkMode(!darkMode)} className="cursor-pointer md:text-2xl lg:text-2xl" />
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
            <h2 className="text-5xl text-teal-500 py-4">Nimantha Nadeeraka</h2>
            <h3 className="text-4xl  py-4 ">Software Engineer</h3>
            <p className="text-2xl text-gray-500 text-md mb-6 ">
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
          <div className="relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden lg:w-96 h-96">
            <Image src={Av} layout="fill" objectFit="cover" />
          </div>

          {/* 
          
          section 2
          
          
          
          */}

          <div className="text-center text-2x py-10 text-gray-500 text-md lg:text-2xl mx-w-xl mx-auto mt-10  ">
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
          <div className="lg:flx gap-10">
            <div className=" bg-gray-100 shadow-lg shadow-indigo-500/40 ... rounded-xl p-10 py-10 my-10 mx-10 md:mx-20 lg:mx-40">
              <Image src={code} className="mx-auto" hight={100} width={100} />

              <h3 className="text-lg font-medium p-5 text-center">
                Clean Code with best practice
              </h3>
              <p className=" p-5 text-center text-gray-500">
                Throughout my venture as a software engineer, I have seen people
                code in various ways. Sometimes it’s easier to read and
                understand while others took a considerable time to go through.
             
              </p>
            </div>
            <div className=" bg-gray-100 shadow-lg shadow-indigo-500/40 ... rounded-xl p-10 my-10  mx-10 md:mx-20 lg:mx-40">
              <Image src={design} className="mx-auto" hight={100} width={100} />
              <h3 className="text-lg font-medium p-5 text-center">
                Elegant designs{" "}
              </h3>
              <p className=" p-5 text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                minus a sed adipisci cupiditate molestiae, in corporis facere
                dicta, impedit, excepturi dolores illo voluptatum quaerat
                
              </p>
            </div>
            <div className="bg-gray-100 shadow-lg shadow-indigo-500/40 ... rounded-xl p-10 my-10  mx-10 md:mx-20 lg:mx-40">
              <Image
                src={consulting}
                className="mx-auto"
                hight={100}
                width={100}
              />
              <h3 className="text-lg font-medium p-5 text-center">
                Consulting{" "}
              </h3>
              <p className=" p-5 text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                minus a sed adipisci cupiditate molestiae, in corporis facere
                
              </p>
            </div>
          </div>
        </div>

        {/* 



portfolio



*/}

        <div className="">
          <h2 className="text-4xl py-1 text-center">Portfolio</h2>

          <p className=" p-5 text-center text-gray-500 leading-8 mt-10 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            fugit libero labore quos totam laudantium vel culpa doloribus
            aliquam. Similique enim distinctio dolorem magni suscipit sed
            officia dolor, iusto veniam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae dolor, doloremque ipsa modi aliquam nam ex
            praesentium amet a eum dolorem, aut aperiam perferendis officia
            eius? Error inventore totam nisi.
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap gap-40">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} hight={'100%'} layout='responsive' />
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} hight={'100%'} layout='responsive'  />
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} hight={'100%'} layout='responsive' />
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} hight={'100%'} layout='responsive'  />
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} hight={'100%'} layout='responsive' />
            </div>

            <div className="basis-1/3 flex-1">
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} hight={'100%'} layout='responsive' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
