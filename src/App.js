import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(setShow(false), 2000);
  }, []);

  return (
    <div className="App">
      <Loader show={show} />
      <h1>Dans resume</h1>
      <h2>sdfdssfsddssdfsdfsdfsfsfsfwefwefsdf</h2>
    </div>
  );
}

export default App;
