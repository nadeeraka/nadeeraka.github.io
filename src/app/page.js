import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs";

export default function Home() {
  return (
    <>
      <head>
        <title>Nimantha Nadeeraka Portofolio</title>
      </head>

      <main className="bg-white py-10">
        <section className="min-h-screen">

         
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Nimantha Nadeeraka</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer"/></li>
              <li> <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 py-2 px-4 ml-8 rounded-sm" >Resume</a> </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}
