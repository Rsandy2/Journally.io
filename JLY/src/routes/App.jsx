import { useState } from "react";
import TextBox from "../components/ui/Textbox/TextBox";
import Header from "../components/Header";
import ImageSelector from "../components/ui/ImageSelector/ImageSelector";
import RecencyList from "../components/ui/RecentPanel/RecenyList";

import "./App.css";
import { handleUpdate } from "../utils/handlers";

function App() {
  const [count, setCount] = useState(0);
  const [debugValue, setDebugValue] = useState("");
  const debugFunction = () => {
    // console.log(5);
    const number = 5;
    console.log(typeof number);
  };

  const handleSubmit = () => {
    onSubmit({ title: debugValue }).then((data) => {
      console.log(data);
    });
  };
  const onSubmit = async (data) => {
    console.log("Submitted");
    const response = await fetch("http://localhost:5173/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  };

  return (
    <div className="App">
      {/* <RecencyList />
      <ImageSelector />

      <TextBox /> */}
      <h3>{debugValue}</h3>
      <input
        onChange={(e) => handleUpdate(e, setDebugValue)}
        value={debugValue}
      />
      <button onClick={handleSubmit}>DOOM</button>
    </div>
  );
}

export default App;
