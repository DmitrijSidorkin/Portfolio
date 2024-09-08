import { MenuCard } from "@/components/MenuCard/MenuCard";
import classNames from "classnames";
import { TableRow } from "../TableRow/TableRow";
import { TableDiv } from "../TableDiv/TableDiv";

export const TableSmall = () => {
  return (
    <table className="border-separate table md:hidden w-full min-w-96 table-fixed border-spacing-5">
      <tbody className="w-full">
        <TableRow>
          <TableDiv colSpan={2}>
            <MenuCard>
              <p>Me</p>
            </MenuCard>
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv colSpan={2}>
            <MenuCard>
              <p>experience</p>
            </MenuCard>
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <MenuCard>
              <p>github</p>
            </MenuCard>
          </TableDiv>
          <TableDiv>
            <MenuCard>
              <p>linkedin</p>
            </MenuCard>
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv colSpan={2}>
            <MenuCard>
              <p>contacts</p>
            </MenuCard>
          </TableDiv>
        </TableRow>
      </tbody>
    </table>
  );
};
