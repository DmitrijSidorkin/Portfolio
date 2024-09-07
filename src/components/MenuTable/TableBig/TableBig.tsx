import classNames from "classnames";
import { MenuCard } from "@/components/MenuCard/MenuCard";

export const TableBig = () => {
  const tableClassMd =
    "md:[&>tbody>tr>td]:w-56 md:[&>tbody>tr]:w-min-56 md:[&>tbody>tr>td]:h-full md:[&>tbody>tr]:h-56";
  const tableClassLg =
    "lg:[&>tbody>tr>td]:w-64 lg:[&>tbody>tr>td]:w-min-64 lg:[&>tbody>tr>td]:h-full lg:[&>tbody>tr]:h-64";

  return (
    <table
      className={classNames(
        "border-separate hidden md:table [&>tbody>tr>td]:box-border border-spacing-5",
        tableClassMd,
        tableClassLg
      )}
    >
      <tbody className="w-full">
        <tr>
          <td colSpan={2}>
            <MenuCard>
              <p>Me</p>
            </MenuCard>
          </td>
          <td rowSpan={2}>
            <MenuCard>
              <p>expreience</p>
            </MenuCard>
          </td>
        </tr>
        <tr>
          <td>
            <MenuCard>toggler</MenuCard>
          </td>
        </tr>
        <tr>
          <td>
            <MenuCard>github</MenuCard>
          </td>
          <td>
            <MenuCard>linkedin</MenuCard>
          </td>
          <td>
            <MenuCard>contacts</MenuCard>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
