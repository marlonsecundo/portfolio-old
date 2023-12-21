import About from "./views/about";
import Initial from "./views/initial";
import Productions from "./views/productions";
import Skills from "./views/skills";
import Works from "./views/works";

export default function Home() {
  return (
    <main className="flex flex-col w-full m-0 p-0">
      <div className="z-10 bg-transparent pointer-events-none">
        <div className="pointer-events-auto bg-base-100">
          <Initial></Initial>
          <Skills></Skills>
          <Works></Works>
          <Productions></Productions>
        </div>
        <div
          id="about"
          className="h-screen bg-transparent pointer-events-none lg:snap-start "
        ></div>
      </div>
      <div className="fixed top-0 z-0 w-full ">
        <About></About>
      </div>
    </main>
  );
}
