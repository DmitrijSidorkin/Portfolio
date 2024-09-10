import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";

export const IntroCard = () => {
  return (
    <div className="w-fit">
      <MenuCard>
        <div className="flex flex-col items-center md:flex-row md:justify-normal gap-2 px-6 py-4 w-full h-full">
          <img
            src="/pfp.jpg"
            alt="profile"
            className="w-36 h-36 rounded-full"
          />
          <p className="md:pl-5 text-xl grow">
            Here I list a number of tools that have been relevant to my work as
            a developer, as well as some other, perhaps less relevant, but still
            potentially useful tools that I am proficient in.
          </p>
        </div>
      </MenuCard>
    </div>
  );
};
