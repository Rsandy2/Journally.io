import { useCallback, useState } from "react";
import TextBox from "../components/ui/Textbox/TextBox";
import Header from "../components/Header";
import ImageSelector from "../components/ui/ImageSelector/ImageSelector";
import RecencyList from "../components/ui/RecentPanel/RecenyList";

import "./App.css";
import { handleUpdate } from "../utils/handlers";
import { useMovies } from "../hooks/useMovies";

function App() {
  const [userData, setUserData] = useState({
  token: undefined,
  user: undefined,
  });
  useEffect(() => {
  const checkLoggedIn = async ()=> {
  let token = localStorage.getItem("auth-token");
  if (token===null) {
    localStorage.setItem("auth-token","");
    token ="";
  }
  const tokenResponse = await axios.post(
  "http://localhost:8082/tokenIsValid",
  null,
  { headers:{"x-auth-token": token } }
  );
  if (tokenResponse.data) {
  const userRes = await axios.get("http://localhost:8082/", {
  headers: {"x-auth-token": token },
  });
  setUserData({
    token,
    user: userRes.data,
  });
}
};
  checkLoggedIn();
},[]);
}
return (
  <UserContext.Provider value={{ userData, setUserData }}>
    <Router>
      <Routes>
        <Route exact path='/' element={<ShowItemList />} />
        <Route path='/create-item' element={<CreateItem />} />
        <Route path='/add' element={<CreateItem />} />
        <Route path='/edit-item/:id' element={<UpdateItemInfo />} />
        <Route path='/show-item/:id' element={<ShowItemDetails />} />
  <Route path='/login' element={<Login />} />
  <Route path='/signup'element={<Signup />} />
  <Route path='*' element={<ErrorPage />} />
  </Routes>
  </Router>
  </UserContext.Provider>
);
/*
function App() {
  const [count, setCount] = useState(0);
  const [debugValue, setDebugValue] = useState("");
  const debugFunction = () => {
    // console.log(5);
    const number = 5;
    console.log(typeof number);
  };

  const { data: movies, ...moviesUtils } = useMovies();
  console.log(movies);
  const debugHandleSubmit = () => {
    debugOnSubmit({ title: debugValue }).then((data) => {
      console.log(data);
    });
  };
  const debugOnSubmit = async (data) => {
    console.log("Submitted");
    const response = await fetch("http://localhost:5173/fetch-movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  };

  const onSubmit = useCallback(async () => {
    await moviesUtils.fetchData({ title: debugValue });
  }, [moviesUtils]);

  return (
    <div className="App">
      <h3>{debugValue}</h3>
      <input
        onChange={(e) => handleUpdate(e, setDebugValue)}
        value={debugValue}
      />
      <button onClick={onSubmit}>DOOM</button>
    </div>
  );
}
export default App;
*/