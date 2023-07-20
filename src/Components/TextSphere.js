import { useEffect } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "_lodash",
        "REST",
        "TypeScript",
        "Redux",
        "Jest",
        "SQL",
        "MaterialUI",
        "WebSockets",
        "GraphQL",
        "Next",
        "Express",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        // keep: true,
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
