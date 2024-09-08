import { MenuCard } from "@/components/MenuCard/MenuCard";

export const ContactsCard = () => {
  return (
    <MenuCard>
      <div className="flex flex-col h-full w-full px-8 pt-10">
        <h2 className="text-2xl">Contacts:</h2>
        <ul className="list-disc">
          <li className="underline">dmitrij.sidorkin@gmail.com</li>
          <li>+37062978522</li>
        </ul>
      </div>
    </MenuCard>
  );
};
