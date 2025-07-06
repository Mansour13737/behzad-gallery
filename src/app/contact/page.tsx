"use client";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="min-h-screen relative flex flex-col bg-[url('/Home1.png')] bg-no-repeat bg-cover bg-center px-6 py-16 md:px-20 text-white font-display font-light">
      <Navbar />
      
      <div className="max-w-3xl mx-auto bg-black/60 backdrop-blur-md rounded-lg p-2 flex flex-col items-center shadow-lg">
        <h1 className="text-[#be9858] text-4xl mb-4 text-center tracking-wide">Get In Touch</h1>
        <p className="text-white/90 mb-8 text-center leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just say hello, 
          feel free to reach out. I’m here to bring your jewelry and watch visuals to life with passion and precision.
        </p>

        <form action="mailto:behbiin@gmail.com" method="POST" encType="text/plain" className="flex flex-col gap-6 w-full">
          <label className="flex flex-col text-white/90 text-sm font-light">
            Name
            <input 
              type="text" 
              name="name" 
              required 
              className="mt-1 w-full rounded bg-white/10 border border-white/30 text-white px-4 py-2 focus:outline-none focus:border-[#be9858]"
              placeholder="Your full name"
            />
          </label>

          <label className="flex flex-col text-white/90 text-sm font-light">
            Email
            <input 
              type="email" 
              name="email" 
              required 
              className="mt-1 w-full rounded bg-white/10 border border-white/30 text-white px-4 py-2 focus:outline-none focus:border-[#be9858]"
              placeholder="you@example.com"
            />
          </label>

          <label className="flex flex-col text-white/90 text-sm font-light">
            Message
            <textarea 
              name="message" 
              required 
              rows={5}
              className="mt-1 w-full rounded bg-white/10 border border-white/30 text-white px-4 py-2 resize-none focus:outline-none focus:border-[#be9858]"
              placeholder="Write your message here"
            />
          </label>

          <Button
            hrf="#"
            cls="self-center ml-[50%] -translate-x-[50%] bg-[#be9858] text-black font-semibold tracking-Wider text-[14px] rounded px-5 py-3 hover:bg-[#a07d43] transition-colors"
            type="submit"
          >
            SEND MESSAGE
          </Button>
        </form>

        <div className="mt-12 text-center text-white/70 space-y-2 font-light text-sm self-start">
          <p>📩 <a href="mailto:behbiin@gmail.com" className="underline hover:text-[#be9858]">behbiin@gmail.com</a></p>
          <p>📞 <a href="tel:+989120687097" className="underline hover:text-[#be9858]">+98 912 068 7097</a></p>
          <p>
            📸 <a href="https://www.instagram.com/behbiin" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#be9858]">
              @behbiin
            </a>
          </p>
        </div>
      </div>
      
      <span className="text-white/80 tracking-wider absolute bottom-10 left-6 font-display text-[14px] font-light">
        GET IN TOUCH
      </span>
    </div>
  );
}