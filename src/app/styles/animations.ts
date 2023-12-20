export const keyframes = {
  grain: {
    "0%, 100%": {
      transform: "translate(0)",
    },
    "10%": {
      transform: "translate(-5%,-10%)",
    },
    "20%": {
      transform: "translate(-15%,5%)",
    },
    "30%": {
      transform: "translate(7%,-25%)",
    },
    "40%": {
      transform: "translate(-5%,25%)",
    },
    "50%": {
      transform: "translate(-15%,10%)",
    },
    "60%": {
      transform: "translate(15%)",
    },
    "70%": {
      transform: "translateY(15%)",
    },
    "80%": {
      transform: "translate(3%,35%)",
    },
    "90%": {
      transform: "translate(-10%,10%)",
    },
  },

  underline: {
    "0%": {
      opacity: "0",
    },
    "50%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
    },
  },

  fadeLeft: {
    "0%": {
      opacity: "0",
      transform: "translateX(4rem)",
    },
    "100%": {
      opacity: "1",
      transform: "translateX(0)",
    },
  },
  fadeRight: {
    "0%": {
      opacity: "0",
      transform: "translateX(-4rem)",
    },
    "100%": {
      opacity: "1",
      transform: "translateX(0)",
    },
  },
  fadeDown: {
    "0%": {
      opacity: "0",
      transform: "translateY(-1rem)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
  squareToCircle: {
    "0%": {
      "border-radius": "0 0 0 0",
      transform: "rotate(0deg)",
      "border-color": "rgb(240, 218, 80)",
    },

    "100%": {
      "border-radius": "100% 100% 100% 100%",
      transform: "rotate(720deg)",
      "border-color": "rgb(144, 241, 239)",
    },
  },
  circleToSquare: {
    "0%": {
      "border-radius": "100% 100% 100% 100%",
      transform: "rotate(720deg)",
      "border-color": "rgb(144, 241, 239)",
    },
    "100%": {
      "border-radius": "0 0 0 0",
      transform: "rotate(0deg)",
      "border-color": "rgb(240, 218, 80)",
    },
  },

  float: {
    "0%": {
      transform: "translate(0rem, 0px)",
    },
    "50%": {
      transform: "translate(0rem, -10px)",
    },
    "100%": {
      transform: "translate(0rem, 0px)",
    },
  },
};

export const animation = {
  grain: "grain 7s steps(10) infinite",
  underline: "underline 1s ease 0s infinite",
  pulseFast: "pulse 0.8s ease infinite",
  fadeLeft: "fadeLeft 1s ease-out",
  fadeRight: "fadeRight 1s ease-out",
  fadeDown: "fadeDown 0.7s ease-out",

  squareToCircle: "squareToCircle 1s ease-in",
  circleToSquare: "circleToSquare 1s ease-out",
  float: "float 5s ease-in-out infinite",
};
