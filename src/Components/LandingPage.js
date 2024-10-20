import { useEffect, useState, forwardRef, useRef } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

import Typography from '@mui/material/Typography';
import { useSpring, animated, easings } from 'react-spring';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Loader from './Loader';
import styles from './LandingPage.module.css';

// COMPONENTS -------------------------------------------------------------------
import Button from '@mui/material/Button';
import AutoTypeWrapper from './AutoTypeWrapper';
import NavBar from './Navigation/NavBar';
import SideBar from './Navigation/SideBar';
import TextSphereSm from './TextSpheres/TextSphereSm';
import TextSphere from './TextSpheres/TextSphere';
import TextSphereLg from './TextSpheres/TextSphereLg';
import JobDescription from './JobDescription';
import Skills from './Skills';

// ASSETS -----------------------------------------------------------------------
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInLogo } from '../assets/icons/linkedIn.svg';
import { ReactComponent as YoutubeLogo } from '../assets/icons/youtube.svg';
import { ReactComponent as MailLogo } from '../assets/icons/mail.svg';
import { ReactComponent as ExternalLinkLogo } from '../assets/icons/linkIcon.svg';
import calculatorImg from '../assets/images/calculatorCoverPage.jpg';
import rentalsImg from '../assets/images/luxuryrentalscoverpage.jpg';
import dogdashboardImg from '../assets/images/dogdashboard.png';
import headshot from '../assets/images/headshot.avif';

