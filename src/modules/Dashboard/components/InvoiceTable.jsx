/** @jsx jsx */
import { Avatar, Badge, Box, Button, Flex, Text } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import { withTheme } from "emotion-theming";
import React from "react";
import makeData from "../../../utils/makeData";
import Table from "../../../components/Table";

const InvoiceTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "No.",
        accessor: "index+1"
      },
      {
        Header: "Client",
        accessor: "client",
        Cell: ({
          row: {
            original: { client, src, email = "" }
          }
        }) => (
          <Flex align="center">
            <Avatar size="sm" name="random-image" src={src} mr={4} />
            <Box>
              <Text>{client}</Text>
              <Text color="#6b7280">{email}</Text>
            </Box>
          </Flex>
        )
      },
      {
        Header: <Box textAlign="right">Issue Date</Box>,
        accessor: "issueDate",
        Cell: ({
          row: {
            original: { issueDate }
          }
        }) => <Box textAlign="right">{issueDate}</Box>
      },

      {
        Header: "Due Date",
        accessor: "dueDate"
      },
      {
        Header: <Box textAlign="right">Amount</Box>,
        accessor: "amount",
        Cell: ({
          row: {
            original: { amount }
          }
        }) => <Box textAlign="right">{amount}</Box>
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({
          row: {
            original: { status }
          }
        }) => (
          <Badge
            borderRadius="999px"
            px={3}
            py={"2px"}
            variantColor={
              status === "Pending"
                ? "orange"
                : status === "Paid"
                ? "green"
                : status === "Overdue"
                ? "red"
                : ""
            }
            fontWeight={600}
            textTransform="capitalize"
          >
            {status}
          </Badge>
        )
      },
      {
        Header: "",
        accessor: "no",
        Cell: () => (
          <Button variant="link" fontWeight={500} color="blue.700">
            View
          </Button>
        )
      }
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return data.length > 0 ? (
    <Table data={data} columns={columns} noDataText="No result" />
  ) : (
    <Flex
      justify="center"
      align="center"
      direction="column"
      boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      minHeight={400}
      borderRadius={6}
    >
      <NoDataImage viewBox="0 0 1200 800" width="340px" height="260px" />
      <Text color="gray.500">There is no client yet 🍃</Text>
    </Flex>
  );
};

export default withTheme(InvoiceTable);
