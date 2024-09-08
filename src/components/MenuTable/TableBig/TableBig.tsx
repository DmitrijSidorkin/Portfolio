import classNames from "classnames";
import { MenuCard } from "@/components/MenuCard/MenuCard";
import { TableRow } from "../TableRow/TableRow";
import { TableDiv } from "../TableDiv/TableDiv";

export const TableBig = () => {
  return (
    <table className="border-separate table-fixed hidden md:table border-spacing-5">
      <tbody className="w-full">
        <TableRow>
          <TableDiv colSpan={2}>
            <MenuCard>
              <p>Me</p>
            </MenuCard>
          </TableDiv>
          <TableDiv rowSpan={2}>
            <MenuCard>
              <p>expreience</p>
            </MenuCard>
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <MenuCard>toggler</MenuCard>
          </TableDiv>
        </TableRow>
        <TableRow>
          <TableDiv>
            <MenuCard>github</MenuCard>
          </TableDiv>
          <TableDiv>
            <MenuCard>linkedin</MenuCard>
          </TableDiv>
          <TableDiv>
            <MenuCard>contacts</MenuCard>
          </TableDiv>
        </TableRow>
      </tbody>
    </table>
  );
};
