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
    <div className="w-56 h-56">
      <MenuCard>
        <div className="flex flex-col h-full px-3 py-5">
          <Image
            src={image}
            width={80}
            height={80}
            alt={`${name}`}
            className="pb-5 max-w-20 max-h-20"
          />
          <h2 className="text-xl pl-2 font-bold pb-4">{name}</h2>
          <p className="line-clamp-3 text-sm text-justify">{description}</p>
        </div>
      </MenuCard>
    </div>
  );
};
