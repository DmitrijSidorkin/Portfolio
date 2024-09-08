import { MenuCard } from "@/components/MenuCard/MenuCard";

export const ExperienceCard = () => {
  return (
    <MenuCard>
      <div className="flex flex-col text-justify p-5 gap-3">
        <p>
          I am a self-taught front-end developer with a strong foundation built
          through various online courses and hands-on projects. My journey began
          with “The Web Developer Bootcamp 2024,” which provided me with
          essential web development skills. I put these fundamentals to test by
          working on a rather sizable personal project, which helped me
          strengthening my foundations in HTML, CSS and Javascript, and also
          serving as an opportunity to familiarize myself with some back-end
          tools such as Express, Node.js and MongoDB.
        </p>
        <p>
          Eager to expand my knowledge, I delved into React basics and later
          joined the Sourcery Academy for Front-End. Here, I worked on a project
          in a small team, during which I strengthened my React knowledge and
          learned Typescript. Throughout the entire project we were using Git
          for version control, with which I was well familiar beforehand, and
          Agile methodologies to optimize our workflow.
        </p>
      </div>
    </MenuCard>
  );
};
