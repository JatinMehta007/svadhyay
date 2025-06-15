import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // if using React Router

export default function EndScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
      <div className="w-[804px] h-[600px]  bg-white rounded-2xl shadow-xl p-8 text-center relative border border-gray-200">
<button onClick={() => navigate("/")} className="absolute text-lg border-b-2 p-4 border-zinc-400 left-4 top-4 text-red-500 font-medium cursor-pointer">
          <span className="rounded-full bg-white p-1 text-orange-300 ">←</span><span className="pl-2"> Back</span> 
        </button>
        <img src="./Group.png" alt="Instructions" className="mx-auto mb-4 w-20 h-20" />

        <h1 className="text-2xl font-bold  mb-2">Great job completing your session!</h1>

        <p className="text-gray-700 mb-6 text-lg">
          Want to make this a habbit? Set a remainder for next time.
        </p>

        

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="border-green-800 border  font-light py-3 px-6 rounded-lg text-lg transition"
          onClick={() => navigate("/checkin")}
        >
          Set Remainder
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 ml-10 rounded-lg text-lg transition"
          onClick={() => navigate("/checkin")}
        >
          View Analytics
        </motion.button>
        
        <p className="font-semibold text-2xl text-start mt-20">My Reccomendations</p>
        <img src="./Frame.png" alt="" />
      </div>
    </div>
  );
}