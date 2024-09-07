import { TableBig } from "@/components/MenuTable/TableBig/TableBig";
import { TableSmall } from "@/components/MenuTable/TableSmall/TableSmall";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TableBig />
      <TableSmall />
    </main>
  );
}
