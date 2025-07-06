"use client";

import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen relative w-full flex flex-col bg-[url('/Home1.png')] bg-no-repeat bg-cover bg-center md:px-20 text-white font-display font-light">
      <Navbar />

      <div className="max-w-[90%] mx-auto bg-black/60 backdrop-blur-md rounded-lg px-5 py-6 rounded-[8px] flex flex-col items-center shadow-lg">
        <h1 className="text-[#be9858] text-4xl mb-4 text-center tracking-wide">Get In Touch</h1>
        <p className="text-white/90 mb-8 text-left leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just say hello,
          feel free to reach out. I’m here to bring your jewelry and watch visuals to life with passion and precision.
        </p>


        <div className="mt-[30%] text-left text-white/70 space-y-2 font-light text-sm self-start">
          <p>📩 <a href="mailto:behbiin@gmail.com" className="underline hover:text-[#be9858]">behbiin@gmail.com</a></p>
          <p>📞 <a href="tel:+989120687097" className="underline hover:text-[#be9858]">+98 912 068 7097</a></p>
          <p>
            📸 <a href="https://www.instagram.com/behbiin" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#be9858]">
              @behbiin
            </a>
          </p>
        </div>
      </div>


    </div>
  );
}