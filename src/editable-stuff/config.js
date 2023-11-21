// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Rukshan",
  middleName: "Amodya",
  lastName: "Kumarasinghe",
  message: " The world continues to evolve with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/RukshanAmodya2008",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100088184298221&mibextid=ZbWKwL",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rukshan-amodya-bbba87285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      image: "fa-whatsapp",
      url: "https://wa.me/qr/X53ERWNWUTQEI1",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Rukshan.jpeg"),
  imageSize: 375,
  message:
    "My name is Rukshan Amodya. I’m a graduate of 2023 from  SITC Campus with a Diploma in Cyber Securety. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of web designing and Cyber Securety. In my free time I like working on open source projects.",
  resume: "https://wa.me/qr/X53ERWNWUTQEI1",
};

const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "RukshanAmodya2008",
  reposLength: 20,
  specificRepos: [],
};
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Photoshop", value: 70 },
    { name: "UI/UX ", value: 75 },
    { name: "HTML/CSS", value: 95 },
    { name: "Java", value: 60 },
    { name: "JavaScript", value: 76 },
    { name: "MERN Stack", value: 40 },
    { name: "MSSQL/MYSQL/NoSQL", value: 40 },
    { name: "WordPress", value: 80 },
  ],
  softSkills: [
    { name: "Logo designinig", value: 95 },
    { name: "poster designe", value: 75 },
    { name: "cover page", value: 75 },
    { name: "Visiting card", value: 85 },
    { name: "invitation card", value: 75 },
    { name: "thank you card", value: 90 },
    { name: "calender designe", value: 70 },
    { name: "pensil art", value: 90 },
  ],
};

// CONTACTS SECTION
const contact = {
  show: true,
  heading: "Contacts",
};

// FOOTER
const getInTouch = {
  show: true,
  message:
    "I am willing to work as a web developer. If you have any available positions, have any questions, or just want to say hello, please email me at ",
  email: "nmr.amodya@gmail.com",
};

export { navBar, mainBody, about, repos, skills, contact, getInTouch };
