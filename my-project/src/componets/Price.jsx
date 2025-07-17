import { motion } from "framer-motion"

function Price() {
  return (
    <section className='w-full bg-gradient-to-br from-white to-gray-100 py-20 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        
        {/* ฝั่งข้อความ - แสดงก่อน */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hello, I’m <br />
            <span className="text-gray-900">Brooklyn Gilbert</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto md:mx-0">
            I’m a Freelance <span className="text-purple-600 font-medium">UI/UX Designer</span> and
            <span className="text-purple-600 font-medium"> Developer</span> based in London, England.
            I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>
          <div className="mt-6">
            <a href="#" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition">
              Say Hello!
            </a>
          </div>
        </motion.div>

        {/* ฝั่งรูปภาพ - แสดงหลังจากข้อความ */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="w-full max-w-8/10  mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition duration-300 transform hover:scale-105">
            <a href="https://www.youtube.com/watch?v=zivpBXVprMI&list=RDcystfHsjyNo&index=4">
              <img 
              src="https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Brooklyn Gilbert"
              
              className="w-full h-auto object-cover"
            />
            </a>
          </div>
        </motion.div>

      </div>
      <div>
        
      </div>
    </section>
  )
}

export default Price
