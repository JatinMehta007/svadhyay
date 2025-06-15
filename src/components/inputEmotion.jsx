import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const InputEmotion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedWords = location.state?.selectedWords || [];
  const emotionType = location.state?.emotionType || "";
  const angerImg = location.state?.angerImg || "";

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
        <p className="text-4xl font-bold mt-[45px] text-[#3E4352]">
          What is making you feel this way?
        </p>

        <div>
          <img src="./gallery.png" alt="" className="absolute mt-20 items-end right-20" />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="I feel this way because..."
            className="border-2 w-[881px] h-[308px] mt-[64px] text-2xl font-semibold p-4 resize-none align-top rounded-3xl pr-12"
          />
        </div>

        <div className="w-1/5 text-2xl text-[#3E4352] mt-5 font-semibold">{emotionType}</div>
        {selectedWords.length > 0 && (
          <div className="mt-2 text-xl block font-medium text-start ml-16 text-gray-700">
            <span className="font-semibold text-[#3E4352] text-lg">
              {selectedWords.join(" • ")}
            </span>
          </div>
        )}

        {angerImg && (
          <img src={angerImg} alt="Emotion" className="w-[120px] h-[120px] mx-auto mt-4" />
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