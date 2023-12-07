import { useState, useEffect } from "react";
import LandingPage from "./Components/LandingPage";
import LoadingScreen from "./Components/LoadingScreen";
import { useSpring, animated } from "react-spring";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const fadeInProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2500,
    config: { duration: 2000 },
  });

  const fadeOutProps = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 2000,
  });

  useEffect(() => {
    setTimeout(() => {
      console.log("## about to setLoading to false");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen loading={loading} />
      ) : (
        <animated.div style={fadeInProps}>
          <LandingPage />
        </animated.div>
      )}
    </div>
  );
}

export default App;
