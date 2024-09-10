import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";
import Link from "next/link";

export const GithubCard = () => {
  return (
    <Link
      target="_blank"
      href="https://github.com/DmitrijSidorkin"
      className="lg:h-96 h-48 w-full flex items-center justify-center bg-black rounded-xl hover:bg-white hover:bg-opacity-15"
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
  );
};
