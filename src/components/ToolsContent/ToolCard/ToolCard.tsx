import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";

interface ToolCardProps {
  image: string;
  name: string;
  description: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  image,
  name,
  description,
}) => {
  return (
    <div className="w-72 h-72">
      <MenuCard>
        <div className="flex flex-col h-full p-3">
          <Image
            src={image}
            width={100}
            height={100}
            alt={`${name}`}
            className="rounded-full pb-5"
          />
          <h2 className="text-3xl pb-4">{name}</h2>
          <p className="line-clamp-3 text-xl">{description}</p>
        </div>
      </MenuCard>
    </div>
  );
};
