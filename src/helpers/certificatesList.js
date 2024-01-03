import webDeveloper2020 from "../assets/images/certifications/webDeveloper2020.jpg";
import theCompleteJavaScript from "../assets/images/certifications/theCompleteJavaScript.jpg";
import efSet2022 from "../assets/images/certifications/efSet2022.png";
import docker from "../assets/images/certifications/docker.png";
import wВForBeginners from "../assets/images/certifications/webDevelopmentForBeginners.png";
import fundamentalJavaScript from "../assets/images/certifications/fundamentalJavaScript.png";

const certificates = [
  {
    id: 6,
    title: "Fundamental JavaScript",
    organization: "Stepik",
    issueDate: new Date(2023, 7),
    img: fundamentalJavaScript,
    url: "https://stepik.org/cert/2126076?lang=en",
  },
  {
    id: 5,
    title: "Web Development for Beginners: HTML and CSS",
    organization: "Stepik",
    issueDate: new Date(2023, 4),
    img: wВForBeginners,
    url: "https://stepik.org/cert/2016741?lang=en",
  },
  {
    id: 4,
    title: "Docker for beginners + hands-on experience",
    organization: "Stepik",
    issueDate: new Date(2023, 2),
    img: docker,
    url: "https://stepik.org/cert/1943627?lang=en",
  },
  {
    id: 3,
    title: "EF SET English Certificate (B1 Intermediate)",
    organization: "EF Standard English Test (EF SET)",
    issueDate: new Date(2022, 9),
    img: efSet2022,
    url: "https://www.efset.org/cert/UmFXW6",
  },
  {
    id: 2,
    title: "The Complete JavaScript + React Course - From Scratch to Results",
    organization: "Udemy",
    issueDate: new Date(2020, 5),
    img: theCompleteJavaScript,
    url: "https://www.udemy.com/certificate/UC-538b575f-7834-441b-a9e8-a1a5b0cdc3c0/",
  },
  {
    id: 1,
    title: "WEB Developer 2020",
    organization: "Udemy",
    issueDate: new Date(2020, 4),
    img: webDeveloper2020,
    url: "https://www.udemy.com/certificate/UC-d0ca602c-fdd7-47bb-a77f-da14dda57aa3/",
  },
];

export {certificates};
