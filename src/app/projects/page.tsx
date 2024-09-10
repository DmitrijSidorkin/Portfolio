import { ProjectCard } from "@/components/ProjectCard/ProjectCard";

export default function About() {
  return (
    <main className="flex flex-grow pt-10 justify-center items-start">
      <div className="max-w-screen-lg">
        <ProjectCard
          title="Pixelify"
          image="/pixelify-preview.jpg"
          gitlink="https://github.com/DmitrijSidorkin/pixel-thing?tab=readme-ov-file"
          description="Pixelify is a simple app that uses RAWG.io API to fetch random video game data, and turns it into a quiz with a pixelated image of a video game and 4 guesses to chose from. It also has global highscore tracking for registered users and after the quiz session detailed information for every pixelated game can be viewed."
        />
      </div>
    </main>
  );
}
