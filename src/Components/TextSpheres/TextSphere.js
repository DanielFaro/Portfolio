import { useEffect } from "react";
import "./TextSphere.css";
import { texts } from "./index";
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const options = {
        radius: 280,
        maxSpeed: "normal",
        initSpeed: "normal",
        direction: 135,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="textSphere">
      <span className="tagcloud" />
    </div>
  );
};

export default TextSphere;
