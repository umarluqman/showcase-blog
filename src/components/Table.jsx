/** @jsx jsx */
import { jsx } from "@emotion/core";
import { memo, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { theme, Text } from "@chakra-ui/core";
import { StyledTable } from "./styles";

const Table = ({
  columns = [],
  data = [],
  fetchData = () => {},
  pageCount: controlledPageCount,
  selectedRows = [],
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: !!controlledPageCount,
      pageCount: controlledPageCount,
      expandSubRows: false,
    },

    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const setTbodyRowBg = (row) => {
    return selectedRows.includes(row.original.id) && theme.colors.gray[200];
  };

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            css={{
              backgroundColor: "#EDF2F77A",
            }}
          >
            {headerGroup.headers.map((column, idx) => {
              const { width, textAlign = "left" } = column;
              return (
                <Text
                  as="th"
                  fontSize="sm"
                  color="gray.500"
                  {...column.getHeaderProps()}
                  css={{
                    textAlign,
                    width,
                    textTransform: "uppercase",
                    fontWeight: 400,
                    padding: "1rem .75rem",
                    letterSpacing: 1.3,
                  }}
                >
                  {column.render("Header")}
                </Text>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(
          (row) =>
            prepareRow(row) || (
              <React.Fragment key={row.index}>
                <tr
                  {...row.getRowProps()}
                  css={{
                    backgroundColor: setTbodyRowBg(row),
                    borderRadius: 2,
                    fontSize: 14,
                  }}
                >
                  {row.cells.map((cell) => {
                    const { width, textAlign } = cell.column;
                    return (
                      <td
                        {...cell.getCellProps()}
                        css={{
                          width,
                          textAlign,
                          padding: "1rem .75rem",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              </React.Fragment>
            )
        )}
      </tbody>
    </StyledTable>
  );
};

export default memo(Table);
