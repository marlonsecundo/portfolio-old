import { DevType, Work } from "@/app/models/work";
import { technologies } from "./technologies";

export const works: Work[] = [
  {
    textColor: "colors.background",
    cardColor: "#edb926",
    title: "ANOTAÍ",
    srcImg: "anotai.png",
    link: "", // Add the link if available
    srcImgWidth: "60%",
    paddingImageBottom: "", // Add paddingImageBottom if available
    technologies: [
      technologies[6],
      technologies[1],
      technologies[2],
      technologies[18],
      technologies[13],
    ],
    expText:
      "I worked building the REST API, also as frontend developing the application in react native, both from scratch.",
    bulletPoints: "BACKEND, MOBILE",
    year: "2018",
    description:
      "Application created for order fulfillment and management in restaurants",
    devType: DevType.MOBILE,
  },
  // {
  //   textColor: "#FFFFFF",
  //   cardColor: "#5c81c2",
  //   title: "MULTIPROVA",
  //   srcImg: "multiprova.png",
  //   link: "https://site.multiprova.ufrn.br/",
  //   srcImgWidth: "60%",
  //   paddingImageBottom: "",
  //   technologies: [Technologies.REACT_JS, Technologies.JAVA],
  //   expText:
  //     "I was responsible for implementing the native service of real-time processing of the camera input, in order to analyze the templates and send the answers.",
  //   bulletPoints: "MOBILE, JAVA, NATIVE CODE",
  //   year: "2019",
  //   description:
  //     "Application for SIGAA to automatic correction of tests and sending responses",
  //   devType: DevType.MOBILE,
  // },
  // {
  //   textColor: colors.background,
  //   cardColor: "#FFFFFF",
  //   title: "SMART RETAIL",
  //   srcImg: "smart-retail.png",
  //   link: "", // Add the link if available
  //   srcImgWidth: "65%",
  //   paddingImageBottom: "5rem",
  //   technologies: [],
  //   expText:
  //     "In addition to the development and delivery of features, I worked in the team management, release and production stage, as well as in the process of design and evaluation of issues.",
  //   bulletPoints: "MOBILE, SCRUM, DEVOPS, PLANNING POKER, DAILY MEETINGS, DOCS",
  //   year: "2021",
  //   description:
  //     "SmartRetail - Platform for Acquisition, Transformation and Analysis of Retail Sales Data",
  //   devType: DevType.MOBILE,
  // },
  // {
  //   textColor: colors.primary,
  //   cardColor: "#016191",
  //   title: "SASMINE",
  //   srcImg: "sascar.png",
  //   link: "", // Add the link if available
  //   srcImgWidth: "60%",
  //   paddingImageBottom: "", // Add paddingImageBottom if available
  //   technologies: [],
  //   expText:
  //     "I worked developing one of the company's main products which consisted of fleet management and vehicle and cargo monitoring, as well as driver journey management.",
  //   bulletPoints:
  //     "MOBILE, SCRUM, PLANNING POKER, DAILY MEETINGS, CODE REVIEW, S.O.L.I.D",
  //   year: "2022",
  //   description: "SASMINE is an application for mining operations",
  //   devType: DevType.MOBILE,
  // },
  // {
  //   textColor: colors.primary,
  //   cardColor: "black",
  //   title: "CHATTY",
  //   srcImg: "chatty.png",
  //   link: "https://play.google.com/store/apps/details?id=com.marlonsecundo.chatty",
  //   srcImgWidth: "40%",
  //   paddingImageBottom: "10rem",
  //   technologies: [
  //     Technologies.TYPESCRIPT,
  //     Technologies.REACT_JS,
  //     Technologies.FIREBASE,
  //   ],
  //   expText:
  //     "I developed the entire application, and it's published in Google Play",
  //   bulletPoints: "MOBILE, REACT NATIVE, EXPO, CONTEXT API, HOOKS, SOCIAL AUTH",
  //   year: "2022",
  //   description:
  //     "Social app with posts, profile, and likes. Users need to have a Google account to access the application",
  //   devType: DevType.MOBILE,
  // },
  {
    textColor: "colors.background",
    cardColor: "white",
    title: "AUTONOMUS",
    srcImg: "autonomus.png",
    link: "https://revela.lais.ufrn.br/projetos/autonomus/",
    srcImgWidth: "70%",
    paddingImageBottom: "10rem",
    technologies: [
      technologies[2],
      technologies[9],
      technologies[1],
      technologies[3],
    ],
    expText: "I worked as a desktop developer on new features of the system.",
    bulletPoints: "DESKTOP, BACKEND",
    year: "2021",
    description:
      "Autonomous aims to promote greater autonomy for patients with Amyotrophic Lateral Sclerosis (ALS) who are no longer able to communicate and who need to use expensive equipment.",
    devType: DevType.FRONTEND,
  },
  // {
  //   textColor: colors.background,
  //   cardColor: "#F4F9E9",
  //   title: "AEDES",
  //   srcImg: "aedes.png",
  //   paddingImageBottom: "5rem",
  //   srcImgWidth: "50%",
  //   link: "https://portal.imd.ufrn.br/portal/noticias/6084/aeronave-de-defesa-social-marca-primeiro-pedido-de-patente-do-smart-metropolis",
  //   technologies: [
  //     Technologies.TYPESCRIPT,
  //     Technologies.PYTHON,
  //     Technologies.ELECTRON,
  //     Technologies.REACT_JS,
  //     Technologies.ZEROMQ,
  //     Technologies.REDUX,
  //     Technologies.STYLED_COMPONENTS,
  //   ],
  //   expText:
  //     "I worked building a drone control base station desktop application. I was also responsible for implementing the message exchange system.",
  //   bulletPoints: "DESKTOP, BACKEND, SCRUM",
  //   year: "2020",
  //   description:
  //     "The AEDES project - Aircraft for Social Defense - increased with the objective of patrolling the UFRN campus, bringing security to students and university employees.",
  //   devType: DevType.FRONTEND,
  // },

  {
    textColor: "colors.background",
    cardColor: "white",
    title: "TRANSFORMA RN",
    srcImg: "transformarn.png",
    paddingImageBottom: "10rem",
    srcImgWidth: "40%",
    link: "https://transformarn.imd.ufrn.br/",
    technologies: [technologies[4], technologies[7], technologies[20]],
    expText: "",
    bulletPoints: "BACKEND, EXPRESS, POSTGRES, EJS",
    year: "2022",
    description:
      "The first step towards transformation is the consciousness that needs to constantly evolve.",
    devType: DevType.BACKEND,
  },
  // {
  //   textColor: colors.primary,
  //   cardColor: "black",
  //   title: "CHATTY SERVER",
  //   srcImg: "chatty.png",
  //   paddingImageBottom: "10rem",
  //   srcImgWidth: "40%",
  //   link: "https://play.google.com/store/apps/details?id=com.marlonsecundo.chatty",
  //   technologies: [
  //     Technologies.TYPESCRIPT,
  //     Technologies.ADONIS_JS,
  //     Technologies.DOCKER,
  //     Technologies.FIREBASE,
  //     Technologies.POSTGRES,
  //   ],
  //   expText:
  //     "I developed the server app, currently running on Heroku. The source code is on GitHub.",
  //   bulletPoints: "BACKEND, SOCIAL AUTH, DOCKER",
  //   year: "2022",
  //   description:
  //     "Social app with posts, profile, and likes. Users need to have a Google account to access the application.",
  //   devType: DevType.BACKEND,
  // },
  // {
  //   textColor: colors.primary,
  //   cardColor: "#222327",
  //   title: "GITHUB",
  //   srcImg: "octocat.png",
  //   link: "https://github.com/marlonsecundo",
  //   srcImgWidth: "100%",
  //   technologies: [],
  //   expText: "",
  //   bulletPoints: "",
  //   enableHoverEffect: false,
  //   devType: DevType.BACKEND,
  //   description: "More projects on GitHub!",
  // },
];
