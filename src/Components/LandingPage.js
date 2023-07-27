import { useEffect, useState, forwardRef, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import Typography from "@mui/material/Typography";
import { useSpring, animated, easings } from "react-spring";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Loader from "./Loader";
import styles from "./LandingPage.module.css";

// COMPONENTS -------------------------------------------------------------------
import Button from "@mui/material/Button";
import AutoTypeWrapper from "./AutoTypeWrapper";
import NavBar from "./Navigation/NavBar";
import SideBar from "./Navigation/SideBar";
import TextSphereSm from "./TextSpheres/TextSphereSm";
import TextSphere from "./TextSpheres/TextSphere";
import TextSphereLg from "./TextSpheres/TextSphereLg";
import JobDescription from "./JobDescription";

// ASSETS -----------------------------------------------------------------------
import ResumeMar2023 from "../../src/assets/images/ResumeMar2023.pdf";
import { ReactComponent as GithubLogo } from "../assets/icons/github.svg";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedIn.svg";
import { ReactComponent as YoutubeLogo } from "../assets/icons/youtube.svg";
import { ReactComponent as MailLogo } from "../assets/icons/mail.svg";
import calculatorImg from "../assets/images/calculatorCoverPage.jpg";
import rentalsImg from "../assets/images/luxuryrentalscoverpage.jpg";
import headshot from "../assets/images/headshot.avif";

export default function LandingPage() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);
  const interestsRef = useRef(null);
  const projectsRef = useRef(null);
  const contentRef = useRef(null);
  const { width } = useWindowSize();
  console.log("## width in LandingPage ==", width);

  const linkList = {
    ABOUT: aboutRef,
    EXPERIENCE: experienceRef,
    SKILLS: skillsRef,
    CONTACTS: contactsRef,
    INTERESTS: interestsRef,
  };

  const [isLoading, setIsLoading] = useState(false);
  // const [mobileView, setMobileView] = useState(false);
  // const handleOpen = () => setIsLoading(true);
  // const handleClose = () => setIsLoading(false);

  const scrollToSection = (linkName) => {
    const elementRef = linkList[linkName];
    console.log("## scrollTO ==", linkName, elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   if (size.width < 480) {
  //     setMobileView(true);
  //   } else {
  //     setMobileView(false);
  //   }
  // }, [size]);

  const jobs = ["Front-End Dev", "Musician", "Performer"];
  const greetings = [
    "Hi",
    "Hola",
    "你好",
    "Salut",
    "مرحبًا",
    "Hello",
    "привет",
  ];
  // the pattern below wont work correctly, since we only show
  // the loader when open is true
  // need to prevent other lading page DOM nodes from existing while still loading
  // maybe try to wrap a modal component around the loader,
  // need to prevent scrolling in modal
  // add youtube link, maybe put links on the side permanently, along with a scroll up option
  // last section on page is just an email link.
  return (
    <div className={styles.landingWrapper}>
      {/* {isLoading && (
        <div className={styles.open}>
          <Loader />
          <Button onClick={handleClose}>Enter</Button>
        </div>
      )} */}
      {!isLoading && width > 520 ? (
        <NavBar onClick={scrollToSection} width={width} />
      ) : (
        <SideBar onClick={scrollToSection} width={width} />
      )}
      {width > 768 && (
        <section key="Email" className={styles.emailWrapper}>
          <div className={styles.email}>
            <a
              id="email-button"
              href="mailto:Danieln.Faro@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Danieln.Faro@gmail.com
            </a>
          </div>
        </section>
      )}

      <div className={styles.content}>
        <div className={styles.jobsWrapper}>
          <h3>Hi, my name is</h3>
          <h1 style={{ color: "greenyellow" }}>Dan Faro</h1>
          <div style={{ display: "flex" }}>
            <h1>{`I am a\u00A0`}</h1>
            <h1>
              <AutoTypeWrapper strings={jobs} />
            </h1>
          </div>

          {/* <h1 className={styles.typingBorder}>
            {!isLoading && <AutoTypeWrapper strings={jobs} />}
          </h1> */}
          {/* <h1>{`';`}</h1> */}
        </div>

        <div className={isLoading ? styles.Loading : styles.Default}>
          {/* {open && (
        <div className={opwen ? styles.open : styles.closed}>
          <Loader show={open} />
          <Button onClick={handleClose}>Enter</Button>
        </div>
      )} */}
          <section key="About" ref={aboutRef} className={styles.about}>
            <div>
              <h2>About</h2>
              <p>
                In my work, I try to find the right balance between form and
                function. From technical drawings, all the way to the
                photographic renders, and the actual representations of my work
                as a designer, my philosophy is that of simplicity. At the same
                time, my style is distinctly mine – uncluttered, with clean
                shapes and modern space-saving solutions.
              </p>
              <Button>
                <a href={ResumeMar2023} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Button>
            </div>
            <div className={styles.headshotWrapper}>
              <img src={headshot} alt="headshot" />
            </div>
          </section>
          <section
            key="Experience"
            ref={experienceRef}
            className={styles.experience}
          >
            <JobDescription />
          </section>
          <section key="Skills" ref={skillsRef} className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.skillsRow}>
              <div>description</div>
              <div>
                {width < 480 ? (
                  <TextSphereSm />
                ) : width < 768 ? (
                  <TextSphere />
                ) : (
                  <TextSphereLg />
                )}
              </div>
            </div>
          </section>
          <section
            key="Interests"
            ref={interestsRef}
            className={styles.interests}
          >
            <h2>Interests</h2>
          </section>
          <section key="Projects" ref={projectsRef}>
            <div className={styles.projects}>
              <h1>Projects</h1>
              <div className={styles.projectItem}>
                <div className={styles.col1}>
                  <h3>Luxury Rentals</h3>
                  <div className={styles.anchorWrapper}>
                    wid
                    <a href="https://danielfaro.github.io/LuxuryRentals">
                      <div className={styles.imageWrapper}>
                        <img src={rentalsImg} alt="Luxury Img" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.projectLangs}>
                    <div>React styled-componets MongoDB Express</div>
                    <div style={{ height: "20px", width: "20px" }}>
                      <a
                        id="github-button"
                        href="https://github.com/DanielFaro/LuxuryRentals/tree/master"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubLogo />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.col2}>
                  <div className={styles.projectDescription}>
                    'Luxury Rentals' is a proof of concept displaying the
                    available luxury vehicles in the area. For this case, Los
                    Angeles was used as an example. It includes filtering by
                    several parameters such as vehichle type and size.
                  </div>
                </div>
              </div>
              <div className={styles.projectItem}>
                <div className={styles.col1}>
                  <h3>SFX Calculator</h3>
                  <div className={styles.anchorWrapper}>
                    <a href="https://danielfaro.github.io/calculator-app-ts">
                      <div className={styles.imageWrapper}>
                        <img src={calculatorImg} alt="Calculator Img" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.projectLangs}>
                    <div>React TypeScript</div>
                    <div style={{ height: "20px", width: "20px" }}>
                      <a
                        id="github-button"
                        href="https://github.com/DanielFaro/calculator-app-ts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubLogo />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.col2}>
                  <div className={styles.projectDescription}>
                    This is a calculator built in TypeScript and React with an
                    added drum effects library. On display of the result, the
                    sounds associated with each number are looped over and
                    played in succession, creating a drum beat.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section key="Contacts" ref={contactsRef}>
            <div className={width > 768 ? styles.contactLinks : styles.footer}>
              <div>
                <a
                  id="github-button"
                  href="https://www.github.com/DanielFaro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo />
                </a>
              </div>
              <div>
                <a
                  id="linkedIn-button"
                  href="https://www.linkedin.com/in/daniel-faro-4a4024101/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInLogo />
                </a>
              </div>
              <div>
                <a
                  id="youtube-button"
                  href="https://www.youtube.com/@treeczar4187/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeLogo />
                </a>
              </div>
              {width < 768 && (
                <div>
                  <a
                    id="email-button"
                    href="mailto:Danieln.Faro@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MailLogo />
                  </a>
                </div>
              )}
            </div>
          </section>

          <section key="footer">
            <p>Designed and Built by Dan Faro</p>
          </section>
        </div>
      </div>
    </div>
  );
}

// const FadeWrapper = forwardRef(function FadeWrapper(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// const style = {
//   position: "absolute",
//   // height: 500,
//   // width: 500,
//   top: "50%",
//   left: "50%",
//   height: "100%",
//   width: "100%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