export default function LandingPage() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);
  const interestsRef = useRef(null);
  const projectsRef = useRef(null);
  const contentRef = useRef(null);
  const { width } = useWindowSize();
  console.log('## width in LandingPage ==', width);

  const linkList = {
    ABOUT: aboutRef,
    EXPERIENCE: experienceRef,
    SKILLS: skillsRef,
    PROJECTS: projectsRef,
    CONTACTS: contactsRef,
  };

  const [isLoading, setIsLoading] = useState(false);
  // const [mobileView, setMobileView] = useState(false);
  // const handleOpen = () => setIsLoading(true);
  // const handleClose = () => setIsLoading(false);

  const scrollToSection = (linkName) => {
    const elementRef = linkList[linkName];
    console.log('## scrollTO ==', linkName, elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop - 70,
      behavior: 'smooth',
    });
  };

  const jobs = ['FrontEnd Dev', 'Musician', 'Performer', 'Writer', 'Scientist'];
  const greetings = [
    'Hi',
    'Hola',
    '你好',
    'Salut',
    'مرحبًا',
    'Hello',
    'привет',
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
      <div className={styles.landingPage}>
        {/* {isLoading && (
        <div className={styles.open}>
        
          <Loader />
          <Button onClick={handleClose}>Enter</Button>
        </div>
      )} */}

        {!isLoading && width > 560 ? (
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

        {/* <div className={styles.content}> */}
        <div className={styles.roleWrapper}>
          <p>Hi, my name is</p>
          <h1 style={{ color: 'salmon' }}>Dan Faro</h1>
          <div style={{ display: 'flex' }}>
            <h1>{`I am a\u00A0`}</h1>
            <h1>
              <AutoTypeWrapper strings={jobs} />
            </h1>
          </div>

          {/* <h1 className={styles.typingBorder}>
            {!isLoading && <AutoTypeWrapper strings={jobs} />}
          </h1>
          <h1>{`';`}</h1> */}
        </div>

        {/* <div className={isLoading ? styles.Loading : styles.Default}> */}
        {/* {open && (
        <div className={opwen ? styles.open : styles.closed}>
          <Loader show={open} />
          <Button onClick={handleClose}>Enter</Button>
        </div>
      )} */}
        <section key="About" ref={aboutRef} className={styles.about}>
          <h2>About</h2>
          <div className={styles.separator} />
          <div className={styles.aboutContent}>
            <div>
              {' '}
              <p>
                Hi, I'm Dan, a front-end developer with 6+ years experience
                creating accessible, cutting-edge User Interfaces. My
                contributions cross an array of industries including &ensp;
                <b>Education</b>, <b>Advertising</b>, and <b>FinTech</b>. I
                haven't always been a programmer, in fact, after completing my
                BS in ChemE and MS in EnvE, I spent several years studying
                groundwater/soil contamination. My favorite duties were mapping
                sites on the computer and creating widgets in python, so I
                devoted my energy to coding. I am now in my seventh year of app
                development, focusing on the front-end with the goal to master
                the full stack.
              </p>
              <p>
                When I'm not programming, I enjoy acting,
                <a
                  id="youtube-button"
                  href="https://www.youtube.com/@treeczar4187/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  sketch comedy
                </a>
                , reading, and playing guitar at open mics. I am looking for a
                new role and always available to collaborate on a new project,
                so feel free to
                <a
                  id="message-button"
                  href="mailto:Danieln.Faro@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  reach out.
                </a>
              </p>
              <p>
                These are a sample of techologies I have been using recently:
                <ul className={styles.aboutLangs}>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>Express</li>
                </ul>
              </p>
            </div>

            <div className={styles.headshotWrapper}>
              <img src={headshot} alt="headshot" />
            </div>
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
          <div className={styles.skillsRow}>
            <Skills />
            {/* <div>
            {width < 640 ? (
              <div>skill list</div>
            ) : width < 768 ? (
              <TextSphereSm />
            ) : width < 1440 ? (
              <TextSphere />
            ) : (
              <TextSphereLg />
            )}
          </div> */}
          </div>
        </section>
        {/* <section
          key="Interests"
          ref={interestsRef}
          className={styles.interests}>
          <h2>Interests</h2>
        </section> */}
        <section
          key="Projects"
          ref={projectsRef}
          className={styles.projectsWrapper}
        >
          <h2>Projects</h2>
          <div className={styles.separator} />
          <div className={styles.project}>
            <div className={styles.calculator}>
              <div className={styles.anchorWrapper}>
                <a href="https://danielfaro.github.io/dog-dashboard/">
                  <div className={styles.imageWrapper}>
                    <img src={dogdashboardImg} alt="dog dashboard Img" />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.calculatorTitle}>
              <h3>Dog Breed Finder</h3>
            </div>
            <div className={styles.calculatorDescription}>
              <p>
                The Dog Breed finder displays the 200 most common breeds and
                allows users to sort and filter table data. In addition, data is
                displayed by scatterplot with life expectancy vs. weight.
              </p>

              <div className={styles.projectLangs}>
                <div>[React Zustand ChartJS styled-components]</div>
                <div className={styles.projectLinks}>
                  <div>
                    <a
                      id="github-button"
                      href="https://github.com/DanielFaro/dog-dashboard/tree/production"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubLogo />
                    </a>
                  </div>
                  <div>
                    <a
                      id="external-link-button"
                      href="https://danielfaro.github.io/dog-dashboard/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLinkLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.luxury}>
              <div className={styles.anchorWrapper}>
                <a href="https://danielfaro.github.io/LuxuryRentals">
                  <div className={styles.imageWrapper}>
                    <img src={rentalsImg} alt="Luxury Img" />
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.luxuryTitle}>
              <h3>Luxury Rentals</h3>
            </div>
            <div className={styles.luxuryDescription}>
              {' '}
              <p>
                'Luxury Rentals' is a proof of concept displaying the available
                luxury vehicles in the area. For this case, Los Angeles was used
                as an example.
              </p>
              <div className={styles.projectLangs}>
                <div>[React MongoDB Express styled-components]</div>
                <div className={styles.projectLinks}>
                  <div>
                    <a
                      id="github-button"
                      href="https://github.com/DanielFaro/LuxuryRentals/tree/master"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubLogo />
                    </a>
                  </div>
                  <div>
                    {' '}
                    <a
                      id="external-link-button"
                      href="https://danielfaro.github.io/LuxuryRentals"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLinkLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.calculator}>
              <div className={styles.anchorWrapper}>
                <a href="https://danielfaro.github.io/calculator-app-ts">
                  <div className={styles.imageWrapper}>
                    <img src={calculatorImg} alt="Calculator Img" />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.calculatorTitle}>
              <h3>SFX Calculator</h3>
            </div>
            <div className={styles.calculatorDescription}>
              <p>
                This is a calculator built in TypeScript and React with an added
                drum effects library. On display of the result, the sounds
                associated with each number are looped over and played in
                succession, creating a drum beat.
              </p>

              <div className={styles.projectLangs}>
                <div>[React TypeScript]</div>
                <div className={styles.projectLinks}>
                  <div>
                    <a
                      id="github-button"
                      href="https://github.com/DanielFaro/calculator-app-ts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubLogo />
                    </a>
                  </div>
                  <div>
                    <a
                      id="external-link-button"
                      href="https://danielfaro.github.io/calculator-app-ts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLinkLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section key="Contacts" ref={contactsRef} className={styles.contacts}>
          <h2>Contacts</h2>
          <p>
            I am looking for new opportunites and always open to collaboration.
            Feel free to say hello.
          </p>
          <a
            id="message-button"
            href="mailto:Danieln.Faro@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.messageBtn}>
              <p>Reach Out</p>
            </button>
          </a>
        </section>
        <div
          className={
            width > 768 ? styles.contactLinks : styles.mobileContactLinks
          }
        >
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
        </div>

        <section key="footer" className={styles.footerWrapper}>
          <div className={styles.footer}>Built by Dan Faro</div>
        </section>
      </div>
    </div>
    /* </div> */
    // </div>
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
