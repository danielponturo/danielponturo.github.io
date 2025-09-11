import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Angular",
  "TypeScript",
  "Vite",
  "HTML5",
  "CSS3",
  "TailwindCSS",
];

const labelsSecond = [
  "Node.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "RESTful APIs",
  "Postman",
  "Redis",
];

const labelsThird = [
  "GitHub Actions",
  "Azure DevOps",
  "Jfrog",
  "Docker",
  "Kubernetes",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Front-End Web Development</h3>
            <p>
              Experience building user-friendly front-end web applications using
              technologies such as React, Angular and TailwindCSS.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <h3>Back-End Web Development</h3>
            <p>
              Experience building solid back-end applications in Node.js, and
              seamlessly integrating them with front-end clients and databases.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faGears} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Experience setting up and working with CI/CD pipelines to build
              and deliver code in an efficient way.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
