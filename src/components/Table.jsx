/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { memo, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { theme, Text, Flex } from "@chakra-ui/core";
import { StyledTable, NoDataRow } from "./styles";

const Table = ({
  columns = [],
  data = [],
  fetchData = () => {},
  loading = false,
  pageCount: controlledPageCount,

  selectedRows = [],
  noDataText = "",
  extraColumnInAction,
  className
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,

    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: !!controlledPageCount,
      pageCount: controlledPageCount,
      expandSubRows: false
    },

    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const setTheadTextAlign = (items, idx) => {
    return page.length === 0 || idx !== 0
      ? idx === items.length - 1
        ? "center"
        : "left"
      : "center";
  };

  const setTbodyTextAlign = (items, idx) => {
    return idx === 0 ? "center" : items.length - 1 === idx ? "center" : "left";
  };

  const setTbodyRowBg = row => {
    return selectedRows.includes(row.original.id) && theme.colors.gray[200];
  };

  return (
    <>
      <StyledTable {...getTableProps()} className={className}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              css={{
                backgroundColor: "#EDF2F77A"
              }}
            >
              {headerGroup.headers.map((column, idx) => (
                <Text
                  as="th"
                  fontSize="sm"
                  color="gray.500"
                  {...column.getHeaderProps()}
                  css={{
                    textAlign: setTheadTextAlign(headerGroup.headers, idx),
                    width:
                      headerGroup.headers.length - 1 === idx &&
                      !extraColumnInAction
                        ? "8rem"
                        : idx === 0
                        ? "5.5rem"
                        : "unset",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    padding: "1rem .75rem",
                    letterSpacing: 1.3
                  }}
                >
                  {column.render("Header")}
                </Text>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(
            row =>
              prepareRow(row) || (
                <React.Fragment key={row.index}>
                  <tr
                    {...row.getRowProps()}
                    css={{
                      backgroundColor: setTbodyRowBg(row),
                      borderRadius: 2,
                      fontSize: 14
                    }}
                  >
                    {row.cells.map((cell, idx) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          css={{
                            textAlign: setTbodyTextAlign(row.cells, idx),
                            padding: "1rem .75rem"
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

      {/* <Flex justify="space-between">
        <Text color="gray.600" fontSize="sm">
          Showing {pageIndex + 1} / {pageOptions.length || 1}
        </Text>
        <Flex alignItems="center">
          <IconButton
            variant="ghost"
            variantColor={theme.colors.gray[200]}
            aria-label="First page"
            icon={"<<"}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          />
          <IconButton
            variant="ghost"
            color={theme.colors.gray[500]}
            aria-label="Last page"
            icon="chevron-left"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            fontSize={"1.75rem"}
          />
          <Circle>{pageIndex + 1}</Circle>
          <IconButton
            variant="ghost"
            fontSize={"1.75rem"}
            color={theme.colors.gray[500]}
            aria-label="Last page"
            icon="chevron-right"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          />
          <IconButton
            variant="ghost"
            variantColor={theme.colors.gray[200]}
            aria-label="Last page"
            icon={">>"}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          />
        </Flex>
      </Flex> */}
    </>
  );
};

export default memo(Table);
