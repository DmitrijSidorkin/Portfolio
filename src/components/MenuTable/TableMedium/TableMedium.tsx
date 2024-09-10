import { TableRow } from "../TableRow/TableRow";
import { TableDiv } from "../TableDiv/TableDiv";
import { MeCard } from "../CardComponents/MeCard/MeCard";
import { ExperienceCard } from "../CardComponents/ExperienceCard/ExperienceCard";
import { ContactsCard } from "../CardComponents/ContactsCard/ContactsCard";
import { StatusCard } from "../CardComponents/StatusCard/StatusCard";
import { GithubCard } from "../CardComponents/GithubCard/GithubCard";
import { LinkedinCard } from "../CardComponents/LinkedinCard/LinkedinCard";

export const TableMedium = () => {
  return (
    <table className="border-separate hidden md:table lg:hidden w-full min-w-96 table-fixed border-spacing-5">
      <tbody className="w-full">
        <TableRow>
          <TableDiv colSpan={2}>
            <MeCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv colSpan={2}>
            <ExperienceCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <StatusCard />
          </TableDiv>
          <TableDiv>
            <ContactsCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <GithubCard />
          </TableDiv>
          <TableDiv>
            <LinkedinCard />
          </TableDiv>
        </TableRow>
      </tbody>
    </table>
  );
};
