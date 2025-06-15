import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const ContentEmotion = () => {
  const [angerLevel, setAngerLevel] = useState(0); // from 0 to 100
  const [selectedWords, setSelectedWords] = useState([]);
  const navigate = useNavigate();
  const moods = ["Calm", "Settled", "Okay", "At Ease", "Composed","Relieved"];
  const emotionType = "Content";

const toggleWord = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word)); // remove
    } else {
      setSelectedWords([...selectedWords, word]); // add
    }
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
        <img src="./landing_page.png" alt="" className="min-h-screen w-full"  />
        
        <button onClick={() => navigate("/")} className="absolute text-lg border-b-2 p-4 border-zinc-400 left-4 top-4 text-red-500 font-medium  cursor-pointer">
          <span className="rounded-full bg-white p-1 text-orange-300 ">←</span><span className="pl-2"> Back</span> 
        </button>
        
        <div className="min-w-5xl h-[600px] bg-transparent absolute rounded-2xl shadow-xl p-8 text-center border border-white">

          <div className="text-[#3E4352]">
            <p className="text-4xl font-bold mt-[61px]">Contentment is a complex emotion</p>
            <p className="text-2xl w-[699px] mx-auto font-semibold tracking-wide mt-[10px]">
             Identifying your emotions is the first step to releasing them
            </p>
          </div>
            <div className=" h-[405px]">

          <div className="mt-2">
            <img src="./Content.png" alt="Angry Emoji" className="w-[170px] h-[170px] mx-auto" />
          </div>

          {/* Slider Section */}
          <div className="w-[480px] mx-auto ">
            <div className="flex justify-between px-2 mb-2 text-[#3E4352] font-semibold text-lg">
              <span>Slightly Neutral</span>
           <input
            type="range"
            min="0"
            max="100"
            value={angerLevel}
            onChange={(e) => setAngerLevel(Number(e.target.value))}
            className="w-[261px] appearance-none  h-[50px] rounded-2xl outline-none border border-[#3E7EFF] transition-all duration-300
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-18
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:rounded-xl
            [&::-webkit-slider-thumb]:bg-[#FFB766]
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:appearance-none"
            style={{
                background: `linear-gradient(to right, #D58215 ${angerLevel}%, #f3f4f6 ${angerLevel}%)`
            }}
            
            />
            
              <span>Very Neutral</span>
            </div>
          </div>

          <p className="mt-[30px] w-1/2 text-2xl font-semibold text-[#3E4352]">
            What stage is your contentment in?
          </p>
          
        <div className="flex flex-wrap gap-4 ml-[9%] mt-8 w-[844px]">
      {moods.map((word) => (
        <button
          key={word}
          onClick={() => toggleWord(word)}
          className={`border p-2 rounded-2xl transition-all duration-200 font-medium ${
            selectedWords.includes(word)
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black"
          }`}
        >
              {word}
            </button>
          ))}
        </div>

              </div>
              
          <motion.button
            whileTap={{ scale: 0.95 }}
            className=" mt-[40px] bg-white cursor-pointer text-[#a44167ea] font-semibold py-3 px-6 rounded-full w-[455px] h-[55px] text-2xl transition"
            onClick={() => navigate("/checkin")}
            >
            Add Emotion
          </motion.button>
            <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-[#A44167] mt-[40px] ml-5 hover:bg-[#a44167ea] cursor-pointer text-white font-semibold py-3 px-6 rounded-full w-[455px] h-[55px] text-2xl transition"
            onClick={() => navigate("/input", { state : { selectedWords, emotionType }})} 
            >
            Complete
          </motion.button>

              </div>
      </div>
    </>
  );
};