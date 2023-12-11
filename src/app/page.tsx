import About from "./views/about";
import Initial from "./views/initial";
import Skills from "./views/skills";
import Works from "./views/works";

export default function Home() {
  return (
    <main className="flex flex-col w-full m-0 p-0 bg-base-100">
      <div className="z-10 bg-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <Initial></Initial>
          <Skills></Skills>
          <Works></Works>
        </div>
        <div className="h-screen bg-transparent pointer-events-none"></div>
      </div>

      <div className="fixed top-0 z-0 ">
        <About></About>
      </div>
    </main>
  );
}
