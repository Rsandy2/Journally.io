import { useState } from "react";
import TextBox from "../components/ui/Textbox/TextBox";
import Header from "../components/Header";
import ImageSelector from "../components/ui/ImageSelector/ImageSelector";
import RecencyList from "../components/ui/RecentPanel/RecenyList";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [debugValue, setDebugValue] = useState("");
  const debugFunction = () => {
    // console.log(5);
    const number = 5;
    console.log(typeof number);
  };

  const handleSubmit = () => {
    console.log("test");
    onSubmit({ debugText: 42 }).then((data) => {
      console.log(data);
      setDebugValue(data.value);
    });
  };
  const onSubmit = async (data = {}) => {
    console.log("Submitted");
    const response = await fetch("http://localhost:5173/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  };

  return (
    <div className="App">
      <RecencyList />
      <ImageSelector />
      {/* <h3>{debugValue}</h3> */}

      <TextBox />
    </div>
  );
}

export default App;
