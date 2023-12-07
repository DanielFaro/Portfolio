const ABOUT = "ABOUT";
const SKILLS = "SKILLS";
const EXPERIENCE = "EXPERIENCE";
const PROJECTS = "PROJECTS";
const CONTACTS = "CONTACTS";

export const links = [ABOUT, EXPERIENCE, SKILLS, PROJECTS];
export const mobileLinks = [ABOUT, EXPERIENCE, SKILLS, PROJECTS, CONTACTS];
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
