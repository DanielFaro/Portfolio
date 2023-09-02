const ABOUT = "ABOUT";
const SKILLS = "SKILLS";
const EXPERIENCE = "EXPERIENCE";
const INTERESTS = "INTERESTS";
const CONTACTS = "CONTACTS";

export const links = [ABOUT, EXPERIENCE, SKILLS, INTERESTS];
export const mobileLinks = [ABOUT, EXPERIENCE, SKILLS, INTERESTS, CONTACTS];
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
