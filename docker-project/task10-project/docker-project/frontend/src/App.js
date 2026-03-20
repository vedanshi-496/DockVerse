import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");
  const [health, setHealth] = useState("");

  // 👉 PUT DEBUG CODE HERE
  useEffect(() => {
    axios.get("http://backend:5000")
      .then(res => {
        console.log("API:", res.data);
        setMsg(res.data);
      })
      .catch(err => console.log("Error API:", err));

    axios.get("http://backend:5000/health")
      .then(res => {
        console.log("Health:", res.data);
        setHealth(res.data.status);
      })
      .catch(err => console.log("Error Health:", err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <h1 className="text-3xl text-blue-600 font-bold">{msg}</h1>
      <p className="text-lg text-green-600">Health: {health}</p>
    </div>
  );
}

export default App;