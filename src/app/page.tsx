import About from "./views/about";
import Initial from "./views/initial";
import Skills from "./views/skills";
import Works from "./views/works";

export default function Home() {
  return (
    <main className="flex flex-col w-full m-0 p-0 bg-base-100">
      <Initial></Initial>
      <Skills></Skills>
      <Works></Works>
      <About></About>
    </main>
  );
}
