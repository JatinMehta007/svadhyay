import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const SelectEmotion = () => {

    const navigate = useNavigate();
    const [selectedWord, setSelectedWord] = useState([]);
    const location = useLocation();
    const emotionType = location.state?.emotionType || "";
    const selectedWords = location.state?.selectedWords || [];
    const moods = ["Exercise", "Social", "Community", "cooking","Playing with pets","another","portal","Exercise", "Coparing", "Cooking", "Community", "Events", "Stretching","Called a love one", "Sports","Stretching","Called a love one", "Sports","Playing with pets"];
  
   const toggleWord = (word) => {
    if (selectedWord.includes(word)) {
      setSelectedWord(selectedWord.filter((w) => w !== word)); // remove
    } else {
      setSelectedWord([...selectedWord, word]); // add
    }
  };

  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // success / error

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emotion: emotionType,
          words: selectedWords,
          notes,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      const data = await response.json();
      console.log("Submitted:", data);
      setStatus("success");

      setTimeout(() => {
        navigate("/end");
      }, 1500);
    } catch (error) {
      console.error("Error submitting check-in:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


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
                <p className="text-start text-2xl mt-[50px] font-semibold ml-[60px]">Choose upto 5 activites</p>
            </div>
            <div className="flex mt-5 flex-wrap space-x-16 w-[840px] ml-[60px]">
            {moods.map((word) => (
                <button
                key={word}
                onClick={() => toggleWord(word)}
                className={`border p-2 rounded-2xl transition-all duration-200 font-medium mb-4 ${
                    selectedWord.includes(word)
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black"
                }`} 
                >
                {word}
                </button>
            ))}
            </div>
        {/* Show selected mood words */}
        <div className="w-1/5 text-2xl  text-[#3E4352] mt-1 font-semibold">{ emotionType }  </div>
        {selectedWord.length > 0 && (
            <div className="mt-2 text-xl block font-medium text-start ml-16 text-gray-700"><span className="font-semibold text-[#3E4352] text-lg">{selectedWord.join(" • ")}</span>
            </div>
        )}


       

        {status === "success" && (
          <p className="text-green-600 text-lg mt-4">Emotion check-in submitted successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-lg mt-4">Something went wrong. Try again.</p>
        )}
    <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          className={`mt-[40px] ml-5 bg-[#A44167] hover:bg-[#a44167ea] cursor-pointer text-white font-semibold py-3 px-6 rounded-full w-[455px] h-[55px] text-2xl transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Submitting..." : "Submit Check-in"}
        </motion.button>

      </div>
    </div>
  );
};