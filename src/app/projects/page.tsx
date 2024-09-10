import { ProjectCard } from "@/components/ProjectCard/ProjectCard";

const projectsData = [
  {
    title: "Pixelify",
    image: "/pixelify-preview.jpg",
    gitlink: "https://github.com/DmitrijSidorkin/Pixelify",
    description:
      "Pixelify is a simple app that uses RAWG.io API to fetch random video game data, and turns it into a quiz with a pixelated image of a video game and 4 guesses to chose from. It also has global highscore tracking for registered users and after the quiz session detailed information for every pixelated game can be viewed.",
  },
  {
    title: "Lunch App (Sourcery Academy Team Project)",
    image: "/lunch-app-preview.jpg",
    gitlink: "https://github.com/DmitrijSidorkin/Lunch-App-Sourcery-Academy-",
    description:
      "A private company lunch app that allows its workers to order food straight to the workplace, with free lunches every Friday! This is purely a front-end mock version of such app.",
  },
];

export default function About() {
  return (
    <main className="flex flex-grow pt-10 justify-center items-start">
      <div className="max-w-screen-lg flex flex-col gap-5">
        {projectsData.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              gitlink={project.gitlink}
              description={project.description}
            />
          );
        })}
      </div>
    </main>
  );
}
