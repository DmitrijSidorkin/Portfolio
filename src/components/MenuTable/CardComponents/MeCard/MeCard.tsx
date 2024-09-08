import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";

export const MeCard = () => {
  return (
    <MenuCard>
      <div className="flex flex-row lg:flex-col gap-2 px-6 py-4 w-full h-full">
        <div className="flex-shrink-0">
          <Image
            src="/pfp.jpg"
            alt="profile"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <p className="text-justify text-xl grow">
          My name is Dmitrij Sidorkin, and I am a tech enthusiast with a passion
          for computers and a wide array of skills in both computer hardware and
          software. I am a self-taught aspiring front-end developer, and have
          solid foundations in HTML, CSS, Javascript and React, with beginnings
          in React Native.
        </p>
      </div>
    </MenuCard>
  );
};
