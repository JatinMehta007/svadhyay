import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const InputEmotion = () => {
    const [angerLevel, setAngerLevel] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const selectedWords = location.state?.selectedWords || [];
    const emotionType = location.state?.emotionType || "";

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
      <img src="./landing_page.png" alt="" className="min-h-screen w-full" />

      <button
        onClick={() => navigate("/")}
        className="absolute text-lg border-b-2 p-4 border-zinc-400 left-4 top-4 text-red-500 font-medium cursor-pointer"
      >
        <span className="rounded-full bg-white p-1 text-orange-300">←</span>
        <span className="pl-2"> Back</span>
      </button>

      <div className="min-w-5xl h-[600px] bg-transparent absolute rounded-2xl shadow-xl p-8 text-center border border-white">

        <p className="text-4xl font-bold mt-[45px] text-[#3E4352]">What is making you feel this way?</p>

        <div>
          <img src="./gallery.png" alt="" className="absolute mt-20 items-end right-20" />
          <textarea
            placeholder="I feel this way because..."
            className="border-2 w-[881px] h-[308px] mt-[64px] text-2xl font-semibold p-4 resize-none align-top rounded-3xl pr-12"
          />
        </div>

        {/* Show selected mood words */}
        <div className="w-1/5 text-2xl  text-[#3E4352] mt-5 font-semibold">{ emotionType }  </div>
        {selectedWords.length > 0 && (
            <div className="mt-2 text-xl block font-medium text-start ml-16 text-gray-700"><span className="font-semibold text-[#3E4352] text-lg">{selectedWords.join(" • ")}</span>
            </div>
        )}


        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-[#A44167] mt-[80px] ml-5 hover:bg-[#a44167ea] cursor-pointer text-white font-semibold py-3 px-6 rounded-full w-[455px] h-[55px] text-2xl transition"
          onClick={() => navigate("/select" ,{ state : { selectedWords, emotionType }})}
        >
          Complete
        </motion.button>

      </div>
    </div>
  );
};