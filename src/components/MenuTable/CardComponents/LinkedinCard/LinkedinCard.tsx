import { MenuCard } from "@/components/MenuCard/MenuCard";
import Image from "next/image";
import Link from "next/link";

export const LinkedinCard = () => {
  return (
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/dmitrij-sidorkin-677936277/"
      className="lg:h-96 h-48 w-full flex items-center justify-center bg-black rounded-xl hover:bg-white hover:bg-opacity-15"
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
  );
};
