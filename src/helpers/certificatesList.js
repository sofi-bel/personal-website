import webDeveloper2020 from "../assets/images/certifications/webDeveloper2020.jpg";
import webDeveloper2020Webp from "../assets/images/certifications/webDeveloper2020.webp";
import theCompleteJavaScript from "../assets/images/certifications/theCompleteJavaScript.jpg";
import theCompleteJavaScriptWebp from "../assets/images/certifications/theCompleteJavaScript.webp";
import efSet2022 from "../assets/images/certifications/efSet2022.png";
import efSet2022Webp from "../assets/images/certifications/efSet2022.webp";
import docker from "../assets/images/certifications/docker.png";
import dockerWebp from "../assets/images/certifications/docker.webp";
import wВForBeginners from "../assets/images/certifications/webDevelopmentForBeginners.png";
import wВForBeginnersWebp from "../assets/images/certifications/webDevelopmentForBeginners.webp";
import fundamentalJavaScript from "../assets/images/certifications/fundamentalJavaScript.png";
import fundamentalJavaScriptWebp from "../assets/images/certifications/fundamentalJavaScript.webp";

const certificates = [
  {
    id: 6,
    title: "Fundamental JavaScript",
    alt: "Fundamental JavaScript certificate",
    organization: "Stepik",
    issueDate: new Date(2023, 7),
    fallback: fundamentalJavaScript,
    srcWebp: fundamentalJavaScriptWebp,
    url: "https://stepik.org/cert/2126076?lang=en",
  },
  {
    id: 5,
    title: "Web Development for Beginners: HTML and CSS",
    alt: "Web Development for Beginners: HTML and CSS certificate",
    organization: "Stepik",
    issueDate: new Date(2023, 4),
    fallback: wВForBeginners,
    srcWebp: wВForBeginnersWebp,
    url: "https://stepik.org/cert/2016741?lang=en",
  },
  {
    id: 4,
    title: "Docker for beginners + hands-on experience",
    alt: "Docker for beginners + hands-on experience certificate",
    organization: "Stepik",
    issueDate: new Date(2023, 2),
    fallback: docker,
    srcWebp: dockerWebp,
    url: "https://stepik.org/cert/1943627?lang=en",
  },
  {
    id: 3,
    title: "EF SET English Certificate (B1 Intermediate)",
    alt: "EF SET English Certificate (B1 Intermediate) certificate",
    organization: "EF Standard English Test (EF SET)",
    issueDate: new Date(2022, 9),
    fallback: efSet2022,
    srcWebp: efSet2022Webp,
    url: "https://www.efset.org/cert/UmFXW6",
  },
  {
    id: 2,
    title: "The Complete JavaScript + React Course - From Scratch to Results",
    alt: "The Complete JavaScript + React Course - From Scratch to Results certificate",
    organization: "Udemy",
    issueDate: new Date(2020, 5),
    fallback: theCompleteJavaScript,
    srcWebp: theCompleteJavaScriptWebp,
    url: "https://www.udemy.com/certificate/UC-538b575f-7834-441b-a9e8-a1a5b0cdc3c0/",
  },
  {
    id: 1,
    title: "WEB Developer 2020",
    alt: "WEB Developer 2020 certificate",
    organization: "Udemy",
    issueDate: new Date(2020, 4),
    fallback: webDeveloper2020,
    srcWebp: webDeveloper2020Webp,
    url: "https://www.udemy.com/certificate/UC-d0ca602c-fdd7-47bb-a77f-da14dda57aa3/",
  },
];

export { certificates };
