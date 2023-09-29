// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sebastian",
  middleName: "",
  lastName: "Holguin",
  message: " Welcome to my developer portfolio! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sebastian-holguin",
    },
    {
      image: "fa-dev",
      url: "https://devpost.com/sebastianholguin",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sebastianholguin/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sebastian.png"),
  imageSize: 375,
  message:
    "I am a current senior at Stony Brook University pursuing my BS in Applied Mathematics & Statistics and Information Systems. I am very interested in learning new computing software and languages to interlink my knowledge of mathematics with programming to collaborate with teams across the field. "+
    "I'm looking to step my foot through the door through entry-level software positions and internships. Welcome to my page!",
  resume: "https://drive.google.com/file/d/1tGo5x3iOheq8Q_4Lvarr4BC_qNgbpjyw/view?usp=sharing"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sebastian-holguin",
  reposLength: 0,
  specificRepos: ["Webpage-Portfolio", "pod-3.1.4-portfolio", "Sneakerscape", "Fitlio"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 70 },
    { name: "Data Structures", value: 70 },
    { name: "React", value: 65 },
    { name: "JavaScript", value: 70 },
    { name: "MaterialUI", value: 75}
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering Apprenticeships! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sebastian.holguin100@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer 1',
      companylogo: require('../assets/img/jpmorganchase.png'),
      date: 'May 2023',
    },
    {
      role: 'Site Reliability Engineering Fellow',
      companylogo: require('../assets/img/google.png'),
      date: 'September 2022',
    },
    {
      role: 'JPMC Code for Good Participant',// Here Add Company Name
      companylogo: require('../assets/img/jpmorganchase.png'),
      date: 'February 2022',
    },
    {
      role: 'MLH Pre-Fellowship Fellow',
      companylogo: require('../assets/img/mlh.png'),
      date: 'July 2021 - August 2021',
    },
    {
      role: 'Software Engineer Apprentice',
      companylogo: require('../assets/img/codedifferently.png'),
      date: 'June 2021 - August 2021',
    },
    {
      role: 'iOS Development Student',
      companylogo: require('../assets/img/codepath.jpg'),
      date: 'February 2021 - July 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
