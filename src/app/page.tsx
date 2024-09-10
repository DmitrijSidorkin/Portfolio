import { TableBig } from "@/components/MenuTable/TableBig/TableBig";
import { TableMedium } from "@/components/MenuTable/TableMedium/TableMedium";
import { TableSmall } from "@/components/MenuTable/TableSmall/TableSmall";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TableBig />
      <TableMedium />
      <TableSmall />
    </main>
  );
}
