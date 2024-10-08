import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";

export const MeCard = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 px-6 py-4 w-full h-fit">
      <div className="flex-shrink-0 self-center xl:self-start">
        <img src="/pfp.jpg" alt="profile" className="w-36 h-36 rounded-full" />
      </div>
      <p className="text-xl grow">
        My name is Dmitrij Sidorkin, and I am a self-taught aspiring front-end
        developer, and have solid foundations in HTML, CSS, Javascript, React
        and Typescript, with beginnings in React Native. I am a tech enthusiast
        with a passion for computers and a wide array of skills in both computer
        hardware and software.
      </p>
    </div>
  );
};
