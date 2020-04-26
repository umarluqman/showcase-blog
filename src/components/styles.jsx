import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { theme } from "@chakra-ui/core";

export const StyledTable = styled("table")(
  () =>
    css`
      border: none;
      width: 100%;
      border-radius: 8px;

      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      thead tr:first-of-type {
        display: table-row;
      }
      background-color: white;
      td {
        border-top-width: 1.2px;
        border-top-style: solid;
        background-color: transparent;
        border-top-color: ${theme.colors.gray[200]};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${theme.colors.gray[200]};
      }

      &.project-table td:first-of-type {
        text-align: left;
      }
    `
);
