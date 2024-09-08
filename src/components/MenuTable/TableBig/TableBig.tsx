import { MenuCard } from "@/components/MenuCard/MenuCard";
import { TableRow } from "../TableRow/TableRow";
import { TableDiv } from "../TableDiv/TableDiv";
import Image from "next/image";
import Link from "next/link";
import { MeCard } from "../CardComponents/MeCard/MeCard";
import { ExperienceCard } from "../CardComponents/ExperienceCard/ExperienceCard";
import { StatusCard } from "../CardComponents/StatusCard/StatusCard";
import { GithubCard } from "../CardComponents/GithubCard/GithubCard";
import { LinkedinCard } from "../CardComponents/LinkedinCard/LinkedinCard";
import { ContactsCard } from "../CardComponents/ContactsCard/ContactsCard";

export const TableBig = () => {
  return (
    <table className="border-separate table-fixed hidden lg:table border-spacing-5 ">
      <tbody className="w-full">
        <TableRow>
          <TableDiv colSpan={2}>
            <MeCard />
          </TableDiv>
          <TableDiv rowSpan={2}>
            <ExperienceCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <StatusCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <GithubCard />
          </TableDiv>
          <TableDiv>
            <LinkedinCard />
          </TableDiv>
          <TableDiv>
            <ContactsCard />
          </TableDiv>
        </TableRow>
      </tbody>
    </table>
  );
};
