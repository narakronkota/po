import React from 'react';

function About() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1">
          <div className="overflow-hidden max-w-9/10   rounded-[2rem] mx-auto md:mx-0 cursor-pointer transition duration-300 transform hover:scale-105 " >
            <img
              src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // แทนรูปตัวอย่างของคุณ
              alt="About Me"
              className="w-full  h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 text-white">
          <button className="px-4 py-1 border border-gray-500 text-sm rounded-full mb-4">✨ About!</button>
          <h2 className="text-7xl font-bold mb-4">
            More <span className="bg-gradient-to-r from-[#e6a383] text-[#e6a383]  bg-clip-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Hello I'm Narakron a multidisciplinary Web designer and Developer Based in Bangkok.
            I'm very passionate about the work that I do
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I wonder if Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem deleniti voluptatibus
            dignissimos omnis expedita hic optio dolorum sapiente facere excepturi. Molestias perferendis ipsum in
            quam ratione natus beatae eligendi cupiditate. <br /><br />
            Never imagine yourself not to otherwire
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 transition duration-200 transform hover:scale-105">
              Hire me &rarr;
            </button>
          <button className="bg-gradient-to-r from-[#e6a383] to-[#e6a383] text-white text-2xl px-6 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105">
            Download CV 
        </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
