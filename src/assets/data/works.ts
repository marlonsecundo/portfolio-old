import { DevType, Work } from "@/app/models/work";
import { technologies } from "./technologies";

export const works = {
  en: [
    {
      textColor: "colors.background",
      cardColor: "#edb926",
      title: "ANOTAÍ",
      srcImg: "anotai.png",
      link: "", // Add the link if available
      srcImgWidth: "60%",
      paddingImageBottom: "", // Add paddingImageBottom if available
      technologies: [
        technologies[12],
        technologies[2],
        technologies[17],
        technologies[6],

        technologies[1],
      ],
      expText:
        "I worked building the REST API, also as frontend developing the application in react native, both from scratch.",
      bulletPoints: "BACKEND, MOBILE",
      year: "2018",
      description:
        "Application created for order fulfillment and management in restaurants",
      devType: DevType.MOBILE,
    },
    {
      textColor: "#FFFFFF",
      cardColor: "#5c81c2",
      title: "MULTIPROVA",
      srcImg: "multiprova.png",
      link: "https://site.multiprova.ufrn.br/",
      srcImgWidth: "60%",
      paddingImageBottom: "",
      technologies: [technologies[2], technologies[11]],
      expText:
        "I was responsible for implementing the native service of real-time processing of the camera input, in order to analyze the templates and send the answers.",
      bulletPoints: "MOBILE, JAVA, NATIVE CODE",
      year: "2019",
      description:
        "Application for SIGAA to automatic correction of tests and sending responses",
      devType: DevType.MOBILE,
    },
    {
      textColor: "colors.background",
      cardColor: "#FFFFFF",
      title: "SMART RETAIL",
      srcImg: "smart-retail.png",
      link: "", // Add the link if available
      srcImgWidth: "65%",
      paddingImageBottom: "5rem",
      technologies: [],
      expText:
        "In addition to the development and delivery of features, I worked in the team management, release and production stage, as well as in the process of design and evaluation of issues.",
      bulletPoints:
        "MOBILE, SCRUM, DEVOPS, PLANNING POKER, DAILY MEETINGS, DOCS",
      year: "2021",
      description:
        "SmartRetail - Platform for Acquisition, Transformation and Analysis of Retail Sales Data",
      devType: DevType.MOBILE,
    },
    {
      textColor: "colors.primary",
      cardColor: "#016191",
      title: "SASMINE",
      srcImg: "sascar.png",
      link: "", // Add the link if available
      srcImgWidth: "60%",
      paddingImageBottom: "", // Add paddingImageBottom if available
      technologies: [],
      expText:
        "I worked developing one of the company's main products which consisted of fleet management and vehicle and cargo monitoring, as well as driver journey management.",
      bulletPoints:
        "MOBILE, SCRUM, PLANNING POKER, DAILY MEETINGS, CODE REVIEW, S.O.L.I.D",
      year: "2022",
      description: "SASMINE is an application for mining operations",
      devType: DevType.MOBILE,
    },
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
    {
      textColor: "colors.background",
      cardColor: "#F4F9E9",
      title: "AEDES",
      srcImg: "aedes.png",
      paddingImageBottom: "5rem",
      srcImgWidth: "50%",
      link: "https://portal.imd.ufrn.br/portal/noticias/6084/aeronave-de-defesa-social-marca-primeiro-pedido-de-patente-do-smart-metropolis",
      technologies: [
        technologies[5],
        technologies[9],
        technologies[3],
        technologies[2],
        technologies[16],
        technologies[17],
        technologies[12],
      ],
      expText:
        "I worked building a drone control base station desktop application. I was also responsible for implementing the message exchange system.",
      bulletPoints: "DESKTOP, BACKEND, SCRUM",
      year: "2020",
      description:
        "The AEDES project - Aircraft for Social Defense - increased with the objective of patrolling the UFRN campus, bringing security to students and university employees.",
      devType: DevType.FRONTEND,
    },

    {
      textColor: "colors.background",
      cardColor: "white",
      title: "TRANSFORMA RN",
      srcImg: "transformarn.png",
      paddingImageBottom: "10rem",
      srcImgWidth: "40%",
      link: "https://transformarn.imd.ufrn.br/",
      technologies: [technologies[4], technologies[7], technologies[19]],
      expText: "",
      bulletPoints: "BACKEND, EXPRESS, POSTGRES, EJS",
      year: "2022",
      description:
        "The first step towards transformation is the consciousness that needs to constantly evolve.",
      devType: DevType.BACKEND,
    },
  ],

  pt: [
    {
      textColor: "colors.background",
      cardColor: "#edb926",
      title: "ANOTAÍ",
      srcImg: "anotai.png",
      link: "", // Adicione o link se disponível
      srcImgWidth: "60%",
      paddingImageBottom: "", // Adicione paddingImageBottom se disponível
      technologies: [
        technologies[12],
        technologies[2],
        technologies[17],
        technologies[6],
        technologies[1],
      ],
      expText:
        "Trabalhei na construção da API REST e também no desenvolvimento do frontend da aplicação em React Native, ambos do zero.",
      bulletPoints: "BACKEND, MOBILE",
      year: "2018",
      description: "Aplicativo criado para gestão de pedidos em restaurantes",
      devType: DevType.MOBILE,
    },
    {
      textColor: "#FFFFFF",
      cardColor: "#5c81c2",
      title: "MULTIPROVA",
      srcImg: "multiprova.png",
      link: "https://site.multiprova.ufrn.br/",
      srcImgWidth: "60%",
      paddingImageBottom: "",
      technologies: [technologies[2], technologies[11]],
      expText:
        "Fui responsável por implementar o serviço nativo de processamento em tempo real da entrada da câmera, para analisar os gabaritos e enviar as respostas.",
      bulletPoints: "MOBILE, JAVA, CÓDIGO NATIVO",
      year: "2019",
      description:
        "Aplicativo para o SIGAA para correção automática de testes e envio de respostas",
      devType: DevType.MOBILE,
    },
    {
      textColor: "colors.background",
      cardColor: "#FFFFFF",
      title: "SMART RETAIL",
      srcImg: "smart-retail.png",
      link: "", // Adicione o link se disponível
      srcImgWidth: "65%",
      paddingImageBottom: "5rem",
      technologies: [],
      expText:
        "Além do desenvolvimento e entrega de funcionalidades, trabalhei na gestão da equipe, na fase de lançamento e produção, assim como no processo de design e avaliação de questões.",
      bulletPoints:
        "MOBILE, SCRUM, DEVOPS, PLANNING POKER, REUNIÕES DIÁRIAS, DOCUMENTAÇÃO",
      year: "2021",
      description:
        "SmartRetail - Plataforma para Aquisição, Transformação e Análise de Dados de Vendas no Varejo",
      devType: DevType.MOBILE,
    },
    {
      textColor: "colors.primary",
      cardColor: "#016191",
      title: "SASMINE",
      srcImg: "sascar.png",
      link: "", // Adicione o link se disponível
      srcImgWidth: "60%",
      paddingImageBottom: "", // Adicione paddingImageBottom se disponível
      technologies: [],
      expText:
        "Trabalhei no desenvolvimento de um dos principais produtos da empresa, que consistia em gerenciamento de frota e monitoramento de veículos e cargas, além do gerenciamento de jornadas dos motoristas.",
      bulletPoints:
        "MOBILE, SCRUM, PLANNING POKER, REUNIÕES DIÁRIAS, REVISÃO DE CÓDIGO, S.O.L.I.D",
      year: "2022",
      description: "SASMINE é um aplicativo para operações de mineração",
      devType: DevType.MOBILE,
    },
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
      expText:
        "Trabalhei como desenvolvedor desktop em novas funcionalidades do sistema.",
      bulletPoints: "DESKTOP, BACKEND",
      year: "2021",
      description:
        "Autonomous tem como objetivo promover maior autonomia para pacientes com Esclerose Lateral Amiotrófica (ELA) que não conseguem mais se comunicar e precisam usar equipamentos caros.",
      devType: DevType.FRONTEND,
    },
    {
      textColor: "colors.background",
      cardColor: "#F4F9E9",
      title: "AEDES",
      srcImg: "aedes.png",
      paddingImageBottom: "5rem",
      srcImgWidth: "50%",
      link: "https://portal.imd.ufrn.br/portal/noticias/6084/aeronave-de-defesa-social-marca-primeiro-pedido-de-patente-do-smart-metropolis",
      technologies: [
        technologies[5],
        technologies[9],
        technologies[3],
        technologies[2],
        technologies[16],
        technologies[17],
        technologies[12],
      ],
      expText:
        "Trabalhei na construção de uma aplicação desktop para estação base de controle de drone. Também fui responsável por implementar o sistema de troca de mensagens.",
      bulletPoints: "DESKTOP, BACKEND, SCRUM",
      year: "2020",
      description:
        "O projeto AEDES - Aeronave para Defesa Social - aumentou com o objetivo de patrulhar o campus da UFRN, trazendo segurança para estudantes e funcionários da universidade.",
      devType: DevType.FRONTEND,
    },
    {
      textColor: "colors.background",
      cardColor: "white",
      title: "TRANSFORMA RN",
      srcImg: "transformarn.png",
      paddingImageBottom: "10rem",
      srcImgWidth: "40%",
      link: "https://transformarn.imd.ufrn.br/",
      technologies: [technologies[4], technologies[7], technologies[19]],
      expText: "",
      bulletPoints: "BACKEND, EXPRESS, POSTGRES, EJS",
      year: "2022",
      description:
        "O primeiro passo para a transformação é a consciência de que é preciso evoluir constantemente.",
      devType: DevType.BACKEND,
    },
  ],
};
