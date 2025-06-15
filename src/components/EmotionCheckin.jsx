import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // if using React Router

export const EmotionCheckin=()=>{
    const navigate = useNavigate();
    
    return (
     <>
     <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
        <img src="./landing_page.png" alt="" className="min-h-screen w-full"  />
        
        <button onClick={() => navigate("/")} className="absolute text-lg border-b-2 p-4 border-zinc-400 left-4 top-4 text-red-500 font-medium  cursor-pointer">
          <span className="rounded-full bg-white p-1 text-orange-300 ">←</span><span className="pl-2"> Back</span> 
        </button>
      <div className="min-w-5xl h-[542px] absolute  bg-transparent rounded-2xl shadow-xl p-8 text-center border border-white">
        <div className="text-[#3E4352]">
            <p className="text-4xl font-bold mt-[47px]">How are you feeling today?</p>
            <p className="text-2xl w-[699px]  mx-auto font-semibold tracking-wide mt-[32px]">No matter how you're feeling , it's okay. We're here to support you.</p>
        </div>
        <div className="flex gap-[65px] mt-[44px] justify-center text-lg text-[#686362] font-semibold">
            <div>
            <img src="./Angry.png" alt="" className="w-[85px] h-[85px]" onClick={()=> navigate("/anger")} />
            <p>Angry</p>
            </div>
            <div>
            <img src="./Sad.png" alt="" className="w-[85px] h-[85px] " onClick={()=> navigate("/sad")}/>
            <p>Sad</p>
            </div>
            <div>
            <img src="./Neutral.png" alt="" className="w-[85px] h-[85px]" onClick={()=> navigate("/neutral")}/>
            <p>Neutral</p>
            </div>
            <div>
            <img src="./Content.png" alt="" className="w-[85px] h-[85px]" onClick={()=> navigate("/content")}/>
            <p>Content</p>
            </div>
            <div>
            <img src="./Happy.png" alt=""  className="w-[85px] h-[85px]" onClick={()=> navigate("/happy")}/>
            <p>Happy</p>
            </div>
            <div>
            <img src="./Awe.png" alt="" className="w-[85px] h-[85px]" onClick={()=> navigate("/awe")}/>
            <p>Awe</p>
            </div>
        </div>
        <div className="top-[100px]">
        <p className="mt-[107px] text-2xl font-semibold text-[#3E4352] ">
            Choose the feeling that is closest to how you are feeling
        </p>
        </div>
        <img src="./star.png" alt="" className="ml-[800px] pt-10" />
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-[#A44167] hover:bg-[#a44167ea] cursor-pointer text-white font-semibold py-3 px-6 rounded-full w-[455px] h-[55px] text-2xl transition"
          onClick={() => navigate("/checkin")}
        >
          Complete
        </motion.button>

        </div>
      </div>
     </>   
    )
}