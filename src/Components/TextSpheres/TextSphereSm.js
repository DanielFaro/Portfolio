import { useEffect } from "react";
import "./TextSphereSm.css";
import { texts } from "./index";
import TagCloud from "TagCloud";

const TextSphereSm = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloudSm";
      const options = {
        radius: 140,
        maxSpeed: "normal",
        initSpeed: "normal",
        direction: 135,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="textSphereSm">
      <span className="tagcloudSm" />
    </div>
  );
};

export default TextSphereSm;
