/** @jsx jsx */
import {
  Avatar,
  Tag,
  TagLabel,
  Badge,
  TagIcon,
  Box,
  Button,
  Flex,
  Text,
  Grid,
  theme
} from "@chakra-ui/core";
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import InvoiceTable from "./components/InvoiceTable";
import dayjs from "dayjs";
import faker from "faker";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const MenuButton = ({ children, ...props }) => {
  return (
    <Button
      variant="ghost"
      variantColor="blue"
      css={{
        color: theme.colors.blue[800]
      }}
    >
      {children}
    </Button>
  );
};

const SubtleCard = ({ label }) => {
  return (
    <Box>
      <Text
        color="blue.100"
        textTransform="uppercase"
        letterSpacing={1.3}
        fontWeight={500}
      >
        {label}
      </Text>
      <Text color="white" fontWeight={200} fontSize="3xl">
        {"RM " +
          new Intl.NumberFormat("en-MY", {
            maximumSignificantDigits: 3
          }).format(Math.floor(Math.random() * 10000))}
      </Text>

      <Tag size="sm" rounded="full" variant="solid" bg="#1e4e8cb8" mt={2}>
        <TagLabel py={1} px={1} mr={2}>
          View all
        </TagLabel>
        <Box
          css={css`
            background-color: ${theme.colors.blue[800]};
            width: 18px;
            height: 18px;
            border-radius: 50%;
            position: relative;
            margin-right: -3px;
          `}
        >
          <TagIcon
            icon="chevron-right"
            size="18px"
            css={{
              position: "absolute",
              color: "white"
            }}
          />
        </Box>
      </Tag>
    </Box>
  );
};

const ObviousCard = () => {
  const statusChance = Math.random();
  const status =
    statusChance > 0.66 ? "Paid" : statusChance > 0.33 ? "Pending" : "Overdue";
  return (
    <Flex
      direction="column"
      borderRadius={"8px"}
      boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      bg="white"
    >
      <Box p={4}>
        <Flex justify="space-between">
          <Text fontWeight={600}>{faker.name.findName()}</Text>
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
        </Flex>
        <Text color="white" fontWeight={400} fontSize="xl" color="blue.800">
          {"RM " +
            new Intl.NumberFormat("en-MY", {
              maximumSignificantDigits: 3
            }).format(Math.floor(Math.random() * 10000))}
        </Text>
        <Text>
          Due {dayjs(randomDate(new Date(2019, 0, 1), new Date())).toNow()}
        </Text>
      </Box>
      <Flex justify="center" bg="gray.50" borderRadius="0 0 8px 8px">
        <Button
          variant="ghost"
          // color="gray.500"
          py={1}
          w="100%"
          variantColor="gray"
          fontWeight={400}
          rightIcon="chevron-right"
        >
          View Invoice
        </Button>
      </Flex>
    </Flex>
  );
};
const Index = () => {
  return (
    <Flex align="center" minHeight="100vh" direction="column" bg="gray.100">
      <Flex justify="space-between" w="100%" p={4} align="center">
        <Box width={256}>Logo</Box>
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap={8}>
          <MenuButton>Dashboard</MenuButton>
          <MenuButton>Invoices</MenuButton>
          <MenuButton>Clients</MenuButton>
          <MenuButton>Expenses</MenuButton>
        </Grid>
        <Flex align="center">
          <Button
            color="white"
            bg="blue.600"
            leftIcon="add"
            borderRadius={999}
            py={2}
            px={6}
            mr={8}
            _hover={{
              bg: "blue.800",
              transition: "0.3s"
            }}
          >
            New Invoice
          </Button>
          <Avatar
            mr={4}
            src="https://source.unsplash.com/random/50x50"
            alt="random-image-from-unsplash"
          ></Avatar>
        </Flex>
      </Flex>
      <Flex justify="center" w="100%" p={6} align="center" bg="blue.600" mb={6}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(335px, 1fr))"
          maxWidth={1054}
          gap={6}
        >
          <SubtleCard label="overdue"></SubtleCard>
          <SubtleCard label="in draft"></SubtleCard>
          <SubtleCard label="total outstanding"></SubtleCard>
        </Grid>
      </Flex>
      <Box mb={6}>
        <Text fontSize="2xl" letterSpacing={1} py={4} color="blue.800">
          Recent Invoices
        </Text>
        <Grid
          templateColumns="repeat(auto-fit, minmax(335px, 1fr))"
          maxWidth={1054}
          gap={6}
        >
          <ObviousCard></ObviousCard>
          <ObviousCard></ObviousCard>
          <ObviousCard></ObviousCard>
        </Grid>
      </Box>
      <Flex maxWidth={1054} width="100%" direction="column" mb={16}>
        <Text fontSize="2xl" letterSpacing={1} py={4} color="blue.800">
          All Invoices
        </Text>
        <InvoiceTable />
      </Flex>
    </Flex>
  );
};

export default withTheme(Index);
