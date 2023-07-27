import { useEffect } from "react";
import "./TextSphereLg.css";
import { texts } from "./index";
import TagCloud from "TagCloud";

const TextSphereLg = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloudLg";

      const options = {
        radius: 500,
        maxSpeed: "normal",
        initSpeed: "normal",
        direction: 135,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="textSphereLg">
      <span className="tagcloudLg" />
    </div>
  );
};

export default TextSphereLg;
