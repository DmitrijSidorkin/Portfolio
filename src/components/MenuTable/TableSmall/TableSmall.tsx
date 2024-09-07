import { MenuCard } from "@/components/MenuCard/MenuCard";
import classNames from "classnames";

export const TableSmall = () => {
  const tableClassSm =
    "border-spacing-5 [&>tbody>tr>td]: [&>tbody>tr>td]:h-full [&>tbody>tr]:w-full [&>tbody>tr]:h-48 [&>tbody>tr]:h-min-48";

  return (
    <table
      className={classNames(
        "border-separate table md:hidden [&>tbody>tr>td]:box-border w-full table-fixed",
        tableClassSm
      )}
    >
      <tbody className="w-full">
        <tr>
          <td colSpan={2}>
            <MenuCard>
              <p>Me</p>
            </MenuCard>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <MenuCard>
              <p>experience</p>
            </MenuCard>
          </td>
        </tr>
        <tr>
          <td>
            <MenuCard>
              <p>github</p>
            </MenuCard>
          </td>
          <td>
            <MenuCard>
              <p>linkedin</p>
            </MenuCard>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <MenuCard>
              <p>contacts</p>
            </MenuCard>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
