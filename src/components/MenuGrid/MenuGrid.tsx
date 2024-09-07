import { MenuCard } from "../MenuCard/MenuCard";

import "./MenuGrid.css";

export const MenuGrid = () => {
  return (
    <table className="menu-grid">
      <tr>
        <td colSpan={2}>
          <MenuCard>
            <p>Me</p>
          </MenuCard>
        </td>
        <td rowSpan={2}>
          <MenuCard>
            {" "}
            <p>contacts</p>
          </MenuCard>
        </td>
      </tr>
      <tr>
        <td>
          <MenuCard>a</MenuCard>
        </td>
        <td>
          <MenuCard>b</MenuCard>
        </td>
      </tr>
      <tr>
        <td>
          <MenuCard>c</MenuCard>
        </td>
        <td>
          <MenuCard>d</MenuCard>
        </td>
        <td>
          <MenuCard>e</MenuCard>
        </td>
      </tr>
    </table>
  );
};
