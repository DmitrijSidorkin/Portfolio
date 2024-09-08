import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";
import Link from "next/link";

export const LinkedinCard = () => {
  return (
    <MenuCard>
      {" "}
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/dmitrij-sidorkin-677936277/"
        className="h-full w-full flex items-center justify-center bg-black rounded-3xl"
      >
        <div className="flex-shrink-0">
          <Image
            src="/linkedin.svg"
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
