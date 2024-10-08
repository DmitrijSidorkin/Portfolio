import { TableRow } from "../TableRow/TableRow";
import { TableDiv } from "../TableDiv/TableDiv";
import { MeCard } from "../CardComponents/MeCard/MeCard";
import { ExperienceCard } from "../CardComponents/ExperienceCard/ExperienceCard";
import { ContactsCard } from "../CardComponents/ContactsCard/ContactsCard";
import { StatusCard } from "../CardComponents/StatusCard/StatusCard";
import { GithubCard } from "../CardComponents/GithubCard/GithubCard";
import { LinkedinCard } from "../CardComponents/LinkedinCard/LinkedinCard";

export const TableSmall = () => {
  return (
    <table className="border-separate table md:hidden w-full min-w-96 table-fixed border-spacing-5">
      <tbody className="w-full">
        <TableRow>
          <TableDiv>
            <MeCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
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
            <ContactsCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <GithubCard />
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <LinkedinCard />
          </TableDiv>
        </TableRow>
      </tbody>
    </table>
  );
};
