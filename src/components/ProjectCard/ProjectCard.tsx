import Link from "next/link";
import { MenuCard } from "../MenuCard/MenuCard";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  gitlink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  gitlink,
}) => {
  return (
    <Link
      href={gitlink}
      target="_blank"
      className="block m-3w-full h-full overflow-hidden"
    >
      <MenuCard>
        <div className="flex lg:flex-row flex-col items-center hover:bg-white hover:bg-opacity-15">
          <Image
            src={image}
            width={480}
            height={270}
            alt={`${title} preview`}
            className="rounded-xl h-full lg:pl-1 pl-0"
          />
          <div className="p-8">
            <h2 className="text-5xl lg:pb-10 text-center pb-6">{title}</h2>
            <p className="text-xl text-justify">{description}</p>
          </div>
        </div>
      </MenuCard>
    </Link>
  );
};
