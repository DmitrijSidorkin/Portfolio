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
      className="block h-full overflow-hidden"
    >
      <MenuCard>
        <div className="flex lg:max-h-80 lg:flex-row flex-col items-center rounded-xl hover:bg-white hover:bg-opacity-15">
          <img src={image} alt={title} className="max-h-80 rounded-xl pl-0" />
          <div className="p-8">
            <h2 className="text-5xl lg:pb-10 text-center pb-6">{title}</h2>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      </MenuCard>
    </Link>
  );
};
