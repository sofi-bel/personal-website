import webDev2020S from "../assets/images/certifications/webDeveloper2020Small.jpg";
import webDev2020L from "../assets/images/certifications/webDeveloper2020Big.jpg";
import webDev2020SWebp from "../assets/images/certifications/webDeveloper2020Small.webp";
import webDev2020LWebp from "../assets/images/certifications/webDeveloper2020Big.webp";
import theCompleteJSS from "../assets/images/certifications/theCompleteJavaScriptSmall.jpg";
import theCompleteJSL from "../assets/images/certifications/theCompleteJavaScriptBig.jpg";
import theCompleteJSSWebp from "../assets/images/certifications/theCompleteJavaScriptSmall.webp";
import theCompleteJSLWebp from "../assets/images/certifications/theCompleteJavaScriptBig.webp";
import efSet2022S from "../assets/images/certifications/efSet2022Small.jpg";
import efSet2022L from "../assets/images/certifications/efSet2022Big.jpg";
import efSet2022SWebp from "../assets/images/certifications/efSet2022Small.webp";
import efSet2022LWebp from "../assets/images/certifications/efSet2022Big.webp";
import dockerS from "../assets/images/certifications/dockerSmall.jpg";
import dockerL from "../assets/images/certifications/dockerBig.jpg";
import dockerSWebp from "../assets/images/certifications/dockerSmall.webp";
import dockerLWebp from "../assets/images/certifications/dockerBig.webp";
import webForBegS from "../assets/images/certifications/webDevelopmentForBeginnersSmall.jpg";
import webForBegL from "../assets/images/certifications/webDevelopmentForBeginnersBig.jpg";
import webForBegSWebp from "../assets/images/certifications/webDevelopmentForBeginnersSmall.webp";
import webForBegLWebp from "../assets/images/certifications/webDevelopmentForBeginnersBig.webp";
import fundamentalJSS from "../assets/images/certifications/fundamentalJavaScriptSmall.jpg";
import fundamentalJSL from "../assets/images/certifications/fundamentalJavaScriptBig.jpg";
import fundamentalJSSWebp from "../assets/images/certifications/fundamentalJavaScriptSmall.webp";
import fundamentalJSLWebp from "../assets/images/certifications/fundamentalJavaScriptBig.webp";
import jsBaseS from "../assets/images/certifications/jsBaseSmall.jpg";
import jsBaseL from "../assets/images/certifications/jsBaseBig.jpg";
import jsBaseSWebp from "../assets/images/certifications/jsBaseSmall.webp";
import jsBaseLWebp from "../assets/images/certifications/jsBaseBig.webp";

const certificates = [
  {
    id: 7,
    title: "JavaScript/DOM/Interfaces course",
    alt: "JavaScript/DOM/Interfaces course certificate",
    organization: "learn.javascript.ru",
    issueDate: new Date(2024, 1),
    srcImageSmall: jsBaseS,
    srcImageSmallWebp: jsBaseSWebp,
    srcImageBig: jsBaseL,
    srcImageBigWebp: jsBaseLWebp,
    url: "https://learn.javascript.ru/courses/jsbasic-20231211/sofi-bel/en/certificate.jpg",
  },
  {
    id: 6,
    title: "Fundamental JavaScript",
    alt: "Fundamental JavaScript certificate",
    organization: "Stepik",
    issueDate: new Date(2023, 7),
    srcImageSmall: fundamentalJSS,
    srcImageSmallWebp: fundamentalJSSWebp,
    srcImageBig: fundamentalJSL,
    srcImageBigWebp: fundamentalJSLWebp,
    url: "https://stepik.org/cert/2126076?lang=en",
  },
  {
    id: 5,
    title: "Web Development for Beginners: HTML and CSS",
    alt: "Web Development for Beginners: HTML and CSS certificate",
    organization: "Stepik",
    issueDate: new Date(2023, 4),
    srcImageSmall: webForBegS,
    srcImageSmallWebp: webForBegSWebp,
    srcImageBig: webForBegL,
    srcImageBigWebp: webForBegLWebp,
    url: "https://stepik.org/cert/2016741?lang=en",
  },
  {
    id: 4,
    title: "Docker for beginners + hands-on experience",
    alt: "Docker for beginners + hands-on experience certificate",
    organization: "Stepik",
    issueDate: new Date(2023, 2),
    srcImageSmall: dockerS,
    srcImageSmallWebp: dockerSWebp,
    srcImageBig: dockerL,
    srcImageBigWebp: dockerLWebp,
    url: "https://stepik.org/cert/1943627?lang=en",
  },
  {
    id: 3,
    title: "EF SET English Certificate (B1 Intermediate)",
    alt: "EF SET English Certificate (B1 Intermediate) certificate",
    organization: "EF Standard English Test (EF SET)",
    issueDate: new Date(2022, 9),
    srcImageSmall: efSet2022S,
    srcImageSmallWebp: efSet2022SWebp,
    srcImageBig: efSet2022L,
    srcImageBigWebp: efSet2022LWebp,
    url: "https://www.efset.org/cert/UmFXW6",
  },
  {
    id: 2,
    title: "The Complete JavaScript + React Course - From Scratch to Results",
    alt: "The Complete JavaScript + React Course - From Scratch to Results certificate",
    organization: "Udemy",
    issueDate: new Date(2020, 5),
    srcImageSmall: theCompleteJSS,
    srcImageSmallWebp: theCompleteJSSWebp,
    srcImageBig: theCompleteJSL,
    srcImageBigWebp: theCompleteJSLWebp,
    url: "https://www.udemy.com/certificate/UC-538b575f-7834-441b-a9e8-a1a5b0cdc3c0/",
  },
  {
    id: 1,
    title: "WEB Developer 2020",
    alt: "WEB Developer 2020 certificate",
    organization: "Udemy",
    issueDate: new Date(2020, 4),
    srcImageSmall: webDev2020S,
    srcImageSmallWebp: webDev2020SWebp,
    srcImageBig: webDev2020L,
    srcImageBigWebp: webDev2020LWebp,
    url: "https://www.udemy.com/certificate/UC-d0ca602c-fdd7-47bb-a77f-da14dda57aa3/",
  },
];

export { certificates };
