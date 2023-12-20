export interface CodeLine {
  prefix: string;
  text: string;
  colorClass: string;
  waitingTime: number;
}

export interface Code {
  lines: CodeLine[];
}

export const codes: Code[] = [
  {
    lines: [
      {
        prefix: "$",
        text: "npx create-next-app@latest",
        colorClass: "text-accent",
        waitingTime: 0,
      },
      {
        prefix: ">",
        text: "Installing dependencies",
        colorClass: "text-info",
        waitingTime: 2000,
      },
      {
        prefix: "-",
        text: "react",
        colorClass: "",
        waitingTime: 500,
      },
      {
        prefix: "-",
        text: "react-dom",
        colorClass: "",
        waitingTime: 500,
      },
      {
        prefix: "-",
        text: "next",
        colorClass: "",
        waitingTime: 500,
      },
      {
        prefix: ">",
        text: "added 333 packages",
        colorClass: "text-info",
        waitingTime: 0,
      },
      {
        prefix: ">",
        text: "found 0 vulnerabilities",
        colorClass: "text-info",
        waitingTime: 0,
      },
      {
        prefix: ">",
        text: "Initialized a git repository.",
        colorClass: "text-info",
        waitingTime: 0,
      },
      {
        prefix: "-",
        text: "Success!",
        colorClass: "text-success",
        waitingTime: 0,
      },
    ],
  },
  {
    lines: [
      {
        prefix: "$",
        text: "flutter create my_app",
        colorClass: "text-accent",
        waitingTime: 0,
      },
      {
        prefix: "-",
        text: "Creating project...",
        colorClass: "",
        waitingTime: 3000,
      },
      {
        prefix: "-",
        text: "All done!",
        colorClass: "",
        waitingTime: 0,
      },
      {
        prefix: ">",
        text: "cd my_app",
        colorClass: "text-info",
        waitingTime: 0,
      },
      {
        prefix: ">",
        text: "flutter analyze",
        colorClass: "text-info",
        waitingTime: 1000,
      },
      {
        prefix: ">",
        text: "flutter test",
        colorClass: "text-info",
        waitingTime: 2000,
      },
      {
        prefix: ">",
        text: "flutter run lib/main.dart",
        colorClass: "text-success",
        waitingTime: 0,
      },
    ],
  },

  {
    lines: [
      {
        prefix: "$",
        text: "npx react-native init MyProject",
        colorClass: "text-accent",
        waitingTime: 0,
      },
      {
        prefix: "-",
        text: "Welcome to react native!",
        colorClass: "",
        waitingTime: 0,
      },
      {
        prefix: "-",
        text: "Downloading template...",
        colorClass: "",
        waitingTime: 3000,
      },
      {
        prefix: "-",
        text: "Installing dependencies...",
        colorClass: "",
        waitingTime: 2000,
      },
      {
        prefix: "-",
        text: "All done!",
        colorClass: "text-success",
        waitingTime: 0,
      },
    ],
  },
];
