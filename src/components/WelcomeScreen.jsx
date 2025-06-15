import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // if using React Router

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
      <div className="max-w-5xl h-[600px]  bg-white rounded-2xl shadow-xl p-8 text-center relative border border-gray-200">
        <button
          onClick={() => navigate("/")}
          className="absolute text-lg border-b-2 p-4 border-zinc-400 left-4 top-4 text-red-500 font-medium cursor-pointer"
        >
          <span className="rounded-full bg-white p-1 text-orange-300 ">←</span>
          <span className="pl-2"> Back</span>
        </button>
        <img
          src="./logo.png"
          alt="Instructions"
          className="mx-auto mb-4 w-20 h-20"
        />

        <h1 className="text-2xl font-bold text-green-800 mb-2">Instructions</h1>

        <p className="text-gray-700 mb-6 text-lg">
          Welcome to the Stress scale. This is a quiz to identify our stress
          levels ranging from high to low and navigate through such situations.
        </p>

        <div className="text-left text-gray-700 space-y-4 mb-8">
          <div className="flex items-start gap-2 ml-14">
            <img src="./Vector1.png" alt="" className="h-4 w-5 mt-1" />
            <span>
              Read the statements carefully and relate to each of the
              statements.
            </span>
          </div>
          <div className="flex items-start gap-2 ml-11">
            <img src="./Select.png" alt="" className="h-9 w-9 " />
            <span className="mt-2">
              Choose the option which best describes your mood.
            </span>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg text-lg transition"
          onClick={() => navigate("/checkin")}
        >
          Start Check-in
        </motion.button>
        <div className="flex justify-center items-center ml-[25%]">
          <img src="./Vector.png" alt="" />
        </div>
      </div>
    </div>
  );
}
