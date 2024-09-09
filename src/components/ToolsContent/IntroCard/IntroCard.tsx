import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";

export const IntroCard = () => {
  return (
    <div className="w-fit">
      <MenuCard>
        <div className="flex flex-col items-center md:flex-row md:justify-normal gap-2 px-6 py-4 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dyguovdbc/image/upload/v1725902425/pfp_ocfh5u.jpg"
            alt="profile"
            width={150}
            height={150}
            className="rounded-full"
          />
          <p className="md:pl-5 text-xl grow">
            My name is Dmitrij Sidorkin, and I am a self-taught aspiring
            front-end developer, and have solid foundations in HTML, CSS,
            Javascript, React and Typescript, with beginnings in React Native. I
            am a tech enthusiast with a passion for computers and a wide array
            of skills in both computer hardware and software.
          </p>
        </div>
      </MenuCard>
    </div>
  );
};
