import { FaCow } from "react-icons/fa6";
import { GiDinosaurRex } from "react-icons/gi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

export const productions = {
  en: [
    {
      title: "Chatty",
      description:
        "Mobile social app with posts, profile, likes and firebase notification.",
      // icon: <FaGooglePlay />,
      imgSrc: "chatty.png",
      link: "https://play.google.com/store/apps/details?id=com.marlonsecundo.chatty",
    },
    {
      link: "https://github.com/marlonsecundo/bovcontrol-challenge",
      title: "BovControl",
      icon: <FaCow color="#8FD694" size={65}></FaCow>,
      description: "Farmer checklist management with offline support",
    },
    {
      title: "Aliny e Davi",
      description: "Wedding Site Event",
      // icon: <GoBrowser />,
      imgSrc: "wedding.png",
      link: "https://alinny-davi.vercel.app/",
    },
    {
      link: "https://marlonsecundo.github.io/niver/",
      title: "Niver",
      icon: (
        <LiaBirthdayCakeSolid color="#FE5D9F" size={60}></LiaBirthdayCakeSolid>
      ),
      description:
        "A comemorative personalized happy birthday site, with a mr robot series theme",
    },
    {
      link: "https://github.com/marlonsecundo/platman",
      title: "platman",
      imgSrc: "platman.png",
      description: "2D plataform game built with monogame",
    },
    {
      link: "https://github.com/marlonsecundo/dinorun",
      title: "dino run",
      icon: <GiDinosaurRex color="#1789FC" size={60}></GiDinosaurRex>,
      description: "2D plataform game built with godot",
    },
    {
      link: "https://personagedle.vercel.app/",
      title: "Personagedle",
      // icon: <VscGame color="#ffffff" size={60}></VscGame>,
      description: "A web word game, with auth, scores, and ranking.",
      imgSrc: "personagedle.png",
    },
  ],
  pt: [
    {
      title: "Chatty",
      description:
        "Aplicativo social móvel com postagens, perfil, curtidas e notificações pelo Firebase.",
      // icon: <FaGooglePlay />,
      imgSrc: "chatty.png",
      link: "https://play.google.com/store/apps/details?id=com.marlonsecundo.chatty",
    },
    {
      link: "https://github.com/marlonsecundo/bovcontrol-challenge",
      title: "BovControl",
      icon: <FaCow color="#8FD694" size={65}></FaCow>,
      description: "Gestão de checklist para agricultores com suporte offline.",
    },
    {
      title: "Aliny e Davi",
      description: "Site de evento de casamento.",
      // icon: <GoBrowser />,
      imgSrc: "wedding.png",
      link: "https://alinny-davi.vercel.app/",
    },
    {
      link: "https://marlonsecundo.github.io/niver/",
      title: "Niver",
      icon: (
        <LiaBirthdayCakeSolid color="#FE5D9F" size={60}></LiaBirthdayCakeSolid>
      ),
      description:
        "Um site comemorativo personalizado de feliz aniversário, com o tema da série Mr. Robot.",
    },
    {
      link: "https://github.com/marlonsecundo/platman",
      title: "platman",
      imgSrc: "platman.png",
      description: "Jogo de plataforma 2D construído com MonoGame.",
    },
    {
      link: "https://github.com/marlonsecundo/dinorun",
      title: "dino run",
      icon: <GiDinosaurRex color="#1789FC" size={60}></GiDinosaurRex>,
      description: "Jogo de plataforma 2D construído com Godot.",
    },
    {
      link: "https://personagedle.vercel.app/",
      title: "Personagedle",
      // icon: <VscGame color="#ffffff" size={60}></VscGame>,
      description:
        "Um jogo de palavras online, com autenticação, pontuações e ranking.",
      imgSrc: "personagedle.png",
    },
  ],
};
