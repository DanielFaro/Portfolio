const ABOUT = "ABOUT";
const SKILLS = "SKILLS";
const EXPERIENCE = "EXPERIENCE";
const INTERESTS = "INTERESTS";
const CONTACTS = "CONTACTS";

export const links = [ABOUT, SKILLS, EXPERIENCE, INTERESTS];
export const mobileLinks = [ABOUT, SKILLS, EXPERIENCE, INTERESTS, CONTACTS];
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
