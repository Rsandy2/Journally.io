import ImageSelector from "../components/ui/ImageSelector/ImageSelector";
import RecencyList from "../components/ui/RecentPanel/RecenyList";
import TextBox from "../components/ui/Textbox/TextBox";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecencyList />
      <ImageSelector />

      <TextBox />
    </div>
  );
}

export default App;
