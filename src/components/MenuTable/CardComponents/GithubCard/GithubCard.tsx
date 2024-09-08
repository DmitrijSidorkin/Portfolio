import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";
import Link from "next/link";

export const GithubCard = () => {
  return (
    <MenuCard>
      <Link
        target="_blank"
        href="https://github.com/DmitrijSidorkin"
        className="h-full w-full flex items-center justify-center bg-black rounded-3xl"
      >
        <div className="flex-shrink-0">
          <Image
            src="/github.svg"
            alt="profile"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </Link>
    </MenuCard>
  );
};
