import { Production } from "@/app/models/production";
import { FaGooglePlay } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

export const productions: Production[] = [
  {
    title: "Chatty",
    description:
      "Social app with posts, profile, likes and firebase notification.",
    icon: <FaGooglePlay />,
    imgSrc: "chatty.png",
    link: "https://play.google.com/store/apps/details?id=com.marlonsecundo.chatty",
  },
  {
    title: "Aliny e Davi",
    description: "Wedding Site Event",
    icon: <GoBrowser />,
    imgSrc: "wedding.png",
    link: "https://alinny-davi.vercel.app/",
  },
];
