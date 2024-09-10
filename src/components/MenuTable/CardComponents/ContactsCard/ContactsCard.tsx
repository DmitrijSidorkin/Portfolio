import { MenuCard } from "@/components/MenuCard/MenuCard";
import Link from "next/link";

export const ContactsCard = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <h2 className="text-2xl">Contacts:</h2>
      <ul className="list-disc">
        <li className="underline">
          <Link
            href="mailto:dmitrij.sidorkin@gmail.com"
            className="text-sky-600"
          >
            dmitrij.sidorkin@gmail.com
          </Link>
        </li>
        <li>+37062978522</li>
      </ul>
    </div>
  );
};
