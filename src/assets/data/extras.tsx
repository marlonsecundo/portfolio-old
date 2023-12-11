import React from "react";
import { GiDiamondRing, GiDinosaurRex, GiRaiseZombie } from "react-icons/gi";
import { FaCow } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

export const extras = [
  {
    link: "https://alinny-davi.vercel.app",
    text: "Alinny e Davi",
    icon: <GiDiamondRing color="#F0BCD4" size={30}></GiDiamondRing>,
    textColor: "#F0BCD4",
  },
  {
    link: "https://github.com/marlonsecundo/bovcontrol-challenge",
    text: "BovControl",
    icon: <FaCow color="#8FD694" size={30}></FaCow>,
    textColor: "#8FD694",
  },
  {
    link: "https://marlonsecundo.github.io/niver/",
    text: "Niver",
    icon: (
      <LiaBirthdayCakeSolid color="#FE5D9F" size={30}></LiaBirthdayCakeSolid>
    ),
    textColor: "#FE5D9F",
  },
  {
    link: "https://github.com/marlonsecundo/platman",
    text: "platman",
    textColor: "#ad3132",
    imgSrc: "platman.png",
  },
  {
    link: "https://github.com/marlonsecundo/zssn-backend",
    text: "zssn",
    icon: <GiRaiseZombie size={30}></GiRaiseZombie>,
    textColor: "#571d88",
  },
  {
    link: "https://github.com/marlonsecundo/dinorun",
    text: "dino run",
    icon: <GiDinosaurRex color="#1789FC" size={30}></GiDinosaurRex>,
    textColor: "#1789FC",
  },
];
